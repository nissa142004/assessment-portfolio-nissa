// src/pages/chapter/Chapter6.jsx
// Dark / glass theme. Proposal writing + food-fest evaluation.
// Overview, proposal structure, internal vs external, activity/resource plan,
// indicators, budget, evaluation/report, and self-reflection.

import React from "react";

const chips = [
  "External vs Internal",
  "Executive summary",
  "Problem → Objectives",
  "Methods & timeline",
  "Activity & Resource plan",
  "Budget & M&E",
  "Evaluation report",
  "Lessons & Next steps",
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

export default function Chapter6Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 06</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Project Proposal Writing &amp; Evaluation
        </h1>
        <p className="mt-2 text-slate-300">
          How to turn a problem into a clear plan: objectives, activities, budget, and indicators – and how to
          evaluate the project after it is completed.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Project vs Proposal */}
      <SectionCard tone="cyan" title="Project vs. Proposal – what’s the difference?">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-cyan-100">What is a project?</h4>
            <p className="text-sm md:text-base">
              A project is a set of linked activities with a goal, a fixed timeline, a team, and limited resources.
              It usually moves through a cycle: idea → design → finance → implement → evaluate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-cyan-100">What is a proposal?</h4>
            <p className="text-sm md:text-base">
              The proposal is the written version of this plan. It explains the problem, your solution, who will
              benefit, the work plan, the team, the budget, and how you will measure success at the end.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Types of proposals + Prep */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="amber" title="External vs Internal proposals">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">External proposals</span> – used to bid for contracts or grants. They
              usually include an executive summary, management section, and financials.
            </li>
            <li>
              <span className="font-semibold">Internal proposals</span> – used inside an organisation to convince
              decision-makers to support an idea.
            </li>
          </ul>
          <p className="text-sm mt-2">
            For internal proposals, think carefully about the audience, visual layout, and the 4 questions:{" "}
            <span className="font-semibold">What is the problem?</span> What solution do you suggest? Can we implement
            it? Should we implement it now?
          </p>
        </SectionCard>

        <SectionCard tone="slate" title="Before you write – preparation">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Talk to beneficiaries and review earlier proposals or evaluation reports.</li>
            <li>Check existing data, consult experts, or run a quick survey/focus group.</li>
            <li>Decide on indicators early – what will count as proof that the project worked?</li>
          </ul>
        </SectionCard>
      </div>

      {/* Proposal structure */}
      <SectionCard tone="emerald" title="Proposal structure – simple template">
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <span className="font-semibold">Title &amp; Abstract</span> – short summary of the problem, main
            objectives, key activities, and a quick budget snapshot.
          </li>
          <li>
            <span className="font-semibold">Context &amp; Justification</span> – background, data, and why the project
            is needed.
          </li>
          <li>
            <span className="font-semibold">Problem → Objectives</span> – one main goal, clear measurable objectives,
            and a defined target group.
          </li>
          <li>
            <span className="font-semibold">Methods &amp; Activities</span> – what exactly you will do to reach each
            objective.
          </li>
          <li>
            <span className="font-semibold">Implementation plan</span> – timeline, responsibilities, and key
            milestones.
          </li>
          <li>
            <span className="font-semibold">Resource plan &amp; Budget</span> – direct costs vs. operational/overhead
            costs, and any expected income.
          </li>
          <li>
            <span className="font-semibold">Management &amp; Team</span> – who is involved, partner roles, and capacity.
          </li>
          <li>
            <span className="font-semibold">Monitoring &amp; Evaluation (M&amp;E)</span> – indicators, data sources,
            and reporting schedule.
          </li>
          <li>
            <span className="font-semibold">Annexes</span> – CVs, detailed data tables, charts, forms, or letters of
            support.
          </li>
        </ol>
      </SectionCard>

      {/* Activity & Resource planning (two-column) */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="cyan" title="Activity plan (mini example)">
          <div className="overflow-x-auto rounded-xl border border-slate-700/70 bg-slate-950/50">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900/70">
                <tr>
                  <th className="p-2">Activity</th>
                  <th className="p-2">Start</th>
                  <th className="p-2">End</th>
                  <th className="p-2">Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-700/70">
                  <td className="p-2">Needs assessment &amp; data</td>
                  <td className="p-2">Week 1</td>
                  <td className="p-2">Week 2</td>
                  <td className="p-2">Coordinator</td>
                </tr>
                <tr className="border-t border-slate-700/70">
                  <td className="p-2">Design solution &amp; partners</td>
                  <td className="p-2">Week 2</td>
                  <td className="p-2">Week 3</td>
                  <td className="p-2">Team</td>
                </tr>
                <tr className="border-t border-slate-700/70">
                  <td className="p-2">Implementation sprint 1</td>
                  <td className="p-2">Week 4</td>
                  <td className="p-2">Week 6</td>
                  <td className="p-2">Leads</td>
                </tr>
                <tr className="border-t border-slate-700/70">
                  <td className="p-2">Monitoring &amp; mid review</td>
                  <td className="p-2">Week 6</td>
                  <td className="p-2">Week 6</td>
                  <td className="p-2">M&amp;E</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2 text-slate-200/80">
            Tip: a simple Gantt chart can also show overlaps and dependencies between activities.
          </p>
        </SectionCard>

        <SectionCard tone="amber" title="Resource plan (cost outline)">
          <div className="overflow-x-auto rounded-xl border border-amber-500/40 bg-slate-950/50">
            <table className="w-full text-left text-sm">
              <thead className="bg-amber-900/40">
                <tr>
                  <th className="p-2">Item</th>
                  <th className="p-2">Unit</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Unit cost</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-amber-500/30">
                  <td className="p-2">Venue / Logistics</td>
                  <td className="p-2">day</td>
                  <td className="p-2">1</td>
                  <td className="p-2">—</td>
                  <td className="p-2">—</td>
                </tr>
                <tr className="border-t border-amber-500/30">
                  <td className="p-2">Materials / Printing</td>
                  <td className="p-2">lot</td>
                  <td className="p-2">1</td>
                  <td className="p-2">—</td>
                  <td className="p-2">—</td>
                </tr>
                <tr className="border-t border-amber-500/30">
                  <td className="p-2">Team time (allowances)</td>
                  <td className="p-2">hours</td>
                  <td className="p-2">—</td>
                  <td className="p-2">—</td>
                  <td className="p-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2 text-slate-200/80">
            Make sure you cover both direct costs (linked to activities) and operational costs (overheads).
          </p>
        </SectionCard>
      </div>

      {/* Indicators & M&E */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="Indicators – make them specific">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Think about: quality (what change), target group (who), place (where), quantity (how much), and time (by
              when).
            </li>
            <li>
              Example: “Ticket sales reach 500 by 18 Oct and average satisfaction score is at least 4/5.”
            </li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Monitoring & reporting">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Compare progress against your timeline and budget, at least monthly.</li>
            <li>Collect data such as counts, surveys, photos, and receipts.</li>
            <li>Have a reporting schedule: mid-term review, final report, and annexes.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Evaluation report (after the event) */}
      <SectionCard tone="cyan" title="Evaluation report – food-fest style outline">
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <span className="font-semibold">Executive summary</span> – short note of objectives, main results, and key
            takeaways.
          </li>
          <li>
            <span className="font-semibold">Objectives &amp; goals</span> – what you planned to achieve.
          </li>
          <li>
            <span className="font-semibold">Planning process</span> – roles, timeline, and preparation steps.
          </li>
          <li>
            <span className="font-semibold">Execution</span> – what actually happened and what challenges appeared.
          </li>
          <li>
            <span className="font-semibold">Budget</span> – estimated vs. actual spending, revenue, and profit or loss.
          </li>
          <li>
            <span className="font-semibold">Lessons learned</span> – specific points to change next time.
          </li>
          <li>
            <span className="font-semibold">Recommendations</span> – practical suggestions for future events.
          </li>
          <li>
            <span className="font-semibold">Conclusion</span> – overall success and impact of the project.
          </li>
        </ol>
      </SectionCard>

      {/* Mini templates */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="One-page proposal (mini template)">
          <p className="mb-2 text-sm">
            For small projects or quick approvals, you can use this shorter structure:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Title and 3-line abstract</li>
            <li>Problem statement and target group</li>
            <li>Objectives (2–3, clearly measurable)</li>
            <li>Activities and timeline (small table)</li>
            <li>Budget summary</li>
            <li>Key indicators and main risks</li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Budget totals – quick view">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Total expenses: ______</li>
            <li>Total revenue / income: ______</li>
            <li>Profit or Loss: revenue − expenses = ______</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 06)">
        <p>
          This chapter helped me connect each part of a project: from the problem, to objectives, to activities, and
          finally to budget and indicators. I now see how important it is to plan monitoring and evaluation from the
          beginning, not only at the end. For my next project, I will first write a one-page proposal, then expand it
          into a full document with an activity and resource plan. I will keep all receipts and survey results so that I
          can compare estimated vs. actual budget and write a strong evaluation report with at least three clear
          lessons and actions for improvement.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter6Section from "./Chapter6.jsx" and render <Chapter6Section /> where Chapter 06 should appear.
