import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/camino-hero.jpg";
import shell from "@/assets/camino-shell.jpg";
import coast from "@/assets/camino-coast.jpg";
import harbor from "@/assets/camino-harbor.jpg";
import cathedral from "@/assets/camino-cathedral.jpg";
import map from "@/assets/camino-map.jpg";

export const Route = createFileRoute("/camino-portugues")({
  head: () => ({
    meta: [
      { title: "The Portuguese Camino by Bike — Wayfinding Cycling" },
      {
        name: "description",
        content:
          "Ride from Porto to Santiago de Compostela over Easter 2027: 8 days, 6 riding days, ~200–250 km of Atlantic coast, Galician forests and Camino paths.",
      },
      { property: "og:title", content: "El Camino de Santiago: The Portuguese Way by Bike" },
      {
        property: "og:description",
        content: "Porto to Santiago for Semana Santa, March 20–28, 2027. A 2027 pilot cohort journey.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaminoPage,
});

const DAYS = [
  ["Arrival in Porto", null, "Meet the group, check your bikes, and explore Porto's historic center before starting the journey.", "Porto"],
  ["Porto to Esposende", 61, "Follow the Atlantic coastline north through coastal towns, beaches, and cycleways. Enjoy a gentle opening stage with plenty of stops along the way.", "Esposende"],
  ["Esposende to Caminha", 56, "Continue along the coast through Viana do Castelo and northern Portugal. Arrive at Caminha along the Minho estuary.", "Caminha"],
  ["Caminha to Valença", 30, "Follow the Minho River on a short recovery stage toward Valença. Spend the afternoon exploring its historic fortress and old town.", "Valença"],
  ["Valença to Pontevedra", 56, "Cross into Galicia at Tui on the queen stage. Ride through forests, rural lanes, and historic Camino paths to Pontevedra.", "Pontevedra"],
  ["Pontevedra to Padrón", 41, "Ride through Galician countryside, vineyards, and wooded lanes. Pass Caldas de Reis before reaching Padrón in the Ulla valley.", "Padrón"],
  ["Padrón to Santiago de Compostela", 25, "Ride the final kilometers through Iria Flavia and villages surrounding Santiago. Finish together in Praza do Obradoiro beneath the cathedral.", "Santiago de Compostela"],
  ["Departure / Easter Sunday", null, "Experience Santiago and Semana Santa during a free morning. Collect your Compostela if eligible, or depart (optional extra night available).", null],
] as const;

const SPECS = [
  ["Duration", "8 Days / 7 Nights"],
  ["Riding Days", "6 Riding Days"],
  ["Total Distance", "Approx. 200–250 km"],
  ["Difficulty", "Moderate (3/5)"],
  ["Terrain", "Quiet paved roads, cycleways, gravel tracks, and Camino paths"],
  ["Route Style", "Point-to-Point Journey"],
  ["Region", "Northern Portugal & Galicia (Porto to Santiago de Compostela)"],
];

const INCLUDED = [
  ["Accommodations", "Hand-picked rustic B&Bs, boutique inns, and comfortable local stays."],
  ["Meals & Gastronomy", "Scheduled daily breakfasts, lunches, regional dinners, and local tasting stops."],
  ["Leadership & Support", "Dedicated ride leadership, GPX route navigation, and basic roadside support."],
  ["Wayfinding & Workshops", "Facilitated group sessions, reflection discussions, and personal growth materials."],
];
const EXCLUDED = [
  ["International Flights", "Outbound to Porto (OPO) and return from Santiago (SCQ)."],
  ["Personal Travel Insurance", "Mandatory medical, hospitalization, and emergency evacuation insurance."],
  ["Bicycle & Gear", "Personal bicycle (or custom local rental arrangement) and personal cycling kit."],
  ["Personal Extras", "Alcoholic beverages outside included dinners, souvenirs, and discretionary tips."],
];

function Eyebrow({ children, className = "text-primary" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-medium uppercase tracking-[0.25em] ${className}`}>{children}</p>;
}

function Photo({ src, alt, ratio = "aspect-[4/3]", className = "" }: { src: string; alt: string; ratio?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm border bg-muted ${ratio} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

function CaminoPage() {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-foreground/10 bg-ink/85 text-ink-foreground backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="text-sm font-semibold tracking-[0.3em]">
            WAYFINDING <span className="text-primary">//</span> CYCLING
          </Link>
          <nav className="hidden gap-8 text-sm lg:flex">
            {[["The Journey", "#about"], ["At a Glance", "#overview"], ["Itinerary", "#itinerary"], ["Logistics", "#logistics"]].map(([l, h]) => (
              <a key={h} href={h} className="opacity-75 transition-opacity hover:opacity-100">{l}</a>
            ))}
          </nav>
          <a href="/#apply" className="rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
            Apply for Pilot Cohort
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end bg-ink text-ink-foreground">
        <img src={hero} alt="Camino waymarking stone with worn pilgrim shoes" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
          <Link to="/" className="text-xs uppercase tracking-[0.2em] opacity-70 hover:opacity-100">← All destinations</Link>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="border border-ink-foreground/30 px-3 py-1 text-xs uppercase tracking-[0.2em]">
              Concept definition & validation phase (2027 pilot)
            </span>
            <span className="bg-primary px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary-foreground">
              Sat, March 20 – Sun, March 28, 2027 · Semana Santa
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[1.02] md:text-7xl">
            El Camino de Santiago: The Portuguese Way
            <span className="mt-3 block text-2xl italic text-sand md:text-4xl">
              Wayfinding Across Ancient Borders: From Porto to Santiago de Compostela
            </span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/#apply" className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Apply for Pilot Cohort</a>
            <a href="#itinerary" className="rounded-sm border border-ink-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-ink-foreground/10">Scroll to Itinerary</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2">
        <div>
          <Eyebrow>01 — About this journey</Eyebrow>
          <h2 className="mt-4 text-4xl leading-tight md:text-6xl">The Journey Philosophy</h2>
          <div className="mt-10 space-y-8">
            {[
              ["Welcome", "Step away from daily routine and into the timeless rhythm of the open road for a journey of discovery, shared reflection, and meaningful momentum."],
              ["The Heritage of El Camino", "For over a millennium, pilgrims, kings, and knights have walked the Camino de Santiago. Tracing the historic Portuguese route from Porto through coastal estuaries, Galician forests, and medieval fortresses, we honor this heritage in a modern way—trading the walking staff for the bicycle."],
              ["Scenery, Fellowship & Wayfinding", "Riding at a relaxed \"party pace,\" we prioritize immersive landscapes, local cuisine, and deep connection over competition. Designed as a vehicle for wayfinding, this trip offers space to navigate life or career transitions through shared movement, new environments, and unscripted peer conversations."],
              ["Why Easter (Semana Santa)", "Setting out during Easter aligns our journey with a season of renewal and new beginnings. Arriving in Santiago during Holy Week offers a profound cultural atmosphere—a symbolic moment to reflect on past chapters and look ahead to what comes next."],
            ].map(([t, b]) => (
              <div key={t} className="border-l-2 border-sand pl-6">
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <Photo src={shell} alt="Yellow Camino scallop shell marker in nature" ratio="aspect-[4/5]" />
          <blockquote className="bg-accent p-8 font-serif text-2xl italic leading-snug text-accent-foreground md:text-3xl">
            "You don't need to know where you're going before you start moving. The answer is to start moving and see what emerges."
          </blockquote>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Eyebrow>02 — Trip at a glance</Eyebrow>
          <h2 className="mt-4 text-4xl leading-tight md:text-6xl">The Camino Portugués by Bike</h2>
          <p className="mt-3 font-serif text-2xl italic text-primary">Ride the Atlantic. Cross Galicia. Arrive in Santiago for Easter.</p>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-secondary-foreground">
              <h3 className="text-2xl">What is it?</h3>
              <p className="text-muted-foreground">Ride from Porto to Santiago de Compostela through northern Portugal and Galicia, combining Atlantic coast, historic towns, rural landscapes, and the final approach to one of Europe's great pilgrimage destinations. The route begins beside the Atlantic before following the Minho towards Valença and crossing into Galicia at Tui. From there, it continues through Pontevedra and Padrón before reaching Santiago.</p>
              <p className="text-muted-foreground">This is less about completing a cycling challenge than experiencing a journey with a clear destination. Expect coastal landscapes, medieval towns, vineyards, forests, and plenty of opportunities to stop for food, coffee, and conversation. The Semana Santa departure gives the trip a natural finale: arrive in Santiago on Saturday and experience Easter Sunday in the city.</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-l-2 border-primary bg-primary/5 px-6 py-5">
                <p className="font-serif text-2xl italic text-primary">No bike? No problem!</p>
                <p className="text-muted-foreground">
                  We can arrange a rental bike for you — fitted, serviced and waiting in Porto.
                  Tell us your frame size when you apply and we'll handle the rest.
                </p>
              </div>
              <h3 className="pt-4 text-2xl">Who is it for?</h3>
              <p className="text-muted-foreground">For recreational cyclists looking for a meaningful multi-day adventure rather than a sportive. Riders should be comfortable with 40–60 km days and occasional longer or more demanding sections.</p>
            </div>
            <dl className="divide-y border-y">
              {SPECS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-4 py-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                  <dd className="col-span-2 font-serif text-xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <Photo src={coast} alt="Atlantic coastline and coastal cliffs" />
            <Photo src={harbor} alt="Coastal fishing harbor with boats" />
            <Photo src={cathedral} alt="Santiago de Compostela cathedral, Praza do Obradoiro" />
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section id="itinerary" className="mx-auto max-w-7xl px-6 py-28">
        <Eyebrow>03 — Daily itinerary & route map</Eyebrow>
        <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Porto → Santiago, day by day.</h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <ol className="divide-y border-y lg:col-span-3">
            {DAYS.map(([title, km, details, night], i) => (
              <li key={title}>
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-baseline gap-6 py-5 text-left">
                  <span className="w-14 shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Day {i + 1}</span>
                  <span className="flex-1 font-serif text-2xl">{title}</span>
                  {km && <span className="text-sm text-muted-foreground">{km} km</span>}
                  <span className="text-muted-foreground">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="pb-6 pl-20 animate-in fade-in duration-300">
                    <p className="text-muted-foreground">{details}</p>
                    {night && <p className="mt-3 text-xs uppercase tracking-[0.2em]">Overnight · <span className="text-primary">{night}</span></p>}
                  </div>
                )}
              </li>
            ))}
          </ol>
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <Photo src={map} alt="Route map from Porto through Valença/Tui to Santiago de Compostela" ratio="aspect-[781/663]" />
              <p className="mt-3 text-sm text-muted-foreground">Porto (Portugal) → Valença / Tui → Santiago de Compostela (Spain)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="logistics" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Eyebrow>04 — Logistics</Eyebrow>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Logistics, Pricing & Travel Details</h2>
          <p className="mt-4 max-w-2xl opacity-75">Everything you need to know about getting there, travel insurance, and inclusions.</p>
          <div className="mt-14 grid gap-px bg-ink-foreground/15 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Arrival & Connections", ["Fly into Porto Airport (OPO).", "Fly out of Santiago de Compostela Airport (SCQ). High-speed rail and regional connections link Santiago directly to Madrid and major European hubs."]],
              ["Travel Agent Partner", ["All travel bookings, flights, transfers, and logistics are handled in partnership with Sara / Partner Travel Agency.", "Full regulatory travel-package compliance, professional booking infrastructure, and dedicated disruption management."]],
              ["Travel & Health Insurance", ["All participants must carry comprehensive personal health and travel insurance.", "Policy must include emergency medical treatment, hospitalization, emergency evacuation, and repatriation."]],
              ["Pricing", ["$3,000 – $6,000 per participant", "Depending on room configuration and final cohort options."]],
            ].map(([t, items]) => (
              <div key={t as string} className="bg-ink p-8">
                <h3 className="text-2xl text-sand">{t}</h3>
                <ul className="mt-4 space-y-3 text-sm opacity-85">
                  {(items as string[]).map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {[["Included in the trip price", INCLUDED, "text-primary"], ["Not included (participant responsibility)", EXCLUDED, "text-sand"]].map(([h, rows, c]) => (
              <div key={h as string}>
                <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${c}`}>{h as string}</p>
                <ul className="mt-4 divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
                  {(rows as string[][]).map(([k, v]) => (
                    <li key={k} className="py-4">
                      <p className="font-serif text-xl">{k}</p>
                      <p className="mt-1 text-sm opacity-75">{v}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="mx-auto max-w-7xl px-6 py-28 text-center">
        <blockquote className="mx-auto max-w-4xl font-serif text-3xl italic leading-snug md:text-5xl">
          "The destination is simply the setting. You don't need to know where you are going before you start moving."
        </blockquote>
        <p className="mt-6 text-muted-foreground">Join us for the 2027 pilot cohort across Portugal and Spain.</p>
        <a href="/#apply" className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
          Apply for the 2027 Pilot Cohort
        </a>
        <p className="mt-8 text-sm text-muted-foreground">
          Selective small-group departure. Enquiries:{" "}
          <a className="text-primary hover:underline" href="mailto:hello@wayfindingcycling.com">hello@wayfindingcycling.com</a>
        </p>
        <div className="mt-24 flex flex-col justify-between gap-2 border-t pt-6 text-left text-xs text-muted-foreground md:flex-row">
          <span className="tracking-[0.3em]">WAYFINDING // CYCLING</span>
          <span>Concept definition & validation phase · 2027 pilot</span>
        </div>
      </footer>
    </div>
  );
}
