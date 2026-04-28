import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";

if (import.meta.env.PROD) {
  const w = window as unknown as {
    clarity?: { q?: unknown[] } & ((...args: unknown[]) => void);
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };

  const clarityStub = function (...args: unknown[]) {
    (clarityStub.q = clarityStub.q || []).push(args);
  } as { (...args: unknown[]): void; q?: unknown[] };
  w.clarity = w.clarity || clarityStub;
  const clarityTag = document.createElement("script");
  clarityTag.async = true;
  clarityTag.src = "https://www.clarity.ms/tag/wi8yoqxauc";
  document.head.appendChild(clarityTag);

  w.dataLayer = w.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    w.dataLayer!.push(args);
  };
  w.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-J6GW0YNJK6");
  const gaTag = document.createElement("script");
  gaTag.async = true;
  gaTag.src = "https://www.googletagmanager.com/gtag/js?id=G-J6GW0YNJK6";
  document.head.appendChild(gaTag);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
