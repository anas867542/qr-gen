"use client";

import { useMemo, useState, useCallback, useRef } from "react";
import type { ResumeData, ResumeTemplateId, ExperienceItem, EducationItem } from "@/lib/resume/types";
import { DEFAULT_RESUME_DATA, RESUME_TEMPLATE_LIST, emptyExperience, emptyEducation } from "@/lib/resume/types";
import { RESUME_FORMAT_OPTIONS, getFormatLabels, type ResumeFormatId } from "@/lib/resume/formats";
import { buildResumeDocx } from "@/lib/resume/buildDocx";
import { buildResumeHtml, getResumePreviewParts } from "@/lib/resume/buildHtml";

const MAX_PHOTO_BYTES = 1.8 * 1024 * 1024;

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function safeFilename(name: string) {
  const base = name.trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 48) || "resume";
  return `${base.toLowerCase()}-cv`;
}

export function ResumeTemplates() {
  const [data, setData] = useState<ResumeData>(() => ({ ...DEFAULT_RESUME_DATA }));
  const [template, setTemplate] = useState<ResumeTemplateId>("mercury");
  const [busy, setBusy] = useState<"docx" | "html" | null>(null);
  const [err, setErr] = useState("");
  const [photoHint, setPhotoHint] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const labels = useMemo(() => getFormatLabels(data.formatProfile), [data.formatProfile]);

  const preview = useMemo(() => getResumePreviewParts(data, template, labels), [data, template, labels]);

  const update = useCallback(<K extends keyof ResumeData>(key: K, value: ResumeData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  }, []);

  const updateExp = useCallback((id: string, patch: Partial<ExperienceItem>) => {
    setData((d) => ({
      ...d,
      experience: d.experience.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    }));
  }, []);

  const updateEdu = useCallback((id: string, patch: Partial<EducationItem>) => {
    setData((d) => ({
      ...d,
      education: d.education.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    }));
  }, []);

  const onPhoto = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setPhotoHint("");
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setPhotoHint("Use a JPG, PNG, or WebP image.");
      return;
    }
    if (f.size > MAX_PHOTO_BYTES) {
      setPhotoHint("Image is large — use a file under ~1.8 MB for best results.");
    }
    const r = new FileReader();
    r.onload = () => {
      const url = typeof r.result === "string" ? r.result : "";
      if (url.startsWith("data:image/")) setData((d) => ({ ...d, photoDataUrl: url }));
    };
    r.readAsDataURL(f);
  }, []);

  const clearPhoto = useCallback(() => {
    setData((d) => ({ ...d, photoDataUrl: null }));
    setPhotoHint("");
    if (fileRef.current) fileRef.current.value = "";
  }, []);

  const downloadDocx = useCallback(async () => {
    setErr("");
    setBusy("docx");
    try {
      const blob = await buildResumeDocx(data, template, labels);
      downloadBlob(blob, `${safeFilename(data.fullName)}.docx`);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not build Word file.");
    } finally {
      setBusy(null);
    }
  }, [data, template, labels]);

  const downloadHtml = useCallback(() => {
    setErr("");
    setBusy("html");
    try {
      const html = buildResumeHtml(data, template, labels);
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      downloadBlob(blob, `${safeFilename(data.fullName)}.html`);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not build HTML file.");
    } finally {
      setBusy(null);
    }
  }, [data, template, labels]);

  const syncEuropassTemplate = useCallback((fmt: ResumeFormatId) => {
    if (fmt === "europass") setTemplate("europass-inspired");
  }, []);

  return (
    <div className="resume-studio">
      <nav className="resume-format-strip" aria-label="CV format preset">
        {RESUME_FORMAT_OPTIONS.map((f) => (
          <button
            key={f.id}
            type="button"
            title={f.hint}
            className={`resume-format-chip${data.formatProfile === f.id ? " resume-format-chip-on" : ""}`}
            onClick={() => {
              update("formatProfile", f.id);
              syncEuropassTemplate(f.id);
            }}
          >
            {f.shortLabel}
          </button>
        ))}
      </nav>

      <p className="resume-studio-tagline">
        15 layouts · Photo · Languages · Certificates · Editable{" "}
        <strong>.docx</strong> &amp; <strong>.html</strong> — private, in your browser.
      </p>

      <div className="resume-studio-grid">
        <div className="resume-studio-form">
          <section className="resume-card">
            <h3 className="resume-card-title">Design</h3>
            <p className="resume-card-desc">Pick a visual layout. Download matches preview.</p>
            <div className="resume-template-scroll" role="listbox" aria-label="Resume template">
              {RESUME_TEMPLATE_LIST.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="option"
                  aria-selected={template === t.id}
                  className={`resume-tpl-tile${template === t.id ? " resume-tpl-tile-on" : ""}`}
                  onClick={() => setTemplate(t.id)}
                >
                  <span className="resume-tpl-swatch" style={{ background: t.swatch }} aria-hidden />
                  <span className="resume-tpl-name">{t.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="resume-card">
            <h3 className="resume-card-title">Photo</h3>
            <p className="resume-card-desc">Optional — shown in preview, Word, and HTML (square crop in Word).</p>
            <div className="resume-photo-row">
              <div className="resume-photo-thumb" aria-hidden>
                {data.photoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={data.photoDataUrl} alt="" width={72} height={72} />
                ) : (
                  <span className="resume-photo-placeholder">No photo</span>
                )}
              </div>
              <div className="resume-photo-actions">
                <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="resume-file-input" onChange={onPhoto} id="resume-photo-input" />
                <label htmlFor="resume-photo-input" className="btn btn-ghost resume-photo-label">
                  Upload photo
                </label>
                {data.photoDataUrl ? (
                  <button type="button" className="btn btn-ghost" onClick={clearPhoto}>
                    Remove
                  </button>
                ) : null}
              </div>
            </div>
            {photoHint ? <p className="resume-photo-hint">{photoHint}</p> : null}
          </section>

          <section className="resume-card">
            <h3 className="resume-card-title">Profile</h3>
            <div className="resume-fields resume-fields-2">
              <label className="resume-label">
                Full name
                <input className="resume-input" value={data.fullName} onChange={(e) => update("fullName", e.target.value)} autoComplete="name" />
              </label>
              <label className="resume-label">
                Headline
                <input className="resume-input" value={data.headline} onChange={(e) => update("headline", e.target.value)} />
              </label>
              <label className="resume-label">
                Email
                <input className="resume-input" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" />
              </label>
              <label className="resume-label">
                Phone
                <input className="resume-input" type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} />
              </label>
              <label className="resume-label">
                Location
                <input className="resume-input" value={data.location} onChange={(e) => update("location", e.target.value)} />
              </label>
              <label className="resume-label">
                Website
                <input className="resume-input" value={data.website} onChange={(e) => update("website", e.target.value)} placeholder="yoursite.com" />
              </label>
              <label className="resume-label">
                LinkedIn / links
                <input className="resume-input" value={data.linkedin} onChange={(e) => update("linkedin", e.target.value)} />
              </label>
            </div>
            {labels.jobTarget ? (
              <label className="resume-label resume-label-full">
                {labels.jobTarget}
                <input className="resume-input" value={data.jobTarget} onChange={(e) => update("jobTarget", e.target.value)} placeholder="Optional — e.g. Product Designer" />
              </label>
            ) : null}
          </section>

          <section className="resume-card">
            <h3 className="resume-card-title">{labels.summary}</h3>
            <textarea className="resume-textarea" rows={4} value={data.summary} onChange={(e) => update("summary", e.target.value)} />
          </section>

          <section className="resume-card">
            <h3 className="resume-card-title">{labels.experience}</h3>
            {data.experience.map((exp) => (
              <div key={exp.id} className="resume-block">
                <div className="resume-fields resume-fields-tight">
                  <label className="resume-label">
                    Title
                    <input className="resume-input" value={exp.title} onChange={(e) => updateExp(exp.id, { title: e.target.value })} />
                  </label>
                  <label className="resume-label">
                    Company
                    <input className="resume-input" value={exp.company} onChange={(e) => updateExp(exp.id, { company: e.target.value })} />
                  </label>
                  <label className="resume-label">
                    Location
                    <input className="resume-input" value={exp.location} onChange={(e) => updateExp(exp.id, { location: e.target.value })} />
                  </label>
                  <label className="resume-label">
                    Dates
                    <input className="resume-input" value={exp.dates} onChange={(e) => updateExp(exp.id, { dates: e.target.value })} placeholder="2020 — Present" />
                  </label>
                </div>
                <label className="resume-label">
                  Achievements (one per line)
                  <textarea className="resume-textarea" rows={3} value={exp.bullets} onChange={(e) => updateExp(exp.id, { bullets: e.target.value })} />
                </label>
                <button type="button" className="btn btn-ghost resume-btn-compact" onClick={() => setData((d) => ({ ...d, experience: d.experience.filter((e) => e.id !== exp.id) }))}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" className="btn btn-ghost" onClick={() => setData((d) => ({ ...d, experience: [...d.experience, emptyExperience()] }))}>
              + Add role
            </button>
          </section>

          <section className="resume-card">
            <h3 className="resume-card-title">{labels.education}</h3>
            {data.education.map((ed) => (
              <div key={ed.id} className="resume-block">
                <div className="resume-fields resume-fields-tight">
                  <label className="resume-label">
                    Degree
                    <input className="resume-input" value={ed.degree} onChange={(e) => updateEdu(ed.id, { degree: e.target.value })} />
                  </label>
                  <label className="resume-label">
                    School
                    <input className="resume-input" value={ed.school} onChange={(e) => updateEdu(ed.id, { school: e.target.value })} />
                  </label>
                  <label className="resume-label">
                    Year
                    <input className="resume-input" value={ed.year} onChange={(e) => updateEdu(ed.id, { year: e.target.value })} />
                  </label>
                </div>
                <button type="button" className="btn btn-ghost resume-btn-compact" onClick={() => setData((d) => ({ ...d, education: d.education.filter((e) => e.id !== ed.id) }))}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" className="btn btn-ghost" onClick={() => setData((d) => ({ ...d, education: [...d.education, emptyEducation()] }))}>
              + Add education
            </button>
          </section>

          <section className="resume-card">
            <h3 className="resume-card-title">{labels.languages}</h3>
            <textarea className="resume-textarea" rows={3} value={data.languages} onChange={(e) => update("languages", e.target.value)} placeholder="English — Native&#10;Spanish — B2" />
          </section>

          <section className="resume-card">
            <h3 className="resume-card-title">{labels.skills}</h3>
            <textarea className="resume-textarea" rows={3} value={data.skills} onChange={(e) => update("skills", e.target.value)} placeholder="Comma-separated or one per line" />
          </section>

          <section className="resume-card">
            <h3 className="resume-card-title">{labels.certifications}</h3>
            <textarea className="resume-textarea" rows={3} value={data.certifications} onChange={(e) => update("certifications", e.target.value)} />
          </section>

          <div className="resume-actions-bar">
            <button type="button" className="btn btn-primary" disabled={busy !== null} onClick={() => void downloadDocx()}>
              {busy === "docx" ? "Building…" : "Download .docx"}
            </button>
            <button type="button" className="btn btn-ghost" disabled={busy !== null} onClick={downloadHtml}>
              {busy === "html" ? "Building…" : "Download .html"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setData({ ...DEFAULT_RESUME_DATA });
                clearPhoto();
              }}
            >
              Reset sample
            </button>
          </div>
          {err ? <p className="resume-error">{err}</p> : null}
        </div>

        <aside className="resume-studio-preview" aria-label="Live preview">
          <div className="resume-preview-header">
            <h3 className="resume-preview-title">Live preview</h3>
            <p className="resume-preview-sub">Scroll inside the card — matches your HTML download.</p>
          </div>
          <div className="resume-preview-scroll">
            <div className="resume-preview-root">
              <style dangerouslySetInnerHTML={{ __html: preview.css }} />
              <div className={`preview-body ${preview.bodyClass}`} dangerouslySetInnerHTML={{ __html: preview.innerHtml }} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
