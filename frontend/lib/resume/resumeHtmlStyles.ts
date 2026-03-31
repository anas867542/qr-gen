import type { ResumeTemplateId } from "./types";

/** Shared rules; template-specific overrides in TEMPLATE_CSS */
export const RESUME_HTML_BASE = `
*{box-sizing:border-box}
img.photo{display:block;object-fit:cover}
ul.bullets{margin:6px 0 0 18px;padding:0}
li{margin:4px 0}
.exp{margin-bottom:1.1rem}
.exp-head{font-weight:700}
.exp-meta{font-size:.85rem;opacity:.75;font-style:italic;margin:2px 0 6px}
.edu{margin:.5rem 0}
.year{opacity:.7}
.contactline{font-size:.88rem;opacity:.85;margin:.25rem 0}
.jobtarget{font-size:.9rem;padding:.5rem .75rem;margin:.75rem 0;border-radius:6px}
.skillsblk,.langblk,.certblk{margin-top:.25rem;font-size:.95rem;line-height:1.5}
`;

export const TEMPLATE_CSS: Record<ResumeTemplateId, string> = {
  mercury: `
body.tpl-mercury{font-family:system-ui,-apple-system,sans-serif;line-height:1.45;color:#111827;max-width:720px;margin:0 auto;padding:28px}
.header{display:flex;gap:20px;align-items:flex-start;margin-bottom:20px}
.photo{width:100px;height:100px;border-radius:12px;border:3px solid #7c3aed}
.head-main h1{margin:0;font-size:1.85rem;font-weight:800;color:#5b21b6;letter-spacing:-.02em}
.headline{color:#6b7280;margin:4px 0 0;font-size:1.02rem}
.jobtarget{background:#f5f3ff;border-left:4px solid #7c3aed}
h2{font-size:.72rem;text-transform:uppercase;letter-spacing:.14em;color:#5b21b6;border-left:4px solid #7c3aed;padding-left:10px;margin:22px 0 10px}
.summary{font-size:.95rem}
`,

  "teal-pulse": `
body.tpl-teal-pulse{font-family:Inter,system-ui,sans-serif;line-height:1.5;color:#134e4a;max-width:700px;margin:0 auto;padding:32px}
.header{display:flex;gap:18px;align-items:center;padding-bottom:18px;border-bottom:3px solid #14b8a6;margin-bottom:22px}
.photo{width:96px;height:96px;border-radius:50%;border:4px solid #5eead4}
.head-main h1{margin:0;font-size:1.8rem;font-weight:800;color:#0f766e}
.headline{color:#0d9488;margin:6px 0 0}
.jobtarget{background:#ecfdf5;border-radius:8px}
h2{font-size:.75rem;letter-spacing:.18em;text-transform:uppercase;color:#0f766e;margin:26px 0 12px}
.summary{color:#115e59}
`,

  "executive-navy": `
body.tpl-executive-navy{font-family:Georgia,serif;line-height:1.5;color:#1a1a2e;max-width:680px;margin:0 auto;padding:36px}
.header{display:flex;justify-content:center;align-items:center;gap:20px;margin-bottom:28px;flex-wrap:wrap}
.photo{width:88px;height:88px;border-radius:4px;border:2px solid #c4a35a;flex-shrink:0}
.head-main{text-align:center;min-width:200px}
.head-main h1{margin:0;font-size:2rem;color:#1e3a5f;font-weight:700}
.headline{color:#4a5568;font-style:italic;margin:8px 0}
.jobtarget{background:#f7f3e9;border:1px solid #c4a35a;text-align:center}
h2{font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;color:#1e3a5f;border-bottom:2px solid #c4a35a;padding-bottom:6px;margin:28px 0 14px;text-align:center}
`,

  "swiss-minimal": `
body.tpl-swiss-minimal{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.45;color:#111;max-width:620px;margin:0 auto;padding:48px 28px}
.header{display:flex;gap:16px;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #000;padding-bottom:20px;margin-bottom:28px}
.photo{width:72px;height:72px;border-radius:0}
.head-main h1{margin:0;font-size:1.65rem;font-weight:700;letter-spacing:-.03em}
.headline{margin:6px 0 0;color:#444;font-weight:400;font-size:.95rem}
.jobtarget{background:#f5f5f5;border-left:3px solid #000;padding:.4rem .75rem}
h2{font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;color:#000;margin:32px 0 10px;font-weight:700}
`,

  "sidebar-charcoal": `
body.tpl-sidebar-charcoal{font-family:system-ui,sans-serif;margin:0;padding:0;display:flex;min-height:100%;color:#111}
.side{width:32%;background:#1f2937;color:#f9fafb;padding:28px 20px;min-height:100vh}
.main{flex:1;padding:28px 32px;max-width:520px}
.side .photo{width:100%;max-width:120px;height:120px;border-radius:8px;margin-bottom:16px;object-fit:cover}
.side h1{margin:0 0 8px;font-size:1.35rem;line-height:1.2}
.side .headline{font-size:.85rem;opacity:.85;margin-bottom:16px}
.side .contactline{font-size:.78rem;opacity:.9;word-break:break-word}
.main h2{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#1f2937;margin:20px 0 10px;border-bottom:1px solid #e5e7eb;padding-bottom:4px}
.main .summary{font-size:.92rem}
.main .jobtarget{margin-bottom:16px;font-size:.88rem}
`,

  "coral-bright": `
body.tpl-coral-bright{font-family:Segoe UI,system-ui,sans-serif;line-height:1.45;color:#431407;max-width:710px;margin:0 auto;padding:0}
.topbar{background:linear-gradient(135deg,#f97316,#fb7185);color:#fff;padding:28px 28px 24px}
.header{display:flex;gap:18px;align-items:center}
.photo{width:92px;height:92px;border-radius:16px;border:3px solid #fff;box-shadow:0 4px 20px rgba(0,0,0,.15)}
.head-main h1{margin:0;font-size:1.9rem;font-weight:800}
.headline{opacity:.95;margin:6px 0 0}
.contactline{color:rgba(255,255,255,.9)!important}
.inner{padding:24px 28px 40px}
.jobtarget{background:#fff7ed;border-radius:8px;color:#9a3412!important}
h2{font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;color:#ea580c;margin:22px 0 10px}
`,

  "slate-tech": `
body.tpl-slate-tech{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;line-height:1.5;color:#e2e8f0;max-width:720px;margin:0 auto;padding:0;background:#0f172a}
.banner{background:linear-gradient(180deg,#1e293b,#0f172a);padding:24px 28px;border-bottom:1px solid #334155}
.header{display:flex;gap:16px;align-items:center}
.photo{width:80px;height:80px;border-radius:8px;border:2px solid #38bdf8}
.head-main h1{margin:0;font-size:1.5rem;color:#f8fafc;font-weight:700}
.headline{color:#38bdf8;margin:6px 0 0;font-size:.9rem}
.contactline{color:#94a3b8!important}
.inner{padding:24px 28px 40px}
.jobtarget{background:#1e293b;border:1px solid #38bdf8;color:#bae6fd!important}
h2{font-size:.68rem;text-transform:uppercase;letter-spacing:.15em;color:#38bdf8;margin:24px 0 10px}
.summary{color:#cbd5e1}
.exp-meta{color:#64748b!important}
`,

  "academic-ivory": `
body.tpl-academic-ivory{font-family:Cambria,Georgia,serif;line-height:1.5;color:#292524;max-width:680px;margin:0 auto;padding:40px 32px;background:#faf8f3}
.header{display:flex;gap:20px;border-bottom:2px solid #b45309;padding-bottom:20px;margin-bottom:24px}
.photo{width:90px;height:90px;border-radius:4px;border:1px solid #d6d3d1}
.head-main h1{margin:0;font-size:1.85rem;color:#78350f}
.headline{color:#78716c;font-style:italic;margin:6px 0 0}
.jobtarget{background:#fef3c7;border:1px solid #d97706}
h2{font-size:.8rem;text-transform:uppercase;letter-spacing:.12em;color:#92400e;margin:26px 0 12px}
`,

  "europass-inspired": `
body.tpl-europass-inspired{font-family:Arial,Helvetica,sans-serif;line-height:1.45;color:#1e1e1e;max-width:720px;margin:0 auto;padding:28px}
.header{display:flex;gap:20px;align-items:flex-start;border-top:4px solid #003399;padding-top:20px}
.photo{width:105px;height:105px;border:1px solid #003399;padding:2px}
.head-main h1{margin:0;font-size:1.65rem;color:#003399;font-weight:700}
.headline{color:#444;margin:6px 0 0;font-size:.98rem}
.jobtarget{background:#e6ecf7;border-left:5px solid #003399;padding:.55rem .9rem;color:#003399!important}
h2{font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;color:#003399;background:#e6ecf7;padding:6px 10px;margin:20px 0 12px;font-weight:700}
`,

  "london-metro": `
body.tpl-london-metro{font-family:system-ui,sans-serif;line-height:1.45;color:#111;max-width:700px;margin:0 auto;padding:28px}
.header{display:flex;gap:16px;border-left:6px solid #b91c1c;padding-left:18px;margin-bottom:24px}
.photo{width:88px;height:88px;border-radius:0}
.head-main h1{margin:0;font-size:1.75rem;font-weight:800}
.headline{color:#b91c1c;margin:4px 0 0;font-weight:600}
.jobtarget{background:#fef2f2;border:1px solid #fecaca}
h2{font-size:.72rem;text-transform:uppercase;letter-spacing:.14em;color:#b91c1c;margin:22px 0 10px}
`,

  "gradient-aurora": `
body.tpl-gradient-aurora{font-family:system-ui,sans-serif;line-height:1.45;color:#1e1b4b;max-width:720px;margin:0 auto;padding:0}
.hero{background:linear-gradient(120deg,#6366f1,#a855f7 50%,#ec4899);padding:32px 28px;color:#fff}
.header{display:flex;gap:18px;align-items:center}
.photo{width:96px;height:96px;border-radius:20px;border:4px solid rgba(255,255,255,.5)}
.head-main h1{margin:0;font-size:1.85rem;font-weight:800;text-shadow:0 2px 10px rgba(0,0,0,.15)}
.headline{opacity:.95;margin:8px 0 0}
.contactline{opacity:.9!important}
.inner{padding:26px 28px 36px;background:#faf5ff}
.jobtarget{background:#ede9fe;border-radius:10px;color:#4c1d95!important}
h2{font-size:.72rem;text-transform:uppercase;letter-spacing:.14em;background:linear-gradient(90deg,#6366f1,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:22px 0 10px;font-weight:800}
`,

  "timeline-accent": `
body.tpl-timeline-accent{font-family:system-ui,sans-serif;line-height:1.45;color:#1e1b4b;max-width:700px;margin:0 auto;padding:32px 28px}
.header{display:flex;gap:18px;padding-left:16px;border-left:4px solid #4f46e5;margin-bottom:22px}
.photo{width:84px;height:84px;border-radius:50%;border:3px solid #4f46e5}
.head-main h1{margin:0;font-size:1.75rem;color:#312e81;font-weight:800}
.headline{color:#4f46e5;margin:6px 0 0}
.jobtarget{background:#eef2ff;border-radius:8px}
h2{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#4f46e5;margin:24px 0 12px;padding-left:12px;border-left:3px solid #4f46e5}
.exp{border-left:2px solid #c7d2fe;padding-left:14px;margin-left:4px}
`,

  "split-magazine": `
body.tpl-split-magazine{font-family:Georgia,serif;line-height:1.45;color:#18181b;max-width:760px;margin:0 auto;padding:0}
.magtop{display:grid;grid-template-columns:1fr 140px;gap:20px;padding:28px 28px 20px;background:#18181b;color:#fafafa}
.magtop .photo{width:120px;height:140px;object-fit:cover;border-radius:4px}
.magtop h1{margin:0;font-size:2rem;font-weight:700}
.magtop .headline{color:#f43f5e;margin:10px 0 0;font-family:system-ui,sans-serif;font-size:.95rem}
.magtop .contactline{font-family:system-ui,sans-serif;font-size:.82rem;opacity:.85}
.inner{padding:24px 28px 40px}
.jobtarget{font-family:system-ui,sans-serif;background:#fef2f2;border-radius:6px;color:#9f1239!important}
h2{font-family:system-ui,sans-serif;font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;color:#f43f5e;margin:24px 0 10px}
`,

  "photo-hero": `
body.tpl-photo-hero{font-family:system-ui,sans-serif;line-height:1.45;color:#0f172a;max-width:720px;margin:0 auto;padding:0}
.herophoto{position:relative;height:160px;background:#334155;overflow:hidden}
.herophoto img.photo{width:100%;height:100%;object-fit:cover;opacity:.85}
.herophoto .overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(15,23,42,.92))}
.herotext{position:absolute;bottom:16px;left:24px;right:24px;color:#fff}
.herotext h1{margin:0;font-size:1.75rem;font-weight:800;text-shadow:0 2px 8px rgba(0,0,0,.4)}
.herotext .headline{margin:6px 0 0;opacity:.95;font-size:.95rem}
.contactbelow{padding:16px 24px 8px;font-size:.88rem;background:#f8fafc;border-bottom:1px solid #e2e8f0}
.inner{padding:20px 24px 36px}
.jobtarget{margin:12px 24px;background:#eff6ff;border-radius:8px}
h2{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#475569;margin:20px 0 10px}
.header{display:none}
`,

  "mono-engineer": `
body.tpl-mono-engineer{font-family:ui-monospace,Courier New,monospace;line-height:1.5;color:#27272a;max-width:680px;margin:0 auto;padding:32px 24px;background:#fafafa}
.header{display:flex;gap:14px;border:2px solid #27272a;padding:16px;margin-bottom:24px;background:#fff}
.photo{width:76px;height:76px;border-radius:4px;filter:grayscale(.2)}
.head-main h1{margin:0;font-size:1.5rem;font-weight:700}
.headline{color:#52525b;margin:6px 0 0;font-size:.88rem}
.jobtarget{border:1px dashed #71717a;padding:.5rem;background:#fff}
h2{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;border-bottom:2px solid #27272a;padding-bottom:4px;margin:26px 0 12px}
`,
};
