export function DarkPain() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      {/* subtle purple glow */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(1000px circle at 70% 50%, hsl(286 86% 57% / 0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-9 md:py-10">
        <div className="flex items-center gap-5 md:gap-8 flex-wrap">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 shrink-0">
            03 — punkt bólu
          </span>
          <h2
            className="flex-1 min-w-[280px] font-scribble text-white leading-[1.1] text-[28px] md:text-[36px]"
            style={{ letterSpacing: "-0.01em" }}
          >
            Bez strategii każdy post to{" "}
            <span className="text-brand underline decoration-brand/70 decoration-[3px] underline-offset-4">
              zgadywanka
            </span>
            .
          </h2>
        </div>
      </div>
    </section>
  );
}
