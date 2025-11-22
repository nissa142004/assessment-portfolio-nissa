// src/pages/chapter/Chapter2.jsx
// Dark / glass theme. Restructured layout + image section. Same content ideas.

import React from "react";
import c2 from "../../assets/c2.jpg";

const chips = [
  "CV purpose",
  "Resume vs CV",
  "Structure",
  "ATS keywords",
  "Tailoring",
  "Achievements",
  "Cover letter",
  "Do & Don't",
];

const chipTone = {
  wrapper:
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-500/40 bg-emerald-500/10 text-emerald-100",
  dot: "h-2 w-2 rounded-full bg-emerald-400",
};

function Chip({ label }) {
  return (
    <span className={chipTone.wrapper}>
      <span className={chipTone.dot} />
      {label}
    </span>
  );
}

function SectionCard({ title, tone = "emerald", children }) {
  const tones = {
    emerald: {
      wrap: "border-emerald-500/40 bg-emerald-900/40",
      title: "text-emerald-100",
    },
    cyan: {
      wrap: "border-cyan-500/40 bg-cyan-900/40",
      title: "text-cyan-100",
    },
    amber: {
      wrap: "border-amber-500/40 bg-amber-900/40",
      title: "text-amber-100",
    },
    slate: {
      wrap: "border-slate-600/60 bg-slate-900/60",
      title: "text-slate-100",
    },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div
      className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl`}
    >
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>
        {title}
      </h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function Chapter2Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* HEADER */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 02
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          CV &amp; Cover Letter Writing
        </h1>
        <p className="mt-2 text-slate-300">
          What a CV is, how it differs from a resume, how to structure and
          tailor it, and how to write a short, effective cover letter.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* PART 1 – CV BASICS (what + why) */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What is a CV?">
          <p>
            A CV (Curriculum Vitae) is a formal 1–2 page document that
            summarises your education, experience, skills and achievements. It
            lets recruiters quickly see whether you fit a role. A resume is
            often shorter and more condensed, although some countries use both
            words for the same thing.
          </p>
        </SectionCard>

        <SectionCard tone="emerald" title="Why your CV matters">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Make a strong first impression with clear, error-free writing.
            </li>
            <li>Show relevant proof of impact using numbers and outcomes.</li>
            <li>
              Pass Applicant Tracking Systems (ATS) by using keywords from the
              job description in a natural way.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 2 – IMAGE + REAL-LIFE CONNECTION */}
      <SectionCard tone="slate" title="In-class CV moment – from theory to practice">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-4 items-center">
          <div className="text-sm md:text-base text-slate-100/90">
            During our CV lesson we looked at sample CVs, highlighted strong
            bullet points and then marked weak ones. We also compared CVs and
            resumes used in different countries. This helped me understand what
            real recruiters look for and how to avoid common mistakes. The photo
            shows the kind of focused, practical discussion we had while
            reviewing layouts and content together.
          </div>
          <div className="flex items-center justify-center">
            <img
              src={c2}
              alt="Students analysing CV layouts during class"
              className="w-40 sm:w-52 md:w-60 lg:w-64 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      {/* PART 3 – CV STRUCTURE */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="amber" title="CV structure – the main sections">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <span className="font-semibold">Header:</span> name, phone,
              email, city; optional LinkedIn, GitHub or portfolio link.
            </li>
            <li>
              <span className="font-semibold">Profile / Summary:</span> 2–3
              lines about your strengths and career goals, tailored to the
              role.
            </li>
            <li>
              <span className="font-semibold">Experience:</span>{" "}
              reverse-chronological list with Title · Company · Dates ·
              impact-focused bullets.
            </li>
            <li>
              <span className="font-semibold">Education:</span> degree,
              institute, year and key coursework (optional).
            </li>
            <li>
              <span className="font-semibold">Skills:</span> technical and soft
              skills – be honest about your level.
            </li>
            <li>
              <span className="font-semibold">Projects / Achievements:</span>{" "}
              short bullets that show outcomes and metrics.
            </li>
            <li>
              <span className="font-semibold">Extras:</span> certifications,
              extracurriculars, languages, and referees (optional or on
              request).
            </li>
          </ol>
        </SectionCard>

        <SectionCard tone="slate" title="Layout, length & tailoring">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Keep fonts consistent and leave enough white space for easy
              reading.
            </li>
            <li>
              For most students and fresh graduates, 1–2 pages are enough;
              focus on the most relevant content.
            </li>
            <li>
              Use action verbs and measurable results in your bullets (for
              example,{" "}
              <span className="italic">
                “Improved page load time by 35%”
              </span>
              ).
            </li>
            <li>
              Adjust each CV to the specific job by mirroring key skills and
              keywords from the job post.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 4 – DOs & DON'Ts */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="CV – things to do" tone="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Start bullets with strong verbs and add metrics where possible.
            </li>
            <li>
              Use a clean, simple layout that works both on screen and when
              printed.
            </li>
            <li>
              Adapt each CV to the role; highlight the most relevant projects
              and skills first.
            </li>
            <li>Keep the document to 1–2 focused pages.</li>
          </ul>
        </SectionCard>

        <SectionCard title="CV – things to avoid" tone="slate">
          <ul className="list-disc pl-5 space-y-1">
            <li>Spelling or grammar mistakes, very long paragraphs or tiny fonts.</li>
            <li>
              Irrelevant personal data (NIC, marital status, photo) unless it is
              clearly requested.
            </li>
            <li>
              Listing responsibilities without showing results or concrete
              achievements.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 5 – COVER LETTER */}
      <SectionCard tone="cyan" title="Cover letter – purpose & simple layout">
        <p>
          A cover letter sits next to your CV and explains why you fit this
          specific role. It should be short (about one page) and focused.
        </p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>
            <span className="font-semibold">Header:</span> your contact
            details, date and the employer’s details.
          </li>
          <li>
            <span className="font-semibold">Opening:</span> mention the role,
            where you saw it and one sentence that makes them want to read on.
          </li>
          <li>
            <span className="font-semibold">Fit paragraph:</span> highlight 1–2
            achievements that clearly match the job needs.
          </li>
          <li>
            <span className="font-semibold">Why them:</span> show you know
            their products, mission or culture and connect it to your goals.
          </li>
          <li>
            <span className="font-semibold">Close:</span> polite call-to-action
            with availability and a simple sign-off.
          </li>
        </ol>
      </SectionCard>

      {/* PART 6 – EXAMPLES */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Impact bullet examples" tone="amber">
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed React feature that reduced user drop-off by 18%.</li>
            <li>
              Automated test suite with Selenium, cutting manual QA time by 40%.
            </li>
            <li>
              Led a 4-member team to deliver an e-commerce MVP in 3 weeks.
            </li>
          </ul>
        </SectionCard>

        <SectionCard
          title="Keywords (ATS) – example for a frontend role"
          tone="emerald"
        >
          <p>
            React, JavaScript/TypeScript, Tailwind CSS, REST/JSON, Git, CI/CD,
            Jest, Accessibility, Responsive design, API integration.
          </p>
        </SectionCard>
      </div>

      {/* PART 7 – ACTIVITIES */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Activity – Career ambitions" tone="slate">
          <p className="mb-2">
            Write three roles you would like to do and three you would not like
            to do, and explain briefly why.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>I like to be: ____________</li>
            <li>I don’t like to be: ____________</li>
          </ul>
        </SectionCard>

        <SectionCard title="Activity – Cover letter gap-fill" tone="slate">
          <p className="mb-2">
            Practise using words such as: advertised, candidate, contribute,
            apply, enclosed, opportunity.
          </p>
          <p className="text-sm">
            The worksheet from class gives a sample paragraph where you fill in
            these words in the correct places.
          </p>
        </SectionCard>
      </div>

      {/* PART 8 – SELF-REFLECTION */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 02)">
        <p>
          Now I understand how to present my skills clearly and prove impact
          with numbers. I will tailor my CV for each job and keep a clean,
          simple design. For cover letters, I plan to mention the role, show one
          or two strong matches from my experience, and explain why I want that
          company. My next step is to update my CV with recent projects and ask
          a friend to review it before I apply.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter2Section from "./Chapter2.jsx" and render <Chapter2Section /> where Chapter 02 should appear.
