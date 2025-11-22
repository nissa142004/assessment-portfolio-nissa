// src/pages/chapter/Chapter1.jsx
// Dark glass theme. Restructured layout, same concepts/content in simpler wording + image section.

import React from "react";


// If you already use ChapterLayout, uncomment the next line and wrap <Chapter1Section /> below with it.
// import ChapterLayout from "../../layouts/ChapterLayout.jsx";
import c1 from "../../assets/c1.jpg"; 

const chips = [
  "Professional skills",
  "Employability",
  "Communication",
  "Teamwork",
  "Problem-solving",
  "Adaptability",
  "Time management",
  "Leadership",
  "Values",
  "Beliefs",
  "Attitudes",
  "Character",
  "Johari Window",
];

const chipStyles = {
  "Professional skills": {
    wrapper: "border-emerald-500/40 bg-emerald-500/10 text-emerald-100",
    dot: "bg-emerald-400",
  },
  Employability: {
    wrapper: "border-cyan-500/40 bg-cyan-500/10 text-cyan-100",
    dot: "bg-cyan-400",
  },
  Communication: {
    wrapper: "border-amber-500/40 bg-amber-500/10 text-amber-100",
    dot: "bg-amber-400",
  },
  Teamwork: {
    wrapper: "border-indigo-500/40 bg-indigo-500/10 text-indigo-100",
    dot: "bg-indigo-400",
  },
  "Problem-solving": {
    wrapper: "border-rose-500/40 bg-rose-500/10 text-rose-100",
    dot: "bg-rose-400",
  },
  Adaptability: {
    wrapper: "border-violet-500/40 bg-violet-500/10 text-violet-100",
    dot: "bg-violet-400",
  },
  "Time management": {
    wrapper: "border-sky-500/40 bg-sky-500/10 text-sky-100",
    dot: "bg-sky-400",
  },
  Leadership: {
    wrapper: "border-teal-500/40 bg-teal-500/10 text-teal-100",
    dot: "bg-teal-400",
  },
  Values: {
    wrapper: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-100",
    dot: "bg-fuchsia-400",
  },
  Beliefs: {
    wrapper: "border-lime-500/40 bg-lime-500/10 text-lime-100",
    dot: "bg-lime-400",
  },
  Attitudes: {
    wrapper: "border-pink-500/40 bg-pink-500/10 text-pink-100",
    dot: "bg-pink-400",
  },
  Character: {
    wrapper: "border-slate-500/40 bg-slate-500/10 text-slate-100",
    dot: "bg-slate-300",
  },
  "Johari Window": {
    wrapper: "border-amber-500/40 bg-amber-500/10 text-amber-100",
    dot: "bg-amber-400",
  },
};

function Chip({ label }) {
  const s =
    chipStyles[label] || {
      wrapper: "border-gray-500/40 bg-gray-500/10 text-gray-100",
      dot: "bg-gray-400",
    };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${s.wrapper}`}
    >
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      {label}
    </span>
  );
}

function SectionCard({ tone = "emerald", title, children }) {
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
    violet: {
      wrap: "border-violet-500/40 bg-violet-900/40",
      title: "text-violet-100",
    },
    slate: {
      wrap: "border-slate-600/60 bg-slate-900/60",
      title: "text-slate-100",
    },
  };
  const t = tones[tone] || tones.slate;
  return (
    <div
      className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl shadow-lg shadow-black/40`}
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

