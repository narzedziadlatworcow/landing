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

/* ── Fallback: pokaż wszystko (gdy reduced-motion lub błąd) ────────── */
function revealAll() {
  gsap.set("[data-reveal], [data-reveal-item], [data-split-char], [data-manifest-subcopy]", {
    opacity: 1,
    y: 0,
    clearProps: "transform,willChange",
  });
  gsap.set("[data-hero-scribble], [data-manifest-strike]", { strokeDashoffset: 0 });
}

export function initAnimations() {
  if (reduced()) {
    revealAll();
    return;
  }
  try {
    initSectionHeads();
    initReveals();
    initRevealGroups();
    initHero();
    initManifest();
    initFinalCta();
    // Po załadowaniu fontów layout się zmienia → przelicz triggery
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  } catch (err) {
    console.error("[animations] init failed, revealing all:", err);
    revealAll();
  }
}
