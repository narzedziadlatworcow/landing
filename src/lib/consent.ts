const STORAGE_KEY = "ndt-consent";
const GA_ID = "G-J6GW0YNJK6";
const CLARITY_ID = "wi8yoqxauc";

export type ConsentValue = "granted" | "denied";

type GlobalWithAnalytics = {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: { q?: unknown[] } & ((...args: unknown[]) => void);
};

const win = () => window as unknown as GlobalWithAnalytics;

export function getStoredConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function storeConsent(value: ConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore — quota / private mode
  }
}

export function initConsentMode() {
  const w = win();
  w.dataLayer = w.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    w.dataLayer!.push(args);
  };
  w.gtag = gtag;

  const stored = getStoredConsent();
  const granted = stored === "granted";

  // Consent Mode v2 — defaults BEFORE gtag.js loads
  gtag("consent", "default", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500,
  });

  gtag("js", new Date());
  gtag("config", GA_ID);

  // gtag.js leci zawsze — w trybie denied wysyła tylko cookieless pings
  const gaTag = document.createElement("script");
  gaTag.async = true;
  gaTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(gaTag);

  if (granted) loadClarity();
}

function loadClarity() {
  const w = win();
  if (w.clarity) return;

  const stub = function (...args: unknown[]) {
    (stub.q = stub.q || []).push(args);
  } as { (...args: unknown[]): void; q?: unknown[] };
  w.clarity = stub;

  const tag = document.createElement("script");
  tag.async = true;
  tag.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(tag);
}

export function grantConsent() {
  storeConsent("granted");
  const gtag = win().gtag;
  if (gtag) {
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  }
  if (import.meta.env.PROD) loadClarity();
}

export function denyConsent() {
  storeConsent("denied");
  // gtag pozostaje w default denied; Clarity nie został załadowany
}
