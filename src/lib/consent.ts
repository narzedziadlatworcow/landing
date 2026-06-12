// Consent Mode v2 + Google Tag Manager.
//
// GTM jest jedynym loaderem tagów — GA4, Microsoft Clarity, Meta Pixel,
// Google Ads i LinkedIn konfigurujemy w panelu GTM, nie w kodzie. Tu wozimy
// wyłącznie: (1) Consent Mode v2 default ustawiany PRZED gtm.js,
// (2) załadowanie kontenera GTM, (3) `consent update` przy wyborze w bannerze.

const STORAGE_KEY = "ndt-consent";
const GTM_ID = import.meta.env.PUBLIC_GTM_ID as string | undefined;

export type Consent = { analytics: boolean; marketing: boolean };

type GlobalWithDataLayer = { dataLayer?: unknown[] };

const win = () => window as unknown as GlobalWithDataLayer;

function gtag(...args: unknown[]) {
  const w = win();
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

function consentState(c: Consent) {
  return {
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
    analytics_storage: c.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  };
}

export function getStoredConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    // Wsteczna zgodność ze starym binarnym zapisem ("granted" / "denied").
    if (raw === "granted") return { analytics: true, marketing: true };
    if (raw === "denied") return { analytics: false, marketing: false };
    const c = JSON.parse(raw) as Partial<Consent>;
    return { analytics: !!c.analytics, marketing: !!c.marketing };
  } catch {
    return null;
  }
}

export function initConsentMode() {
  const stored = getStoredConsent();
  const initial: Consent = stored ?? { analytics: false, marketing: false };

  // Consent Mode v2 default — MUSI trafić do dataLayer przed gtm.js.
  gtag("consent", "default", {
    ...consentState(initial),
    wait_for_update: 500,
  });
  gtag("js", new Date());

  if (!GTM_ID) return;

  // gtm.js (loader wszystkich tagów) — samo POBRANIE odraczamy do bezczynności,
  // ale consent default i gtm.start są już w dataLayer, więc GTM odczyta
  // poprawny stan zgody, gdy się doładuje. Zdejmuje skrypt ze ścieżki krytycznej.
  win().dataLayer!.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  whenIdle(() => {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(s);
  });
}

export function setConsent(c: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    // ignore — quota / private mode
  }
  gtag("consent", "update", consentState(c));
}

// Odpala callback gdy przeglądarka jest bezczynna, najwcześniej po `load`.
function whenIdle(cb: () => void) {
  const schedule = () => {
    const ric = (window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void;
    }).requestIdleCallback;
    if (ric) ric(cb, { timeout: 3000 });
    else setTimeout(cb, 1200);
  };
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
}
