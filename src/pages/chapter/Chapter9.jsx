// src/pages/chapter/Chapter9.jsx
// Dining Etiquette & Table Manners – dark glass, reorganised structure.

import React from "react";

const chips = [
  "Why table manners",
  "Place settings",
  "Bread & drinks",
  "Napkins & soup",
  "Cutlery styles",
  "Do & Don’t at table",
  "Thank-you notes",
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
    emerald: { wrap: "border-emerald-500/40 bg-emerald-950/40", title: "text-emerald-100" },
    cyan: { wrap: "border-cyan-500/40 bg-cyan-950/40", title: "text-cyan-100" },
    amber: { wrap: "border-amber-500/40 bg-amber-950/40", title: "text-amber-100" },
    slate: { wrap: "border-slate-600/60 bg-slate-950/60", title: "text-slate-100" },
    violet: { wrap: "border-violet-500/40 bg-violet-950/40", title: "text-violet-100" },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl shadow-lg shadow-black/40`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter9Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Chapter 09
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
              Dining Etiquette & Table Manners
            </h1>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Why table manners matter in professional and social settings, how to
              read a place setting, use cutlery correctly, behave politely at the
              table, and close the meal with confidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <Chip key={c} label={c} />
            ))}
          </div>
        </div>
      </header>

      {/* PART 1 – PURPOSE & FIRST IMPRESSIONS */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Why table manners matter">
          <p className="mb-2 text-sm">
            Sharing a meal is more than eating. It is a small social ritual where
            we show respect, make others comfortable and represent our
            professionalism and upbringing. People silently observe how we sit,
            talk and use cutlery.
          </p>
          <p className="text-sm">
            Good dining etiquette helps us feel relaxed at formal dinners, business
            meetings and family gatherings. It shows respect to the host, the
            servers and every guest at the table.
          </p>
        </SectionCard>

        <SectionCard tone="emerald" title="Reading the place setting">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Modern tables often include several plates, glasses and utensils for
              different courses.
            </li>
            <li>
              A simple rule is to{" "}
              <span className="font-semibold">start from the outside and move in</span>{" "}
              with each course.
            </li>
            <li>
              In many settings (e.g. US style), the salad fork is placed furthest
              on the left because salad usually arrives first.
            </li>
            <li>
              The charger or place plate mainly protects the tablecloth and
              creates a neat, decorative base for other plates.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 2 – BREAD, DRINKS, NAPKINS & SOUP */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="Bread & drinks – left or right?">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Make a lowercase <span className="font-semibold">“b”</span> with your left hand and
              a <span className="font-semibold">“d”</span> with your right hand using thumb and
              index finger.
            </li>
            <li>
              This reminds you:{" "}
              <span className="font-semibold">b = bread</span> on the left and{" "}
              <span className="font-semibold">d = drink</span> on the right.
            </li>
            <li>
              Break bread or rolls into small pieces. Butter only the piece you are
              about to eat, instead of the whole roll at once.
            </li>
            <li>
              Salt and pepper are treated as a “couple”. Pass them together, held
              by the base of the shakers.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Napkins, soup & small details">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Wait for the host to unfold their napkin first. Then place yours
              neatly on your lap – folded, not crumpled.
            </li>
            <li>
              In informal meals, leave your napkin to the left of your plate when
              you step away. In formal events, place it on your chair.
            </li>
            <li>Never use the napkin as a tissue or hide unwanted food in it.</li>
            <li>
              For soup, move the spoon gently{" "}
              <span className="font-semibold">away from you</span>, avoiding
              noise.
            </li>
            <li>
              Only drink soup directly from the cup when it is served in a small
              cup and only clear broth remains.
            </li>
            <li>
              When you finish, place the spoon on the plate under the bowl, not
              inside the empty bowl.
            </li>
            <li>
              With lemon in tea, use one hand to squeeze and the other hand to
              shield, so juice does not spray other guests.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 3 – CUTLERY BASICS */}
      <SectionCard tone="emerald" title="Grips and dining styles for cutlery">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-sm">Two main grips</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-semibold">Scalpel method</span> – knife or fork is held like
                a surgeon’s scalpel, with tines facing down towards the plate.
              </li>
              <li>
                <span className="font-semibold">Pencil method</span> – held like a pencil, resting
                comfortably between fingers.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1 text-sm">Two dining styles</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-semibold">Continental / European style:</span> cut food and
                keep the fork in the left hand and knife in the right. Eat with
                the fork tines facing down.
              </li>
              <li>
                <span className="font-semibold">American style:</span> cut a few bites, place the
                knife down, switch the fork to the right hand and eat with tines
                facing up.
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* PART 4 – BEHAVIOUR AT THE TABLE */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="Good practice at the table">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Pass food, condiments, and salt and pepper to the right, unless the
              person who asked is clearly on your left.
            </li>
            <li>
              If you notice hair or a foreign object in your food, quietly tell
              the server and ask for a new plate.
            </li>
            <li>
              If the service is poor, speak calmly with the manager instead of
              scolding the server.
            </li>
            <li>
              If you burp or sneeze, do it softly, cover your mouth and turn
              slightly away. Do not draw attention to yourself.
            </li>
            <li>
              When someone else makes a mistake, ignore it rather than correcting
              them in front of the whole table.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Common mistakes to avoid">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Do not put used knives directly on the tablecloth. Rest them on the
              plate instead.
            </li>
            <li>
              Avoid picking your teeth at the table or asking for a toothpick in
              front of everyone. Go to the restroom if needed.
            </li>
            <li>
              Do not crawl under the table to collect dropped cutlery. Ask the
              server for a clean replacement.
            </li>
            <li>
              Do not move place cards around; the host has already arranged where
              people should sit.
            </li>
            <li>
              Do not leave just because you have finished eating. Wait until the
              host clearly closes the meal.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 5 – SIGNALS & ENDING THE MEAL */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="cyan" title="Cutlery signals – finished or still eating?">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Not finished (European style):</span> utensils slightly
              crossed, fork tines down, handles on opposite sides of the plate.
            </li>
            <li>
              <span className="font-semibold">Not finished (American style):</span> knife and fork
              form a small “V”, with handles resting on the same side.
            </li>
            <li>
              <span className="font-semibold">Finished (both styles):</span> place knife and fork
              parallel at the “4:25” position on the plate, blade facing inward.
              This quietly signals the server to clear your plate.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="Thank-you notes – closing with class">
          <p className="mb-2 text-sm">
            A short, sincere thank-you note is a powerful way to complete the
            experience, especially when someone has put effort into hosting a
            formal meal or helping with an event.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Begin with a greeting and a clear “thank you”.</li>
            <li>Mention something specific you enjoyed about the meal or event.</li>
            <li>
              Send it as soon as you can – but even a late note is better than
              saying nothing.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 09)">
        <p className="text-sm">
          Before this lesson I only knew basic table manners. Now I understand
          how small details like napkin placement, how I pass the salt and how I
          hold my cutlery can shape the way others see me. I also realised that
          good etiquette is less about showing off rules and more about making
          everyone at the table feel comfortable. In future formal dinners and
          company events, I will use the correct utensils, napkin rules and
          “finished” signals more confidently. I also plan to send short
          thank-you notes after important invitations to show appreciation and
          professionalism.
        </p>
      </SectionCard>
    </div>
  );
}
