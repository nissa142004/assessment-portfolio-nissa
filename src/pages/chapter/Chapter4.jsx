// src/pages/chapter/Chapter4.jsx
// Dark / glass theme. Overview + key points + short paras + checklist + self-reflection.

import React from "react";

const chips = [
  "Portfolio types",
  "PEAKS",
  "Master vs Targeted",
  "Organization",
  "Assessment portfolio",
  "Reflection (WSN)",
  "Platforms",
];

function Chip({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-500/40 bg-emerald-500/10 text-emerald-100">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {label}
    </span>
  );
}

function SectionCard({ title, tone = "emerald", children }) {
  const tones = {
    emerald: { wrap: "border-emerald-500/40 bg-emerald-900/40", title: "text-emerald-100" },
    cyan: { wrap: "border-cyan-500/40 bg-cyan-900/40", title: "text-cyan-100" },
    amber: { wrap: "border-amber-500/40 bg-amber-900/40", title: "text-amber-100" },
    slate: { wrap: "border-slate-600/60 bg-slate-900/60", title: "text-slate-100" },
    violet: { wrap: "border-violet-500/40 bg-violet-900/40", title: "text-violet-100" },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter4Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 04</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Portfolio Management
        </h1>
        <p className="mt-2 text-slate-300">
          How to build a portfolio that shows the real you, is organised clearly, and can be adapted
          for different study or career goals.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* What a portfolio is */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What is a portfolio?">
          <p>
            A portfolio is a structured collection that presents{" "}
            <span className="font-semibold">who you are, what you can do, and what you have achieved</span>.
            It should feel authentic and give a true picture of you, not a fake version.
          </p>
        </SectionCard>
        <SectionCard tone="emerald" title="Why keep one?">
          <ul className="list-disc pl-5 space-y-1">
            <li>Helps you stand out and back up your claims with real proof.</li>
            <li>Makes invisible strengths like teamwork or leadership visible.</li>
            <li>Builds confidence and creates a bridge to new opportunities.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Types & PEAKS */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="amber" title="Types of portfolios">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Personal</span> – shows creativity, interests, and style.
            </li>
            <li>
              <span className="font-semibold">Career / Dossier</span> – CV, letters, awards, and records.
            </li>
            <li>
              <span className="font-semibold">Employment</span> – work samples, performance reviews, training.
            </li>
            <li>
              <span className="font-semibold">Assessment</span> – tracks your learning and progress over time.
            </li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="PEAKS checklist">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">P</span>ersonal characteristics
            </li>
            <li>
              <span className="font-semibold">E</span>xperience
            </li>
            <li>
              <span className="font-semibold">A</span>ccomplishments
            </li>
            <li>
              <span className="font-semibold">K</span>nowledge
            </li>
            <li>
              <span className="font-semibold">S</span>kills
            </li>
          </ul>
          <p className="mt-2 text-sm text-slate-200/90">
            Use PEAKS as a quick filter when you collect and select items for your portfolio.
          </p>
        </SectionCard>
      </div>

      {/* Master vs Targeted (structure changed: combined card with two columns) */}
      <SectionCard tone="slate" title="Master vs Targeted portfolios">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-slate-50">Master portfolio – your archive</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Large collection of documents grouped using PEAKS.</li>
              <li>
                Includes bio data, people skills, learning skills, self-management, tasks, and community service.
              </li>
              <li>Recent evidence is very powerful; note gaps so you can build them later.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-slate-50">Targeted portfolio – for a specific role</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Start by describing the opportunity honestly and clearly.</li>
              <li>Identify which PEAKS the employer or assessor is really looking for.</li>
              <li>Select only the items that directly prove you have those PEAKS.</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Organizing & After */}
      <div className="grid md:grid-cols-2 gap-4 mb-6 mt-6">
        <SectionCard tone="violet" title="Organising your portfolio">
          <ul className="list-disc pl-5 space-y-1">
            <li>Cover page with name, date, professional photo, and contact details.</li>
            <li>Table of contents and clear sections or tabs.</li>
            <li>Keep everything tidy, accurate, and professional.</li>
            <li>Add decoration or design only after the content is structured.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="After you build it">
          <ul className="list-disc pl-5 space-y-1">
            <li>Review and reflect: what improved, what is still missing?</li>
            <li>Update regularly; use a binder or case if it is a physical copy.</li>
            <li>When used for grading, make sure the assessment criteria are shared clearly.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Assessment portfolio + Reflection model in a new layout */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="amber" title="Assessment portfolio – purpose & advantages">
          <ul className="list-disc pl-5 space-y-1">
            <li>Shows real work, growth, and how responsible the learner is.</li>
            <li>Encourages reflective and creative learning, not just memorising.</li>
            <li>Gives strong evidence for teacher–student discussions and decisions.</li>
            <li>
              Advantages: highlights progress, supports different learning styles, builds motivation and
              meta-cognition, respects individual differences, and improves communication.
            </li>
            <li>Challenges: takes time to create and maintain; needs a lot of student involvement.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="cyan" title="Reflection model – What? So what? Now what?">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <span className="font-semibold">What?</span> Describe the event or activity – what actually happened?
            </li>
            <li>
              <span className="font-semibold">So what?</span> Explore meaning and feelings – what did you notice or
              learn?
            </li>
            <li>
              <span className="font-semibold">Now what?</span> Decide actions – how will you apply this learning next
              time?
            </li>
          </ol>
        </SectionCard>
      </div>

      {/* Platforms */}
      <SectionCard tone="slate" title="Popular platforms for digital portfolios">
        <p className="mb-2">
          Choose one or two main formats and keep them updated instead of spreading work everywhere.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>LinkedIn, GitHub Pages (for developers), WordPress, Google Sites</li>
          <li>Behance, Adobe Portfolio (for creative work), Wix, Squarespace</li>
          <li>Personal blogs/websites, or simple PPT/PDF versions for quick sharing</li>
        </ul>
      </SectionCard>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 04)">
        <p>
          Working on my portfolio made me see my progress more clearly and reminded me of skills I had forgotten about.
          I plan to keep a large master archive and then design targeted versions for different jobs or courses. Using
          the “What – So what – Now what” approach, I will add a short reflection after each major project. My next
          steps are to upload my latest work, link each item to PEAKS, and prepare a clean cover page and contents so
          that my portfolio looks ready for both assessment and real interviews.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter4Section from './Chapter4.jsx' and render <Chapter4Section /> where Chapter 04 should appear.
