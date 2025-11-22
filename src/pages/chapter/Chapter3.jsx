import React from "react";


import imgJobHunt from "../../assets/c3.jpg"; // Job hunting guide
import imgResumeInterview from "../../assets/c31.jpg"; // Resume interview
import imgInterviewProcess from "../../assets/c34.jpg"; // Interview process
import imgContractReview from "../../assets/c37.jpg"; // Contract review
import imgNegotiation from "../../assets/c32.jpg"; // Negotiation

const chips = [
  "Job search",
  "Company research",
  "Interview basics",
  "Non-verbal",
  "Active listening",
  "6/7 Cs",
  "STAR answers",
  "Mock interview",
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
  };
  const t = tones[tone] || tones.slate;
  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter3Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 03</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Job Hunting &amp; Interview Skills
        </h1>
        <p className="mt-2 text-slate-300">
          Learn how to search for roles that match you, explore companies in advance, and handle interviews with confident, clear communication.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Job hunting basics */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What’s out there? (Job search)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Look in many places: company websites, LinkedIn, job portals, referrals, and career fairs.</li>
            <li>Keep a small tracker: role, company, link, deadline, and current status.</li>
            <li>Adjust your CV to each vacancy and use key phrases from the advert in a natural way.</li>
          </ul>
          <div className="mt-4 flex justify-center">
            <img
              src={imgJobHunt}
              alt="Job hunting guide"
              className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <img
              src={imgContractReview}
              alt="Job hunting guide"
              className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="Research the company">
          <ul className="list-disc pl-5 space-y-1">
            <li>Check their products, services, mission, values, and recent news.</li>
            <li>For tech roles, note the stack, teams, and main clients or markets.</li>
            <li>Prepare 1–2 thoughtful questions that show you have done this research.</li>
          </ul>
                    <div className="mt-4 flex justify-center">
            <img
              src={imgInterviewProcess}
              alt="Job hunting guide"
              className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </SectionCard>
      </div>

      {/* Interview basics */}
      <SectionCard tone="amber" title="Job interview basics">
        <p className="mb-2">
          An interview is a two-way discussion about fit. You share real evidence of your skills, and they share what the job and workplace are like.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Decide your core message – the main things you want them to remember about you.</li>
          <li>Handle weaknesses honestly but briefly; focus on how you are working to improve.</li>
          <li>
            Prepare a few stories using <span className="font-semibold">STAR</span> – Situation, Task, Action, Result.
          </li>
        </ul>
          <div className="mt-4 flex justify-center gap-20">  {/* Add gap-4 here */}
  <img
    src={imgResumeInterview}
    alt="Job hunting guide"
    className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
  />
  <img
    src={imgNegotiation}
    alt="Job hunting guide"
    className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
  />
</div>

      </SectionCard>

      {/* Communication focus */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Non-verbal & verbal communication" tone="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Warm greeting, natural smile, steady eye contact, open posture, and calm speaking pace.</li>
            <li>Notice the interviewer’s body language; respond with interest and professionalism.</li>
            <li>
              Practice active listening: focus fully, show you are listening, ask for clarification, avoid quick judgment, and answer carefully.
            </li>
          </ul>
        </SectionCard>
        <SectionCard title="6/7 Cs for answers" tone="slate">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Clear</span> &amp; <span className="font-semibold">Concise</span>: get to the point without extra stories.
            </li>
            <li>
              <span className="font-semibold">Correct</span> &amp; <span className="font-semibold">Complete</span>: give accurate facts and the needed details.
            </li>
            <li>
              <span className="font-semibold">Concrete</span>: add examples, results, and numbers where possible.
            </li>
            <li>
              <span className="font-semibold">Courteous/Confident</span>: keep a polite tone and positive attitude.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Successful vs unsuccessful cues */}
      <SectionCard tone="cyan" title="What successful candidates do">
        <ul className="list-disc pl-5 space-y-1">
          <li>Speak clearly about the position and use the company name naturally in answers.</li>
          <li>Show they have researched the organisation and follow topic changes smoothly.</li>
          <li>
            Support their claims with specific examples, ask relevant questions, and talk slightly more than the interviewer without rambling.
          </li>
        </ul>
      </SectionCard>

      {/* Sample Q&A */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Common interview questions (prepare with STAR)" tone="amber">
          <ul className="list-disc pl-5 space-y-1">
            <li>Tell me about yourself.</li>
            <li>Describe a challenge you faced and how you handled it.</li>
            <li>Tell me about a time you managed a conflict in a team.</li>
            <li>Share a mistake you made and what you learned from it.</li>
            <li>Why do you want to work for this company and in this role?</li>
          </ul>
        </SectionCard>
        <SectionCard title="Example STAR answer (challenge)" tone="emerald">
          <p className="mb-1">
            <span className="font-semibold">S/T:</span> Our project was behind schedule; the deadline was 5 PM and the team lead was away.
          </p>
          <p className="mb-1">
            <span className="font-semibold">A:</span> I organised four teammates based on their strengths, focused my own time on high-priority tasks, and kept the client updated.
          </p>
          <p>
            <span className="font-semibold">R:</span> We delivered on time, and afterwards I was trusted to lead more projects – showing leadership and time-management skills.
          </p>
        </SectionCard>
      </div>

      {/* Practical checklist */}
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <SectionCard title="What to wear / take" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Choose neat, simple clothing that suits the role and company culture.</li>
            <li>Carry extra CV copies, portfolio links, a notebook and pen, and ID.</li>
            <li>Plan your route and arrive around 10–15 minutes early.</li>
          </ul>
        </SectionCard>
        <SectionCard title="Language support (quick)" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Strengths: “I’m good at… / My main strength is…”</li>
            <li>Education: “I have completed… / I recently graduated…”</li>
            <li>Experience: “From 2023–2024 I worked as… / I volunteered as…”</li>
            <li>Future goals: “I’m looking to grow my skills in…”</li>
          </ul>
        </SectionCard>
        <SectionCard title="Your questions to ask" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Ask about the team’s current priorities and daily tools.</li>
            <li>“What would success in the first 90 days look like?”</li>
            <li>Growth opportunities, mentoring, and how feedback is given.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Activities */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Activity – Mock interview (pair/group)" tone="cyan">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use your actual CV and rotate as interviewer, interviewee, and observer.</li>
            <li>Rate 1–5 on non-verbal (eye contact, posture, voice) and verbal (clarity, examples, structure).</li>
            <li>After feedback, write two strengths and two areas to improve.</li>
          </ul>
        </SectionCard>
        <SectionCard title="Activity – Q lists" tone="cyan">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Prepare two lists: possible questions interviewers may ask and questions you plan to ask them.</li>
            <li>Practice answering out loud with a timer (around 1–2 minutes per question).</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 03)">
        <p>
          This chapter showed me how powerful structured answers and body language are in interviews. I now know how to
          use STAR to give focused examples and how to listen actively instead of rushing to respond. For future
          interviews, I will research each company properly, prepare three strong stories in advance, and practise keeping
          steady eye contact while asking two thoughtful questions at the end.
        </p>
      </SectionCard>

      
    </div>
  );
}

// Usage: import Chapter3Section from './Chapter3.jsx' and render <Chapter3Section /> where Chapter 03 should appear.
