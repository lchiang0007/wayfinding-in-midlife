import { Logo, LogoMark } from "@/components/Logo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/camino-hero.jpg";
import shell from "@/assets/camino-shell.jpg";
import coast from "@/assets/camino-coast.jpg";
import harbor from "@/assets/camino-harbor.jpg";
import cathedral from "@/assets/camino-cathedral.jpg";
import map from "@/assets/camino-map.jpg";
import day01 from "@/assets/camino-day-01.jpg";
import day02 from "@/assets/camino-day-02.jpg";
import day03 from "@/assets/camino-day-03.jpg";
import day04 from "@/assets/camino-day-04.jpg";
import day05 from "@/assets/camino-day-05.jpg";
import day06 from "@/assets/camino-day-06.jpg";
import day07 from "@/assets/camino-day-07.jpg";
import day08 from "@/assets/camino-day-08.jpg";

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
  {
    title: "Arrival in Porto",
    km: null,
    night: "Porto",
    image: day01,
    alt: "Day 1 — Arrival in Porto",
    caption: "Meeting the group in Porto's historic center",
    description: "Meet the group, check your bikes, and explore Porto's historic center before starting the journey.",
    detail: "Journey mode begins gently. We meet at the hotel in the late afternoon for a group welcome and bike fitting, take a short shakeout spin along the Douro, then gather for a first dinner together. No stage today — just arriving, meeting your riding companions, and setting an intention for the week ahead.",
    duration: "5-6 Hours",
    altitude: "1000m",
    highlights: "Group welcome · Bike fitting · Old town walk",
  },
  {
    title: "Porto to Esposende",
    km: 61,
    night: "Esposende",
    image: day02,
    alt: "Day 2 — Atlantic coastline north of Porto",
    caption: "Rolling north along the Atlantic coastline",
    description: "Follow the Atlantic coastline north through coastal towns, beaches, and cycleways. Enjoy a gentle opening stage with plenty of stops along the way.",
    detail: "A gentle opening stage designed to find the group's rhythm. We leave Porto on coastal cycleways and stay within earshot of the Atlantic all day, with long café stops at beach towns and plenty of time off the bike. By late afternoon we roll into Esposende, a quiet seaside town where the estuary meets the ocean.",
    duration: "4–4.5 h",
    altitude: "~350 m",
    highlights: "Coastal cycleways · Beach stops · First ocean views",
  },
  {
    title: "Esposende to Caminha",
    km: 56,
    night: "Caminha",
    image: day03,
    alt: "Day 3 — Viana do Castelo and the Minho estuary",
    caption: "Viana do Castelo and the Minho estuary",
    description: "Continue along the coast through Viana do Castelo and northern Portugal. Arrive at Caminha along the Minho estuary.",
    detail: "The coastline narrows and the landscape grows wilder. We climb to the hilltop sanctuary above Viana do Castelo for the trip's first big viewpoint, then follow quiet lanes north to the Minho estuary, where the river broadens and meets the sea at Caminha.",
    duration: "3.5–4 h",
    altitude: "~300 m",
    highlights: "Viana do Castelo · Coastal villages · Minho estuary arrival",
  },
  {
    title: "Caminha to Valença",
    km: 30,
    night: "Valença",
    image: day04,
    alt: "Day 4 — Riverside paths along the Minho",
    caption: "A riverside recovery day along the Minho",
    description: "Follow the Minho River on a short recovery stage toward Valença. Spend the afternoon exploring its historic fortress and old town.",
    detail: "The shortest stage of the week, and deliberately so. We follow the Minho upstream on flat riverside paths, watching Portugal sit on one bank and Galicia on the other, and arrive in Valença by early afternoon. The rest of the day belongs to the hilltop fortress and its cobbled old town.",
    duration: "2–2.5 h",
    altitude: "~200 m",
    highlights: "Minho River path · Valença fortress · Free afternoon",
  },
  {
    title: "Valença to Pontevedra",
    km: 56,
    night: "Pontevedra",
    image: day05,
    alt: "Day 5 — Crossing into Galicia through forest and Camino paths",
    caption: "Crossing into Galicia on the queen stage",
    description: "Cross into Galicia at Tui on the queen stage. Ride through forests, rural lanes, and historic Camino paths to Pontevedra.",
    detail: "The queen stage, and the day the journey changes character. We cross the international bridge at Tui into Galicia and climb away from the river into eucalyptus forest, rural lanes, and historic Camino paths. It is the longest, hilliest day of the week — and the most satisfying.",
    duration: "4–4.5 h",
    altitude: "~650 m",
    highlights: "Tui border crossing · Galician forests · Historic Camino paths",
  },
  {
    title: "Pontevedra to Padrón",
    km: 41,
    night: "Padrón",
    image: day06,
    alt: "Day 6 — Vineyards and wooded lanes of the Ulla valley",
    caption: "Vineyards and wooded lanes of the Ulla valley",
    description: "Ride through Galician countryside, vineyards, and wooded lanes. Pass Caldas de Reis before reaching Padrón in the Ulla valley.",
    detail: "A softer Galician day through vineyards, chestnut groves, and wooded lanes. We pause in Caldas de Reis, a thermal town pilgrims have crossed since Roman times, before dropping into the Ulla valley at Padrón — famous for its peppers and, by legend, for the stone boat that first carried the Apostle's remains ashore.",
    duration: "3–3.5 h",
    altitude: "~400 m",
    highlights: "Caldas de Reis · Vineyards · Padrón peppers",
  },
  {
    title: "Padrón to Santiago de Compostela",
    km: 25,
    night: "Santiago de Compostela",
    image: day07,
    alt: "Day 7 — The final kilometers to Praza do Obradoiro",
    caption: "The final kilometers to Praza do Obradoiro",
    description: "Ride the final kilometers through Iria Flavia and villages surrounding Santiago. Finish together in Praza do Obradoiro beneath the cathedral.",
    detail: "A short, almost ceremonial final stage. We ride the last 25 kilometers through Iria Flavia and the villages that blur into Santiago's outskirts, then climb the final hill into the old city — dismounting to walk our bikes across Praza do Obradoiro beneath the cathedral, together.",
    duration: "1.5–2 h",
    altitude: "~350 m",
    highlights: "Iria Flavia · Group finish · Cathedral square arrival",
  },
  {
    title: "Departure / Easter Sunday",
    km: null,
    night: null,
    image: day08,
    alt: "Day 8 — Semana Santa morning in Santiago",
    caption: "Semana Santa morning in Santiago",
    description: "Experience Santiago and Semana Santa during a free morning. Collect your Compostela if eligible, or depart (optional extra night available).",
    detail: "Semana Santa in Santiago. The morning is free: processions winding through the old town, a last café on the Praza das Praterías, and — if your kilometers qualify — the Compostela certificate at the Pilgrim's Office. Extra nights in the city can be arranged for those not flying home.",
    duration: "Free morning",
    altitude: "—",
    highlights: "Easter processions · Compostela collection · Farewell",
  },
];

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

