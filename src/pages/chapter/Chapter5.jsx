// src/pages/chapter/Chapter5.jsx
// Dark / glass theme. Speaking skills + meetings: types, planning, facilitation, evaluation, reflection.

import React from "react";

// Import images
import imgTeamDiscussion from "../../assets/c52.jpg"; // Team discussion
import imgCommunication from "../../assets/c53.jpg"; // Communication


const chips = [
  "Meeting types",
  "Terminology",
  "Preparation checklist",
  "Agenda & roles",
  "Facilitation",
  "Participation",
  "Challenges",
  "Evaluation",
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

export default function Chapter5Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 05</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Meetings &amp; Speaking Skills
        </h1>
        <p className="mt-2 text-slate-300">
          How to plan, run, and take part in meetings using clear language, good roles, and focused agendas.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Terminology + Types merged in one card */}
      <SectionCard tone="cyan" title="Meeting language & types">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-cyan-100">Key terminology</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold">Agenda</span> – list of topics and timing.
              </li>
              <li>
                <span className="font-semibold">Minutes</span> – written record of decisions and actions.
              </li>
              <li>
                <span className="font-semibold">Action item</span> – task with clear owner and due date.
              </li>
              <li>
                <span className="font-semibold">Quorum</span> – minimum number of people needed to make decisions.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-cyan-100">Example meeting types</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Stand-up / progress update</li>
              <li>Planning / strategy</li>
              <li>Problem-solving / retrospective</li>
              <li>Training / briefing</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Add Image for Meeting Discussion */}
      <SectionCard tone="violet" >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <img
              src={imgTeamDiscussion}
              alt="Team Discussion"
              className="w-95 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
          <div>
            <img
              src={imgCommunication}
              alt="Communication"
              className="w-95 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      {/* Preparation */}
      <div className="mt-6">
        <SectionCard tone="amber" title="Planning a meeting – checklist">
          <ul className="list-disc pl-5 space-y-1">
            <li>Clarify purpose and outcome (decision, information, brainstorm?).</li>
            <li>Decide who must attend – stakeholders and key roles.</li>
            <li>Fix date, time, location or online link and needed facilities.</li>
            <li>Choose length and style – formal, semi-formal, or informal.</li>
            <li>
              Prepare documents: invitation, agenda, previous minutes, and working papers.
            </li>
            <li>
              Think about risks or problems that might appear and how to avoid or handle them.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Roles + Agenda combined */}
      <div className="mt-6">
        <SectionCard tone="slate" title="Roles, agenda & time">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1 text-slate-50">Common roles</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Chair / Facilitator – keeps focus, manages time, invites everyone to share.</li>
                <li>Secretary / Minute-taker – records decisions and action items.</li>
                <li>Timekeeper – monitors timings for each agenda item.</li>
                <li>
                  Participants – contribute ideas, stay on topic, and take responsibility for actions.
                </li>
                <li>Observer (optional) – watches the process and gives feedback later.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-slate-50">Sample agenda – project progress</h4>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Welcome &amp; objectives (2 min)</li>
                <li>Review last actions – closed / open (5 min)</li>
                <li>Team updates: Dev · QA · Design (10 min)</li>
                <li>Risks &amp; blockers (5 min)</li>
                <li>Decisions &amp; new actions (5 min)</li>
                <li>Next steps &amp; next meeting date (3 min)</li>
              </ol>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Facilitation + Speaking skills combined */}
      <div className="mt-6">
        <SectionCard tone="violet" title="Facilitation & speaking skills in meetings">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1 text-violet-100">Facilitation – keep people engaged</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Explain the objective and timeboxes at the start; park off-topic items.</li>
                <li>Invite quieter members by name and rotate who speaks.</li>
                <li>Summarise key points often and confirm decisions and owners.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-violet-100">Speaking skills during the meeting</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Be clear and concise; use polite phrases like “Could I add…” or “I agree because…”.</li>
                <li>Practise active listening: pay attention, paraphrase, and ask clarifying questions.</li>
                <li>Keep a neutral, professional tone and avoid interrupting others.</li>
              </ul>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Challenges & fixes */}
      <div className="mt-6">
        <SectionCard tone="cyan" title="Common challenges → fixes">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Low participation</span> → use round-robin sharing and gentle,
              direct invites.
            </li>
            <li>
              <span className="font-semibold">Time overruns</span> → give the timekeeper more authority; move items
              to a “parking lot” list for another meeting.
            </li>
            <li>
              <span className="font-semibold">Off-topic debates</span> → restate the objective, summarise, and move
              the group forward.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Evaluation */}
      <div className="mt-6">
        <SectionCard tone="slate" title="Evaluate the meeting (quick form)">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Were the objectives met? (rate 1–5)</li>
            <li>Did everyone have a chance to speak? (Yes/No)</li>
            <li>Are next steps and owners clear? (Yes/No)</li>
            <li>What should be improved for the next meeting?</li>
          </ul>
        </SectionCard>
      </div>

      {/* Class / Group activities */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Group activity – roles & agenda" tone="amber">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>List 3–4 different meeting types and write 2 objectives for each one.</li>
            <li>Assign roles for your group and write down the responsibilities.</li>
            <li>Create a 6-item agenda for a progress meeting using those roles.</li>
          </ol>
        </SectionCard>
        <SectionCard title="Facilitation & challenges" tone="amber">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Write 3 strategies your group can use to increase participation.</li>
            <li>
              Explain why time management is important; give one real or imagined example.
            </li>
            <li>List 3 common challenges in meetings and suggest a fix for each one.</li>
          </ol>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 05)">
        <p>
          In this chapter I practised how to plan a meeting, choose roles, and speak more clearly. I now understand
          how facilitation, listening, and time management change the whole atmosphere of a meeting. Next time I run
          or join a meeting, I will prepare a short agenda, invite quieter members to share, finish with actions and
          owners, and use a simple evaluation checklist so each meeting becomes better than the last.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter5Section from './Chapter5.jsx' and render <Chapter5Section /> where Chapter 05 should appear.
