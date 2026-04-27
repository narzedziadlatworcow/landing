import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";

if (import.meta.env.PROD) {
  const w = window as unknown as { clarity?: { q?: unknown[] } & ((...args: unknown[]) => void) };
  const stub = function (...args: unknown[]) {
    (stub.q = stub.q || []).push(args);
  } as { (...args: unknown[]): void; q?: unknown[] };
  w.clarity = w.clarity || stub;
  const tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.clarity.ms/tag/wi8yoqxauc";
  document.head.appendChild(tag);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
