import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Generyczny reveal: pojedyncze [data-reveal] ─────────────────── */
function initReveals() {
  const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  if (!items.length) return;

  ScrollTrigger.batch(items, {
    start: "top 85%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        overwrite: true,
      }),
  });
}

/* ── Reveal grupowy: [data-reveal-group] z [data-reveal-item] ─────── */
function initRevealGroups() {
  gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
    if (!items.length) return;
    const start = group.dataset.revealStart || "top 80%";
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: { trigger: group, start, once: true },
    });
  });
}

/* ── SectionHead: [data-section-head] (num / title / right) ───────── */
function initSectionHeads() {
  gsap.utils.toArray<HTMLElement>("[data-section-head]").forEach((head) => {
    const num = head.querySelector("[data-head-num]");
    const ttl = head.querySelector("[data-head-title]");
    const rgt = head.querySelector("[data-head-right]");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: { trigger: head, start: "top 75%", once: true },
    });
    if (num) tl.fromTo(num, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 0.35 });
    if (ttl) tl.fromTo(ttl, { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.35 }, "-=0.2");
    if (rgt) tl.fromTo(rgt, { opacity: 0, rotate: -8, x: 10 }, { opacity: 1, rotate: 0, x: 0, duration: 0.4, ease: "back.out(2)" }, "-=0.2");
  });
}

/* ── Hero: intro char-split + draw scribble ───────────────────────── */
function initHero() {
  const hero = document.querySelector("[data-hero]");
  if (!hero) return;
  const chars = hero.querySelectorAll("[data-split-char]");
  const scribble = hero.querySelector("[data-hero-scribble]");

  const tl = gsap.timeline({ defaults: { ease: "none" } });
  if (chars.length)
    tl.to(chars, { opacity: 1, duration: 0.01, stagger: 0.022, delay: 0.1 });
  if (scribble)
    tl.to(scribble, { strokeDashoffset: 0, duration: 0.5, ease: "power2.out" }, ">+=0.1");
}

/* ── Manifest: pin + scrub timeline (char → strike → subcopy) ─────── */
function initManifest() {
  const root = document.querySelector<HTMLElement>("[data-manifest]");
  if (!root) return;
  const chars = root.querySelectorAll("[data-split-char]");
  const strike = root.querySelector("[data-manifest-strike]");
  const subcopy = root.querySelector("[data-manifest-subcopy]");

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  if (chars.length) tl.to(chars, { opacity: 1, duration: 0.01, stagger: 0.018 });
  tl.to({}, { duration: 0.3 }); // dramatyczna pauza
  if (strike) tl.to(strike, { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" });
  if (subcopy) tl.to(subcopy, { opacity: 1, y: 0, duration: 0.45 }, "-=0.15");

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  ScrollTrigger.create({
    trigger: root,
    start: "top top",
    end: isMobile ? "+=100%" : "+=143%",
    pin: true,
    scrub: 1,
    animation: tl,
  });
}

/* ── Final CTA: peak-end emphasis ─────────────────────────────────── */
function initFinalCta() {
  const card = document.querySelector("[data-cta-card]");
  if (!card) return;

  const tl = gsap.timeline({
    scrollTrigger: { trigger: card, start: "top 55%", once: true },
  });
  tl.from(card, { opacity: 0, scale: 0.94, y: 26, duration: 0.75, ease: "back.out(1.6)" })
    .from("[data-cta-title]", { opacity: 0, y: 18, duration: 0.6, ease: "power2.out" }, "-=0.35")
    .from("[data-cta-desc]", { opacity: 0, y: 16, duration: 0.55, ease: "power2.out" }, "-=0.4")
    .from("[data-cta-buttons] > *", { opacity: 0, y: 16, duration: 0.55, ease: "power2.out", stagger: 0.12 }, "-=0.38")
    .from("[data-cta-footer]", { opacity: 0, y: 14, duration: 0.5, ease: "power2.out" }, "-=0.3")
    .from("[data-cta-scribble]", { opacity: 0, rotate: 18, scale: 0.8, duration: 0.6, ease: "back.out(2)" }, "-=0.5");
}

/* ── Problem (02): karty-cytaty wlatują z kierunków + overshoot ───── */
function initProblem() {
  const root = document.querySelector<HTMLElement>("[data-anim-problem]");
  if (!root) return;
  const cards = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-quote]"));
  if (!cards.length) return;
  const enter = [
    { x: -50, y: -30 },
    { x: 70, y: 0 },
    { x: -30, y: 60 },
  ];
  cards.forEach((c, i) =>
    gsap.set(c, { opacity: 0, scale: 0.85, x: enter[i]?.x ?? 0, y: enter[i]?.y ?? 0 }),
  );
  const tl = gsap.timeline({ scrollTrigger: { trigger: root, start: "top 65%", once: true } });
  cards.forEach((c, i) =>
    tl.to(c, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.55, ease: "back.out(1.8)" }, i === 0 ? 0 : "-=0.15"),
  );
}

