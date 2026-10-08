import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import hero from "@/assets/hero.jpg";
import patagonia from "@/assets/patagonia.jpg";
import spain from "@/assets/spain.jpg";
import iceland from "@/assets/iceland.jpg";
import japan from "@/assets/japan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wayfinding Cycling — Adventure cycling for turning points" },
      {
        name: "description",
        content:
          "A selective 7–15 day gravel journey with structured reflection for executives and leaders in transition. 2026–2027 beta pilot, by application.",
      },
      { property: "og:title", content: "Wayfinding Cycling — Adventure for turning points" },
      {
        property: "og:description",
        content: "Party-pace gravel journeys and peer reflection for leaders between chapters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["What Is It", "#what"],
  ["Philosophy", "#philosophy"],
  ["Destinations", "#destinations"],
  ["Experience & Gear", "#experience"],
  ["Apply / Contact", "#apply"],
] as const;

const DESTINATIONS = [
  {
    name: "Patagonia",
    route: "Carretera Austral & Tierra del Fuego",
    region: "Chile / Argentina",
    img: patagonia,
    facts: ["7–10 Days", "Gravel & Wild Frontier", "Dec–Jan Season"],
    line: "Fjords, glaciers and the end of the world. Wild camping in lush wilderness.",
  },
  {
    name: "Spain",
    route: "Camino de Santiago & Montañas Vascas",
    region: "Castilla / Galicia / Euskadi",
    img: spain,
    facts: ["7 Days", "Gravel & Castilian Plateau", "Spring / Autumn"],
    line: "Remote mountains, local wine and historic routes through rugged, authentic Iberia.",
  },
  {
    name: "Iceland",
    route: "Westfjords Expedition",
    region: "Iceland",
    img: iceland,
    facts: ["7 Days", "Remote Fjords & Hot Springs", "Summer Season"],
    line: "Sub-arctic frontier, low traffic, geothermal marvels and gravel mountain passes.",
  },
  {
    name: "Japan",
    route: "Rural Kyoto to Tokyo",
    region: "Japan",
    img: japan,
    facts: ["7 Days", "Off-the-beaten-path Passes", "Spring / Autumn"],
    line: "Ancient routes, quiet zen temples, local cuisine — and plenty of climbing.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{children}</p>
  );
}

