import { SectionHead } from "@/components/ui/SectionHead";

export function Manifest() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead n="04" title="Manifest" align="center" />

        <h2 className="mx-auto max-w-[880px] text-center font-semibold tracking-tight text-ink leading-[1.08] text-[40px] md:text-[56px]">
          Wierzymy, że tworzenie{" "}
          <span className="italic text-brand">zasługuje</span>
          <br className="hidden md:block" />
          {" "}na lepsze narzędzia niż{" "}
          <span className="relative text-ink/45">
            <s className="decoration-[3px]">15 zakładek</s>
          </span>
          .
        </h2>

        <p className="mx-auto max-w-[620px] text-center text-[17px] md:text-[18px] text-ink/70 mt-8 leading-relaxed">
          NDT to nie kolejny „AI writer”.
          <br />
          To system: <b className="text-ink">strategia → research → produkcja</b>.
        </p>
      </div>
    </section>
  );
}
