import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/cn";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function SectionHead({
  n,
  title,
  right,
  align = "left",
  className,
}: {
  n: string;
  title: string;
  right?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const num = rootRef.current?.querySelector("[data-head-num]");
      const ttl = rootRef.current?.querySelector("[data-head-title]");
      const rgt = rootRef.current?.querySelector("[data-head-right]");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });

      if (num) {
        tl.fromTo(
          num,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 0.35 },
        );
      }
      if (ttl) {
        tl.fromTo(
          ttl,
          { opacity: 0, x: -14 },
          { opacity: 1, x: 0, duration: 0.35 },
          "-=0.2",
        );
      }
      if (rgt) {
        tl.fromTo(
          rgt,
          { opacity: 0, rotate: -8, x: 10 },
          { opacity: 1, rotate: 0, x: 0, duration: 0.4, ease: "back.out(2)" },
          "-=0.2",
        );
      }

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.trigger === rootRef.current) st.kill();
        });
      };
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className={cn(
        "flex items-center gap-3 mb-8",
        align === "center" && "justify-center text-center",
        className,
      )}
    >
      <span
        data-head-num
        className="text-xs font-semibold tracking-widest uppercase text-muted inline-block"
      >
        {n}.
      </span>
      <span
        data-head-title
        className="text-xs font-semibold tracking-[0.18em] uppercase text-muted inline-block"
      >
        {title}
      </span>
      {right && (
        <span
          data-head-right
          className="ml-auto font-hand text-sm text-brand italic inline-block"
        >
          {right}
        </span>
      )}
    </div>
  );
}
