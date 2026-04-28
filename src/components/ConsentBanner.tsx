import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { denyConsent, getStoredConsent, grantConsent } from "@/lib/consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredConsent() !== null) return;
    const t = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const accept = () => {
    grantConsent();
    setVisible(false);
  };
  const deny = () => {
    denyConsent();
    setVisible(false);
  };

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50"
      role="dialog"
      aria-label="Zgoda na pliki cookies"
    >
      <div className="relative -rotate-[0.6deg] bg-white border border-border-soft rounded-xl p-5 sm:p-6 shadow-[0_12px_40px_-8px_hsl(266_51%_16%_/_0.18)]">
        <span
          aria-hidden
          className="absolute -top-2.5 left-7 h-5 w-14 rotate-[-3deg] rounded-[2px] bg-[hsl(52_97%_86%_/_0.85)] border border-[hsl(50_60%_56%_/_0.45)]"
        />
        <h3 className="mb-1.5 text-base font-semibold text-ink">
          Pliki cookies
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">
          Używamy Google Analytics i Microsoft Clarity, żeby ulepszać tę stronę.
          Bez zgody działa tak samo.
        </p>
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
          <Button variant="ghost" size="md" onClick={deny} className="sm:flex-1">
            Tylko niezbędne
          </Button>
          <Button variant="primary" size="md" onClick={accept} className="sm:flex-1">
            Akceptuję
          </Button>
        </div>
      </div>
    </div>
  );
}