export default function Chapter1Section() {
  return (
    // If using ChapterLayout, wrap children with it instead of the outer div
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 01
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Introduction to Professional Skills
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          This chapter gives a quick overview of professional skills, how they
          connect with our values and behaviour, and ends with my own
          self-reflection.
        </p>

        {/* Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* PART 1 – What professional skills are */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard
          tone="cyan"
          title="Professional / Employability Skills – in simple words"
        >
          <p>
            Professional or employability skills are{" "}
            <span className="font-semibold">people-focused abilities</span> that
            help us work well with others. They are{" "}
            <span className="font-semibold">transferable</span>, which means we
            can use them in many different kinds of jobs and life situations.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Communication</li>
            <li>Teamwork &amp; collaboration</li>
            <li>Problem-solving &amp; critical thinking</li>
            <li>Adaptability &amp; flexibility</li>
            <li>Time management</li>
            <li>Leadership</li>
          </ul>
        </SectionCard>

        <SectionCard tone="emerald" title="Types of skills at the workplace">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Technical skills:</span> the
              tools, software and methods needed for a specific job (for
              example, coding languages or lab techniques).
            </li>
            <li>
              <span className="font-semibold">Soft skills:</span> how we talk,
              listen, behave ethically and work with others.
            </li>
            <li>
              <span className="font-semibold">Transferable skills:</span>{" "}
              abilities that are valuable in any job, such as analysing a
              problem, planning tasks, or staying organised.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 2 – Image + real-life connection */}
      {/* PART 2 – Image + real-life connection */}
<SectionCard
  tone="slate"
  title="In-class moment – connecting theory to our own experience"
>
  <div className="grid md:grid-cols-[1.4fr,1fr] gap-4 items-center">
    <div className="text-sm md:text-base text-slate-100/90">
      In our first lesson we shared examples from group projects,
      volunteering, and part-time work and linked them to professional
      skills like teamwork, time management and leadership. This made me
      realise that I already practise many of these skills in everyday
      life, not only in a future job. The photo here represents that kind
      of discussion and group learning atmosphere.
    </div>

    {/* 🔽 UPDATE THIS PART ONLY */}
    <div className="flex items-center justify-center">
      <img
        src={c1}
        alt="Students discussing professional skills during class"
        className="w-40 sm:w-52 md:w-60 lg:w-64 h-auto rounded-2xl
                   border border-slate-600/70 bg-slate-900/60 shadow-lg"
      />
    </div>
    {/* 🔼 UPDATE THIS PART ONLY */}
  </div>
</SectionCard>


      {/* PART 3 – Values, beliefs, attitudes, character */}
      <div className="mt-6 space-y-4 mb-6">
        <SectionCard title="Values, Beliefs, Attitudes & Character – what drives our behaviour">
          <p className="mb-2">
            These four areas together explain <em>why</em> we respond in certain
            ways at university, at work, and in our personal lives.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1 text-emerald-100">Values</h4>
              <p className="mb-2 text-slate-100/90">
                Deep principles that influence our choices – like an inner moral
                compass.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-100/90">
                <li>Honesty, Integrity, Respect</li>
                <li>Responsibility, Compassion, Fairness</li>
                <li>Courage, Excellence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-cyan-100">Beliefs</h4>
              <p className="mb-2 text-slate-100/90">
                Ideas we hold about ourselves, other people and the world.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-100/90">
                <li>Self-efficacy, Growth mindset, Optimism</li>
                <li>Locus of control, Self-worth</li>
                <li>Prejudices, Fatalism (which we need to challenge)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-amber-100">Attitudes</h4>
              <p className="mb-2 text-slate-100/90">
                Positive or negative tendencies that colour how we respond to
                people and situations.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-100/90">
                <li>Positive attitude, Open-mindedness, Tolerance</li>
                <li>Confidence, Empathy</li>
                <li>Avoid: prejudice, cynicism</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-indigo-100">Character</h4>
              <p className="mb-2 text-slate-100/90">
                The pattern of our behaviour over time – who we are when no one
                is watching.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-100/90">
                <li>Trustworthiness, Respectfulness</li>
                <li>Responsibility, Caring, Citizenship</li>
                <li>Fairness, Courage</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* PART 4 – Johari Window */}
        <SectionCard tone="violet" title="Johari Window – a tool for self-awareness (1955)">
          <p className="mb-2">
            The Johari Window is a small model that helps us think about how
            much of ourselves we share and how much we still need to discover.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-100/90">
            <li>
              <span className="font-semibold">Open:</span> things I know about
              myself and others also know.
            </li>
            <li>
              <span className="font-semibold">Blind:</span> things others notice
              in me but I am not aware of yet.
            </li>
            <li>
              <span className="font-semibold">Hidden:</span> things I know but
              choose not to show.
            </li>
            <li>
              <span className="font-semibold">Unknown:</span> parts of me that
              neither I nor others have discovered yet.
            </li>
          </ul>
          <p className="mt-2 text-slate-100/90">
            The goal is to slowly grow the{" "}
            <span className="font-semibold">Open</span> area by sharing
            appropriately and being open to feedback from other people.
          </p>
        </SectionCard>

        {/* PART 5 – Developing skills */}
        <SectionCard tone="slate" title="Ways to grow professional skills">
          <ul className="list-disc pl-5 space-y-1 text-slate-100/90">
            <li>
              <span className="font-semibold">Keep learning:</span> join short
              courses, watch tutorials, attend workshops and talks.
            </li>
            <li>
              <span className="font-semibold">Practice in real tasks:</span>{" "}
              use these skills in projects, clubs, volunteering and part-time
              jobs.
            </li>
            <li>
              <span className="font-semibold">Ask for feedback:</span> talk to
              friends, lecturers and mentors and try out their suggestions.
            </li>
            <li>
              <span className="font-semibold">Take on challenges:</span> say yes
              to new responsibilities and reflect afterwards on what went well
              and what needs work.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 01)">
        <p className="text-slate-100/90">
          This chapter helped me see that professional skills are just as
          important as technical knowledge. When communication, teamwork and
          time management are strong, projects feel smoother and less stressful.
          I also noticed a few blind spots in how I react when I am under
          pressure. From now on, I want to practise clearer writing, take more
          active roles in group work, and regularly ask for feedback so that my
          “Open” area in the Johari Window becomes bigger over time.
        </p>
      </SectionCard>

      {/* References (short format) */}
      <div className="mt-6">
        <h3 className="text-base md:text-lg font-bold text-slate-50 mb-2">
          References
        </h3>
        <ul className="list-disc pl-5 text-slate-200 text-sm space-y-1">
          <li>Peterson &amp; Seligman (2004) — Character Strengths and Virtues.</li>
          <li>Rokeach (1973) — The Nature of Human Values.</li>
          <li>Schwartz (1992) — Universals in Values (AESP, Vol. 25).</li>
          <li>Ajzen &amp; Fishbein (1980) — Attitudes &amp; Behaviour.</li>
          <li>Eagly &amp; Chaiken (1993) — The Psychology of Attitudes.</li>
        </ul>
      </div>
    </div>
  );
}

// Usage examples:
// 1) Standalone page: export default Chapter1Section and render in a route.
// 2) Inside your AllChapters page, import { default as Chapter1Section } from './Chapter1.jsx' and place <Chapter1Section />.
