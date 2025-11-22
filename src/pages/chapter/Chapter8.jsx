// src/pages/chapter/Chapter8.jsx
// Emotional Intelligence – dark / glass theme, portfolio style

import React from "react";

const chips = [
  "Emotions",
  "Brain & EQ vs IQ",
  "Hard-wired vs learned",
  "Understanding emotions",
  "Managing emotions",
  "Health & decisions",
  "Self-reflection",
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

export default function Chapter8Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 08</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Emotional Intelligence (EI)
        </h1>
        <p className="mt-2 text-slate-300">
          This lesson explored what emotions are, how the brain handles them, and how emotional
          intelligence supports our studies, work, relationships, and daily decisions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* 1. Emotions basics – what they are + 3 parts */}
      <SectionCard tone="cyan" title="What are emotions – and what do they include?">
        <p className="mb-3 text-sm md:text-base">
          An emotion is a complex psychological state. It is more than just a mood; it includes how we
          feel inside, what happens in our body, and how we act on the outside.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <span className="font-semibold">Feeling / subjective experience</span> – the inner
            feeling (sad, happy, angry, afraid, etc.).
          </li>
          <li>
            <span className="font-semibold">Physiological response</span> – body reactions such as
            heartbeat changes, sweating, tight muscles, or “butterflies” in the stomach.
          </li>
          <li>
            <span className="font-semibold">Behavioural / social response</span> – facial expressions,
            tone of voice, posture, and the actions we take.
          </li>
        </ul>
      </SectionCard>

      {/* 2. Hard-wired vs learned emotions – side-by-side */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="emerald" title="Hard-wired emotions">
          <p className="mb-2 text-sm">
            Some emotions are built in from birth. They appear in all cultures and helped humans
            survive.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Basic / hard-wired:</span> sadness, joy, disgust, anger,
              surprise, fear.
            </li>
            <li>
              These reactions are fast and powerful, especially in danger or strong social situations.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="Taught & social emotions">
          <p className="mb-2 text-sm">
            Other emotions are shaped by family, culture, religion, and personal experience.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Learned / social emotions:</span> humility, forgiveness,
              empathy, optimism, compassion, shame, pride, gratitude.
            </li>
            <li>
              These emotions grow when we observe role models and reflect on our actions and values.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* 3. Brain + EQ vs IQ */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="amber" title="The emotional brain – who is driving?">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Limbic system & amygdala:</span> emotion centre of the
              brain; creates fast “fight, flight, or freeze” reactions.
            </li>
            <li>
              <span className="font-semibold">Prefrontal cortex:</span> the “CEO” – planning, judgement,
              and self-control.
            </li>
            <li>
              During teenage years, the amygdala can be more active than the prefrontal cortex. This is
              why moods and behaviour can sometimes swing quickly.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="EQ vs IQ – both matter">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">IQ</span> – thinking skills: logic, memory, and problem
              solving. It helps us learn academic content.
            </li>
            <li>
              <span className="font-semibold">EQ / EI</span> – ability to notice, understand, and manage
              emotions in ourselves and others to reach healthy outcomes.
            </li>
            <li>IQ often helps us enter a field; EI helps us grow, lead, and work with people.</li>
            <li>Emotional intelligence can be trained and improved at any age with practice.</li>
          </ul>
        </SectionCard>
      </div>

      {/* 4. EI abilities – re-framed list */}
      <SectionCard tone="emerald" title="Four core abilities of Emotional Intelligence">
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>
            <span className="font-semibold">Perceiving emotions</span> – noticing feelings in yourself
            and others through faces, voice, body language, and words.
          </li>
          <li>
            <span className="font-semibold">Using emotions</span> – using feelings to help focus,
            motivate, and be creative (for example, using mild stress to push you to study).
          </li>
          <li>
            <span className="font-semibold">Understanding emotions</span> – knowing what triggers
            certain feelings, how emotions can mix, and how they change over time.
          </li>
          <li>
            <span className="font-semibold">Managing emotions</span> – staying open to feelings but
            choosing a wise, controlled response instead of reacting blindly.
          </li>
        </ol>
      </SectionCard>

      {/* 5. Health, others, and decisions */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="cyan" title="Emotions, health & people around us">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Long-term negative states (chronic anger, fear, or stress) can damage the heart and
              weaken the immune system.
            </li>
            <li>Positive emotions support better physical health and deeper relationships.</li>
            <li>
              Emotions are often contagious – our mood can spread to friends, family, and classmates
              (emotional contagion).
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Gut feelings and decision making">
          <p className="mb-2 text-sm">
            The brain does a lot of work in the background before we make a conscious choice. A “gut
            feeling” is often a fast emotional summary of risks, rewards, and past experiences.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>The brain quickly checks previous outcomes and how each option feels.</li>
            <li>
              Emotions give each option a value – good, bad, dangerous, or exciting – and that value
              influences our final choice.
            </li>
            <li>
              Strong decisions usually mix emotion and thinking: not feelings alone, and not logic
              alone.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* 6. Managing emotions – steps + EI at uni/work */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="violet" title="Managing strong emotions – step-by-step">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Pause</span> – notice the feeling and name it (e.g.
              “I feel angry and embarrassed”).
            </li>
            <li>
              <span className="font-semibold">Breathe & ground</span> – slow breathing, a short walk,
              stretch, or drink water.
            </li>
            <li>
              <span className="font-semibold">Think</span> – ask: what triggered this? what is the real
              problem? what outcome do I want?
            </li>
            <li>
              <span className="font-semibold">Choose a response</span> – speak calmly, ask for a break,
              or use “I” statements instead of blame.
            </li>
            <li>
              <span className="font-semibold">Reflect later</span> – what did I learn and what will I
              do differently next time?
            </li>
          </ol>
        </SectionCard>

        <SectionCard tone="slate" title="Why EI matters at university and work">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Improves teamwork, conflict management, and customer interactions.</li>
            <li>
              Supports leadership – understanding people, motivating them, and staying calm when there
              is pressure.
            </li>
            <li>
              Helps to manage stress from exams, deadlines, internships, and new environments more
              safely and effectively.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* 7. Self-reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 08)">
        <p className="text-sm">
          This chapter showed me that emotions are not random; they follow patterns in the brain and
          body. I realised that I sometimes react from emotion first and think later, especially when I
          am stressed or feel criticised. From now on, I want to pause, name my feelings, and respond
          more calmly instead of exploding or shutting down. I also want to practise empathy by asking
          how the other person might feel before I speak. Building emotional intelligence will help me
          work better in teams, handle exam pressure, and be more prepared for real workplace
          situations in the future.
        </p>
      </SectionCard>
    </div>
  );
}
