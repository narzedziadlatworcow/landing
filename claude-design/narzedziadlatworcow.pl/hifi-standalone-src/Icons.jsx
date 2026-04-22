// Small Lucide-style icons — inlined so we don't pull the whole package.
// stroke-width 2, rounded caps/joins, fill:none, inherit currentColor.
const s = {width:"1em", height:"1em", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round"};

const I = {
  Bot: (p) => <svg {...s} {...p}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg>,
  Sparkles: (p) => <svg {...s} {...p}><path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18.5l1.9-5.8 5.8-1.9-5.8-1.9z"/><path d="M5 3v4M19 17v4M3 5h4M17 19h4"/></svg>,
  Lightbulb: (p) => <svg {...s} {...p}><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>,
  Crown: (p) => <svg {...s} {...p}><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 21h14"/></svg>,
  Rocket: (p) => <svg {...s} {...p}><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.9-.8.9-2.2 0-3-.8-.9-2.2-.9-3 0"/><path d="M12 15c-.5-1-.5-2.5-1-3.5L6 7l-2 2 5 5c1 .5 2.5.5 3.5 1"/><path d="M15 15c-1-.5-2.5-.5-3.5-1L7 9l2-2 5 5c.5 1 .5 2.5 1 3.5"/><path d="M9 12H4l1-3h3l1-3L12 3c3 0 5 2 5 5v4"/></svg>,
  Zap: (p) => <svg {...s} {...p}><path d="m4 14 7-7v5h9l-7 7v-5z"/></svg>,
  Check: (p) => <svg {...s} {...p}><path d="M20 6 9 17l-5-5"/></svg>,
  X: (p) => <svg {...s} {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>,
  Plus: (p) => <svg {...s} {...p}><path d="M5 12h14M12 5v14"/></svg>,
  Search: (p) => <svg {...s} {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  FileText: (p) => <svg {...s} {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  FolderOpen: (p) => <svg {...s} {...p}><path d="M6 14a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2z"/></svg>,
  GraduationCap: (p) => <svg {...s} {...p}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Handshake: (p) => <svg {...s} {...p}><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4M11 17H8l-2 2M4 20H2"/></svg>,
  Target: (p) => <svg {...s} {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Fingerprint: (p) => <svg {...s} {...p}><path d="M12 11c0 4 0 8-1 10M17 11a5 5 0 0 0-10 0c0 2 0 4-1 6M7 18a15 15 0 0 0 1-5 4 4 0 0 1 8 0v1M12 4a8 8 0 0 0-6 2M20 6a8 8 0 0 0-3-2"/></svg>,
  Palette: (p) => <svg {...s} {...p}><path d="M12 22a10 10 0 1 1 10-10 5 5 0 0 1-5 5h-1.8a1.7 1.7 0 0 0-1.2 2.9 1.7 1.7 0 0 1-1.2 2.9z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>,
  Layers: (p) => <svg {...s} {...p}><path d="m12 2 9 5-9 5-9-5z"/><path d="m3 17 9 5 9-5M3 12l9 5 9-5"/></svg>,
  Package: (p) => <svg {...s} {...p}><path d="M16 16v6M8 16v6M21 7.5 12 2 3 7.5 12 13z"/><path d="M3 7.5v9L12 22l9-5.5v-9"/></svg>,
  Users: (p) => <svg {...s} {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  ChevronDown: (p) => <svg {...s} {...p}><path d="m6 9 6 6 6-6"/></svg>,
  ArrowRight: (p) => <svg {...s} {...p}><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  ArrowUpDown: (p) => <svg {...s} {...p}><path d="m21 16-4 4-4-4M17 20V4M3 8l4-4 4 4M7 4v16"/></svg>,
  Play: (p) => <svg {...s} {...p}><path d="m6 3 14 9-14 9z"/></svg>,
  Bookmark: (p) => <svg {...s} {...p}><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  BookmarkCheck: (p) => <svg {...s} {...p}><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="m9 10 2 2 4-4"/></svg>,
  Globe: (p) => <svg {...s} {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>,
  Mail: (p) => <svg {...s} {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>,
  Settings: (p) => <svg {...s} {...p}><path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 1-2 0l-.1-.1a2 2 0 0 0-2.7.7l-.3.4a2 2 0 0 0 .7 2.7l.1.1a2 2 0 0 1 1 1.7v.3a2 2 0 0 1-1 1.7l-.1.1a2 2 0 0 0-.7 2.7l.3.4a2 2 0 0 0 2.7.7l.1-.1a2 2 0 0 1 2 0l.2.1a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 1 2 0l.1.1a2 2 0 0 0 2.7-.7l.3-.4a2 2 0 0 0-.7-2.7l-.1-.1a2 2 0 0 1-1-1.7v-.3a2 2 0 0 1 1-1.7l.1-.1a2 2 0 0 0 .7-2.7l-.3-.4a2 2 0 0 0-2.7-.7l-.1.1a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
  LogOut: (p) => <svg {...s} {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>,
  History: (p) => <svg {...s} {...p}><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l4 2"/></svg>,
  Send: (p) => <svg {...s} {...p}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg>,
  Youtube: (p) => <svg {...s} {...p}><path d="M22 8a3 3 0 0 0-2-3 47 47 0 0 0-8-.5 47 47 0 0 0-8 .5 3 3 0 0 0-2 3 47 47 0 0 0 0 8 3 3 0 0 0 2 3 47 47 0 0 0 8 .5 47 47 0 0 0 8-.5 3 3 0 0 0 2-3 47 47 0 0 0 0-8z"/><path d="m10 8 6 4-6 4z"/></svg>,
  Rss: (p) => <svg {...s} {...p}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>,
};

window.I = I;