const MAILTO =
  "mailto:lchiang0007@gmail.com?subject=" +
  encodeURIComponent("I'm IN: Wayfinding el Camino Portugues") +
  "&body=Dear%20Luis%2C%0D%0A%0D%0AI%20am%20interested%20in%20joining%20the%20pilot%20cohort%20for%20the%20Wayfinding%20El%20Camino%20Portugu%C3%A9s%20expedition.%0D%0A%0D%0AI%20would%20love%20to%20learn%20more%20about%20the%20itinerary%2C%20logistics%2C%20and%20next%20steps%20for%20securing%20a%20spot.%0D%0A%0D%0ABest%20regards%2C";

// Replace with the real Vimeo video ID when available.

function Eyebrow({ children, className = "text-primary" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-medium uppercase tracking-[0.25em] ${className}`}>{children}</p>;
}

function Photo({ src, alt, ratio = "aspect-[4/3]", className = "", fit = "object-cover" }: { src: string; alt: string; ratio?: string; className?: string; fit?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm border bg-muted ${ratio} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className={`h-full w-full ${fit}`} />
    </div>
  );
}

function CaminoPage() {
  const [open, setOpen] = useState(-1);
  const day = open === -1 ? null : DAYS[open];

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-foreground/10 bg-ink/85 text-ink-foreground backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="text-sm font-semibold tracking-[0.3em]">
            <Logo />
          </Link>
          <nav className="hidden gap-8 text-sm lg:flex">
            {[["The Journey", "#about"], ["At a Glance", "#overview"], ["Itinerary", "#itinerary"], ["Logistics", "#logistics"]].map(([l, h]) => (
              <a key={h} href={h} className="opacity-75 transition-opacity hover:opacity-100">{l}</a>
            ))}
          </nav>
          <a href={MAILTO} className="rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-hover">
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
            <a href={MAILTO} className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">Apply for Pilot Cohort</a>
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
            {DAYS.map((d, i) => (
              <li key={d.title}>
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-baseline gap-6 py-5 text-left">
                  <span className="w-14 shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Day {i + 1}</span>
                  <span className="flex-1 font-serif text-2xl">{d.title}</span>
                  {d.km && <span className="text-sm text-muted-foreground">{d.km} km</span>}
                  <span className="text-muted-foreground">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="pb-6 pl-20 animate-in fade-in duration-300">
                    <p className="text-muted-foreground">{d.description}</p>
                    {d.night && <p className="mt-3 text-xs uppercase tracking-[0.2em]">Overnight · <span className="text-primary">{d.night}</span></p>}
                  </div>
                )}
              </li>
            ))}
          </ol>
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              {open === -1 || !day ? (
                <>
                  <Photo src={map} alt="Route map from Porto through Valença/Tui to Santiago de Compostela" ratio="aspect-[781/663]" fit="object-contain" />
                  <p className="mt-3 text-sm text-muted-foreground">Porto (Portugal) → Valença / Tui → Santiago de Compostela (Spain)</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Select a day to see its details</p>
                </>
              ) : (
                <div key={open} className="animate-in fade-in duration-300">
                  <Photo src={day.image} alt={day.alt} ratio="aspect-[781/663]" fit="object-contain" />
                  <p className="mt-3 text-sm text-muted-foreground">{day.caption}</p>
                  <p className="mt-4 text-muted-foreground">{day.detail}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-y py-4">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Duration</dt>
                      <dd className="mt-1 font-serif text-xl">{day.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Distance</dt>
                      <dd className="mt-1 font-serif text-xl">{day.km ? `${day.km} km` : "—"}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Altitude gain</dt>
                      <dd className="mt-1 font-serif text-xl">{day.altitude}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Highlights</p>
                  <p className="mt-1 text-sm text-muted-foreground">{day.highlights}</p>
                </div>
              )}
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
        <a href={MAILTO} className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-hover">
          Apply for the 2027 Pilot Cohort
        </a>
        <p className="mt-8 text-sm text-muted-foreground">
          Selective small-group departure. Enquiries:{" "}
          <a className="text-primary hover:underline" href="mailto:hello@wayfindingcycling.com">hello@wayfindingcycling.com</a>
        </p>
        <div className="mt-24 flex flex-col justify-between gap-2 rounded-sm bg-forest-deep px-6 py-6 text-forest-deep-foreground/80 text-left text-xs md:flex-row">
          <span className="flex items-center gap-2 tracking-[0.3em] text-forest-deep-foreground"><LogoMark className="h-4 w-auto" />WAYFINDING // CYCLING</span>
          <span>Concept definition & validation phase · 2027 pilot</span>
        </div>
      </footer>
    </div>
  );
}