/* ── DarkPain (03): label → słowa stagger → zgadywanka → scribble ──── */
function initDarkPain() {
  const root = document.querySelector<HTMLElement>("[data-anim-darkpain]");
  if (!root) return;
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: { trigger: root, start: "top 70%", once: true },
  });
  tl.fromTo("[data-darkpain-label]", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 })
    .fromTo("[data-darkpain-word]", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.055 }, "-=0.25")
    .fromTo("[data-darkpain-zgadywanka]", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.35 }, ">-0.1")
    .to("[data-darkpain-scribble]", { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.15");
}

/* ── HowItWorks (05): per-krok timeline (num/title/meta/desc/mockup) ─ */
function initHowItWorks() {
  const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
  steps.forEach((step, i) => {
    const q = (s: string) => step.querySelector(s);
    const mockup = q("[data-mockup]");
    if (mockup) gsap.set(mockup, { rotate: i % 2 === 1 ? -1 : 1 });

    const tl = gsap.timeline({ scrollTrigger: { trigger: step, start: "top 70%", once: true } });
    const num = q("[data-num]"), title = q("[data-title]"), meta = q("[data-meta]"), desc = q("[data-desc]");
    if (num) tl.from(num, { opacity: 0, scale: 0.6, duration: 0.45, ease: "back.out(2.2)" });
    if (title) tl.from(title, { opacity: 0, y: 22, duration: 0.45, ease: "power2.out" }, "-=0.3");
    if (meta) tl.from(meta, { opacity: 0, rotate: -8, scale: 0.85, duration: 0.4, ease: "back.out(2)" }, "-=0.32");
    if (desc) tl.from(desc, { opacity: 0, y: 14, duration: 0.45, ease: "power2.out" }, "-=0.3");
    if (mockup) tl.from(mockup, { opacity: 0, scale: 0.94, y: 28, duration: 0.65, ease: "power3.out" }, "-=0.4");
  });
}

/* ── Course (06): pitch stagger → thumb → curriculum ──────────────── */
function initCourse() {
  const root = document.querySelector<HTMLElement>("[data-anim-course]");
  if (!root) return;
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: { trigger: root, start: "top 45%", once: true },
  });
  tl.from("[data-course-pitch] > *", { opacity: 0, y: 18, duration: 0.7, stagger: 0.12 })
    .from("[data-course-thumb]", { opacity: 0, scale: 0.95, y: 26, duration: 0.8 }, "-=0.7")
    .from("[data-course-curriculum]", { opacity: 0, y: 20, duration: 0.65 }, "-=0.4");
}

/* ── Pricing (07): headline → sub → karty stagger ─────────────────── */
function initPricing() {
  const root = document.querySelector<HTMLElement>("[data-anim-pricing]");
  if (!root) return;
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: { trigger: root, start: "top 45%", once: true },
  });
  tl.from("[data-pricing-headline]", { opacity: 0, y: 18, duration: 0.7 })
    .from("[data-pricing-sub]", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
    .from("[data-pricing-card]", { opacity: 0, y: 30, duration: 0.75, stagger: 0.15 }, "-=0.3");
}

/* ── Fallback: pokaż wszystko (gdy reduced-motion lub błąd) ────────── */
function revealAll() {
  gsap.set(
    "[data-reveal], [data-reveal-item], [data-split-char], [data-manifest-subcopy]," +
      "[data-quote], [data-darkpain-label], [data-darkpain-word], [data-darkpain-zgadywanka]," +
      "[data-course-pitch] > *, [data-course-thumb], [data-course-curriculum]," +
      "[data-pricing-headline], [data-pricing-sub], [data-pricing-card]," +
      "[data-num], [data-title], [data-meta], [data-desc], [data-mockup]",
    { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "transform,willChange" },
  );
  gsap.set("[data-hero-scribble], [data-manifest-strike], [data-darkpain-scribble]", {
    strokeDashoffset: 0,
  });
}

export function initAnimations() {
  if (reduced()) {
    revealAll();
    return;
  }
  try {
    // Hero intro — timeline na load, niezależny od scrolla
    initHero();
    // Manifest PIN musi powstać PIERWSZY: jego spacer zwiększa wysokość strony,
    // więc triggery reveal sekcji poniżej muszą liczyć pozycje już z nim.
    initManifest();
    initSectionHeads();
    initProblem();
    initDarkPain();
    initHowItWorks();
    initCourse();
    initPricing();
    initReveals();
    initRevealGroups();
    initFinalCta();

    // Przelicz wszystkie triggery z aktualnym layoutem (pin + fonty + obrazy)
    ScrollTrigger.refresh();
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh, { once: true });
  } catch (err) {
    console.error("[animations] init failed, revealing all:", err);
    revealAll();
  }
}