function Index() {
  const [active, setActive] = useState(0);
  const d = DESTINATIONS[active]!;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-foreground/10 bg-ink/85 text-ink-foreground backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="text-sm font-semibold tracking-[0.3em]">
            WAYFINDING <span className="text-primary">//</span> CYCLING
          </a>
          <nav className="hidden gap-8 text-sm lg:flex">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="opacity-75 transition-opacity hover:opacity-100">
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#apply"
            className="rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            Apply for Pilot Cohort
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end bg-ink text-ink-foreground">
        <img
          src={hero}
          alt="Small group of gravel cyclists riding toward a Patagonian glacier at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-32">
          <span className="inline-block border border-ink-foreground/30 px-3 py-1 text-xs uppercase tracking-[0.2em]">
            2026–2027 Beta Pilot Cohort — By Application Only
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[1.02] md:text-7xl">
            Wayfinding Through Uncertainty
            <span className="mt-3 block text-3xl italic text-sand md:text-4xl">
              Adventure cycling for turning points in life & career
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-85">
            A selective 7–15 day bicycle journey combining remote "party pace" gravel travel with
            structured reflection for executives and leaders in transition.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#apply"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Request Beta Invitation
            </a>
            <a
              href="#destinations"
              className="rounded-sm border border-ink-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-ink-foreground/10"
            >
              Explore Destinations
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-px border-t border-ink-foreground/20 pt-6 md:grid-cols-4">
            {[
              ["Group Size", "5–6 Participants", "Curated cohort"],
              ["Pace", "Party Pace", "Rhythm over speed"],
              ["Terrain", "Remote Gravel & Tarmac", "50–90 km / day"],
              ["Investment", "~$3,000–$6,000", "Per participant"],
            ].map(([k, v, s]) => (
              <div key={k} className="py-3 pr-4">
                <dt className="text-[11px] uppercase tracking-[0.2em] opacity-60">{k}</dt>
                <dd className="mt-1 font-serif text-2xl">{v}</dd>
                <dd className="text-sm opacity-60">{s}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What is it */}
      <section id="what" className="mx-auto max-w-7xl px-6 py-28">
        <Eyebrow>01 — What is it</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
          The bicycle is the vehicle; <em className="text-primary">the journey is the space.</em>
        </h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {[
            ["Not a competitive race", "No medals, no podiums, no dropping riders. Challenging but shared — nobody is deliberately left behind."],
            ["Not a luxury retreat", "Outdoorsy, rustic comfort. Authentic local culture and food, far from conference rooms and disconnected resorts."],
            ["Not just a holiday", "Deliberately built around identity transformation and peer reflection — exploration before commitment."],
          ].map(([t, b], i) => (
            <div key={t} className="bg-background p-8">
              <span className="font-serif text-5xl text-sand">0{i + 1}</span>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The daily journey rhythm · ~8 hours together
          </p>
          <ol className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6">
            {[
              ["Ride", "50–90 km at a human pace"],
              ["Explore", "Remote roads & detours"],
              ["Encounter", "Places, people, culture"],
              ["Talk", "Conversation in motion"],
              ["Eat", "Local, sourced food"],
              ["Reflect", "Reframe the day"],
            ].map(([t, s], i) => (
              <li key={t} className="border-t-2 border-foreground pt-4">
                <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 font-serif text-3xl">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="bg-accent text-accent-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-sand">
              02 — Who we are & the wayfinding philosophy
            </p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              The Midlife Chrysalis and the art of Wayfinding.
            </h2>
            <p className="mt-6 opacity-80">
              Decades spent building a career often leave individuals without a roadmap for the
              next chapter. The old identity is loosening; the new one hasn't crystallized.
            </p>
            <div className="mt-10 space-y-8">
              <div className="border-l-2 border-sand pl-6">
                <h3 className="text-2xl">Working Identity — Herminia Ibarra</h3>
                <p className="mt-2 opacity-80">
                  We don't discover our next identity purely through introspection. We act our way
                  into new possibilities — wayfinding rather than pathfinding.
                </p>
              </div>
              <div className="border-l-2 border-sand pl-6">
                <h3 className="text-2xl">The Looking Phase — Chip Conley</h3>
                <p className="mt-2 opacity-80">
                  The space between leaving an old identity and forming a new one is a productive
                  developmental stage, not a crisis to be solved immediately.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <blockquote className="font-serif text-3xl italic leading-snug md:text-4xl">
              "You don't need to know where you're going before you start moving. The bicycle
              provides movement; adventure provides context; peers provide conversation."
            </blockquote>
            <div className="border-t border-accent-foreground/20 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-sand">Founder note</p>
              <p className="mt-3 opacity-85">
                Built by a former global executive who transitioned through corporate leadership,
                entrepreneurship and global bikepacking — and found that the answer was to start
                moving and see what emerges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="mx-auto max-w-7xl px-6 py-28">
        <Eyebrow>03 — The destinations</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
          Exceptional environments that reward travelling by bicycle.
        </h2>
        <div className="mt-12 flex flex-wrap gap-2 border-b">
          {DESTINATIONS.map((x, i) => (
            <button
              key={x.name}
              onClick={() => setActive(i)}
              className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                i === active ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {x.name}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <img
            key={d.name}
            src={d.img}
            alt={`${d.route}, ${d.region}`}
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover animate-in fade-in duration-500 md:col-span-3"
          />
          <div className="flex flex-col justify-end md:col-span-2">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{d.region}</p>
            <h3 className="mt-2 text-5xl">{d.name}</h3>
            <p className="mt-1 font-serif text-2xl italic text-primary">{d.route}</p>
            <p className="mt-6 text-lg text-muted-foreground">{d.line}</p>
            <ul className="mt-8 divide-y border-y">
              {d.facts.map((f) => (
                <li key={f} className="py-3 text-sm font-medium">{f}</li>
              ))}
            </ul>
            {d.name === "Spain" && (
              <Link
                to="/camino-portugues"
                className="mt-8 block border border-primary p-5 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span className="text-xs uppercase tracking-[0.2em]">2027 Collection · Easter departure</span>
                <span className="mt-1 block font-serif text-2xl">The Portuguese Camino — Porto to Santiago →</span>
              </Link>
            )}
            <a href="#apply" className="mt-8 text-sm font-semibold text-primary underline-offset-4 hover:underline">
              Register interest in {d.name} →
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            04 — The experience & participant requirements
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
            The physical challenge creates vulnerability; the slow pace creates connection.
          </h2>
          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <dl className="grid grid-cols-3 gap-6">
              {[
                ["Distance", "50–90", "km / day"],
                ["Elevation", "500–1,200", "m climbing / day"],
                ["Duration", "~8", "hours incl. breaks, food & reflection"],
              ].map(([k, v, u]) => (
                <div key={k} className="border-t border-ink-foreground/25 pt-4">
                  <dt className="text-[11px] uppercase tracking-[0.2em] opacity-60">{k}</dt>
                  <dd className="mt-2 font-serif text-4xl md:text-5xl">{v}</dd>
                  <dd className="mt-1 text-sm opacity-60">{u}</dd>
                </div>
              ))}
            </dl>
            <ul className="space-y-6">
              {[
                ["Gear", "All-road / gravel bike capable of 40mm tires, tubeless setup, bikepacking bags."],
                ["Fitness", "Demonstrated endurance for consecutive long days on mixed terrain."],
                ["Mindset", "Openness to peer reflection, career transition exploration and group camaraderie."],
                ["Logistics", "Comprehensive personal travel / medical insurance required."],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-6 border-b border-ink-foreground/15 pb-6">
                  <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-sand">{k}</span>
                  <span className="opacity-85">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pilot notice */}
      <section className="border-y bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:gap-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Ideation & Pilot Phase
          </span>
          <p className="text-secondary-foreground">
            We are selecting our initial 5–6 participant validation cohort for late 2026 / early
            2027. Help us test and co-create the experience.
          </p>
        </div>
      </section>

      <ApplySection />
    </div>
  );
}

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(120),
  email: z.string().trim().email("Please add a valid email").max(255),
  linkedin_url: z
    .string()
    .trim()
    .max(300)
    .refine((v) => v === "" || /^https?:\/\/.+/.test(v), "Please paste a full URL")
    .optional(),
  motivation: z.string().trim().max(2000).optional(),
  preferred_destination: z.string().max(60).optional(),
});

function ApplySection() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(fd);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setError(null);
    setStatus("sending");
    const v = parsed.data;
    const { error: err } = await supabase.from("applications").insert({
      name: v.name,
      email: v.email,
      linkedin_url: v.linkedin_url || null,
      motivation: v.motivation || null,
      preferred_destination: v.preferred_destination || null,
    });
    if (err) {
      setStatus("error");
      setError("Something went wrong — please try again or email us directly.");
    } else setStatus("done");
  }

  const field =
    "mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring";

  return (
    <footer id="apply" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Eyebrow>05 — Apply / Contact</Eyebrow>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Request a beta invitation.</h2>
          <p className="mt-6 text-muted-foreground">
            Late 30s to early 60s, at or approaching a transition, seeking time and distance from
            normal routines. Tell us a little about where you are.
          </p>
          <ul className="mt-10 space-y-3 text-sm">
            <li><a className="hover:text-primary" href="mailto:hello@wayfindingcycling.com">hello@wayfindingcycling.com</a></li>
            <li><a className="hover:text-primary" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp — quick chat</a></li>
            <li><a className="hover:text-primary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-primary" href="https://www.instagram.com/wayfindingcycling" target="_blank" rel="noreferrer">Instagram — @wayfindingcycling</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          {status === "done" ? (
            <div className="border bg-card p-10">
              <h3 className="text-3xl">Thank you.</h3>
              <p className="mt-3 text-muted-foreground">
                Your application is in. We'll be in touch personally as we shape the pilot cohort.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2" noValidate>
              <label className="text-sm font-medium">Name
                <input name="name" required maxLength={120} className={field} />
              </label>
              <label className="text-sm font-medium">Email
                <input name="email" type="email" required maxLength={255} className={field} />
              </label>
              <label className="text-sm font-medium md:col-span-2">LinkedIn profile URL
                <input name="linkedin_url" type="url" maxLength={300} placeholder="https://linkedin.com/in/…" className={field} />
              </label>
              <label className="text-sm font-medium md:col-span-2">Current transition / motivation
                <textarea name="motivation" rows={4} maxLength={2000} className={field} />
              </label>
              <label className="text-sm font-medium md:col-span-2">Preferred destination
                <select name="preferred_destination" className={field} defaultValue="">
                  <option value="">No preference yet</option>
                  {DESTINATIONS.map((x) => (
                    <option key={x.name} value={x.name}>{x.name} — {x.route}</option>
                  ))}
                </select>
              </label>
              {error && <p className="text-sm text-destructive md:col-span-2">{error}</p>}
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 disabled:opacity-60 md:col-span-2"
              >
                {status === "sending" ? "Sending…" : "Apply for Pilot Cohort"}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="mt-24 flex flex-col justify-between gap-2 border-t pt-6 text-xs text-muted-foreground md:flex-row">
        <span className="tracking-[0.3em]">WAYFINDING // CYCLING</span>
        <span>Concept definition & validation phase · 2026</span>
      </div>
    </footer>
  );
}
