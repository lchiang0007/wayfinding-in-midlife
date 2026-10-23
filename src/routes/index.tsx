import { Logo, LogoMark } from "@/components/Logo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Video } from "lucide-react";
import { COUNTRY_CODES } from "../data/countryCodes";
import hero from "@/assets/hero.jpg";
import patagonia from "@/assets/patagonia.jpg";
import spain from "@/assets/spain.jpg";
import iceland from "@/assets/iceland.jpg";
import japan from "@/assets/japan.jpg";
import ogImage from "@/assets/og-image.jpg"; // Import your image from src/assets

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wayfinding in Midlife" },
      {
        name: "description",
        content:
          "Guiding high-performers through midlife transitions through structured reflection and endurance cycling experiences.",
      },
      // Open Graph / WhatsApp Preview Tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wayfindingcycling.com/" },
      { property: "og:title", content: "Wayfinding in Midlife" },
      {
        property: "og:description",
        content: "Guiding high-performers through midlife transitions through structured reflection and adventure cycling experiences.",
      },
      { property: "og:image", content: `https://wayfindingcycling.com${ogImage}` }, // Uses the imported bundled asset path
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:site_name", content: "Wayfinding in Midlife" },
      // Twitter / X Meta Tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://wayfindingcycling.com/" },
      { name: "twitter:title", content: "Wayfinding in Midlife" },
      {
        name: "twitter:description",
        content: "Guiding high-performers through midlife transitions through structured reflection and adventure cycling experiences.",
      },
      { name: "twitter:image", content: ogImage },
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

type Destination = {
  name: string;
  route: string;
  region: string;
  img: string;
  facts: string[];
  line: string;
  camino?: boolean;
  comingSoon?: boolean;
};

const DESTINATIONS: Destination[] = [
  {
    name: "Iberian Peninsula",
    route: "Camino de Santiago",
    region: "Castilla / Galicia / Porto",
    img: spain,
    facts: ["7 Days", "Portuguese coast & Castilian Plateau", "March / 2027"],
    line: "Small coastal villages, local wine and historic routes through rugged, authentic Iberia.",
    camino: true,
  },
  {
    name: "Patagonia",
    route: "Carretera Austral & Tierra del Fuego",
    region: "Chile / Argentina",
    img: patagonia,
    facts: ["7–10 Days", "Gravel & Wild Frontier", "Dec–Jan Season"],
    line: "Fjords, glaciers and the end of the world. Wild camping in lush wilderness.",
    comingSoon: true,
  },
  {
    name: "Iceland",
    route: "Westfjords Expedition",
    region: "Iceland",
    img: iceland,
    facts: ["7 Days", "Remote Fjords & Hot Springs", "Summer Season"],
    line: "Sub-arctic frontier, low traffic, geothermal marvels and gravel mountain passes.",
    comingSoon: true,
  },
  {
    name: "Japan",
    route: "Rural Kyoto to Tokyo",
    region: "Japan",
    img: japan,
    facts: ["7 Days", "Off-the-beaten-path Passes", "Spring / Autumn"],
    line: "Ancient routes, quiet zen temples, local cuisine — and plenty of climbing.",
    comingSoon: true,
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{children}</p>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.163-3.488-8.413" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z" />
    </svg>
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
            <Logo />
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
            className="rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-hover"
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
              className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
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
              ["Pace", "Deliberatively reflective", "Rhythm over speed"],
              ["Terrain", "Gravel paths & Tarmac", "30–50 km / day"],
              ["Investment", "Focus self-discovery", "Meaningful connection, and exploration."],
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
                <h3 className="text-2xl">Evolving Working Identity</h3>
                <p className="mt-2 opacity-80">
                  We don't discover our next identity purely through introspection. We act our way
                  into new possibilities — wayfinding rather than pathfinding.
                </p>
              </div>
              <div className="border-l-2 border-sand pl-6">
                <h3 className="text-2xl">The Looking Phase</h3>
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
              {x.comingSoon && (
                <span className="ml-2 inline-block size-1.5 rounded-full bg-primary align-middle" />
              )}
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
            {d.comingSoon && (
              <span className="mb-5 inline-flex w-fit items-center gap-2 border border-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                Coming Soon
              </span>
            )}
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{d.region}</p>
            <h3 className="mt-2 text-5xl">{d.name}</h3>
            <p className="mt-1 font-serif text-2xl italic text-primary">{d.route}</p>
            <p className="mt-6 text-lg text-muted-foreground">{d.line}</p>
            <ul className="mt-8 divide-y border-y">
              {d.facts.map((f) => (
                <li key={f} className="py-3 text-sm font-medium">{f}</li>
              ))}
            </ul>
            {d.camino && (
              <Link
                to="/camino-portugues"
                className="mt-8 block border border-primary p-5 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span className="text-xs uppercase tracking-[0.2em]">2027 Collection · Easter departure</span>
                <span className="mt-1 block font-serif text-2xl">The Portuguese Camino — Porto to Santiago →</span>
              </Link>
            )}
            <a href="#apply" className="mt-8 text-sm font-semibold text-primary underline-offset-4 hover:underline">
              {d.comingSoon
                ? `Register to be alerted for ${d.name} →`
                : `Register interest in ${d.name} →`}
            </a>
            {d.comingSoon && (
              <p className="mt-2 text-sm text-muted-foreground">
                Dates for {d.name} are being confirmed — leave your details and we'll let you know
                the moment registration opens.
              </p>
            )}
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
                ["Distance", "30-50", "km / day"],
                ["Elevation", "500–800", "m climbing / day"],
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
                ["Gear", "All-road bike capable of 40mm tires, tubeless setup, bikepacking bags."],
                ["Fitness", "Capable endurance for multi-days of bike riding on mixed terrain."],
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
  country_code: z.string().optional(),
  phone_number: z
    .string()
    .trim()
    .refine((v) => v === "" || /^[0-9\s\-]+$/.test(v), "Phone number must contain only numbers")
    .optional(),
  personal_profile_url: z.string().trim().max(300).optional(),
  motivation: z
    .string()
    .trim()
    .min(1, "Please enter your transition context or motivation")
    .max(2000),
  preferred_destination: z.string().min(1, "Please select a preferred destination").max(80),
});

function ApplySection() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country_code: "",
    phone_number: "",
    personal_profile_url: "",
    motivation: "",
    preferred_destination: "El Camino Portugués",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Searchable Country Code input state
  const [countrySearch, setCountrySearch] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  // Track list item refs to auto-scroll matching elements into view
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  // Restrict typing strictly to '+' and numeric characters [0-9] and support partial number lookup
  const handleCountrySearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const cleanedVal = rawVal.replace(/[^0-9+]/g, "");
    setCountrySearch(cleanedVal);
    setFormData((prev) => ({ ...prev, country_code: cleanedVal }));
    setIsCountryDropdownOpen(true);

    // Auto-scroll matching item into focus/view using partial matching (e.g. "34" matches "+34")
    const searchClean = cleanedVal.trim().replace("+", "");
    if (searchClean !== "") {
      const match = COUNTRY_CODES.find((c) => c.code.replace("+", "").includes(searchClean));
      if (match) {
        const key = `${match.code}-${match.country}`;
        const node = itemRefs.current[key];
        if (node) {
          node.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }
  };

  const selectCountryCode = (code: string) => {
    setCountrySearch(code);
    setFormData((prev) => ({ ...prev, country_code: code }));
    setIsCountryDropdownOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const parsed = schema.safeParse(formData);
  const fieldErrors: Record<string, string> = {};
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const fieldName = issue.path[0] as string;
      if (!fieldErrors[fieldName]) {
        fieldErrors[fieldName] = issue.message;
      }
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    setTouched({
      name: true,
      email: true,
      phone_number: true,
      personal_profile_url: true,
      motivation: true,
      preferred_destination: true,
    });

    if (!parsed.success) {
      return;
    }

    setStatus("sending");
    const v = parsed.data;
    const formattedPhone = v.phone_number ? `${v.country_code || ""} ${v.phone_number}`.trim() : "N/A";

    try {
      await supabase.from("applications").insert({
        name: v.name,
        email: v.email,
        phone: formattedPhone,
        linkedin_url: v.personal_profile_url || null,
        motivation: v.motivation,
        preferred_destination: v.preferred_destination,
      });
    } catch (err) {
      console.warn("Supabase insert skipped or failed:", err);
    }

    const subject = encodeURIComponent(`Beta Pilot Application — ${v.name}`);
    const bodyText = `Hi Luis/Sara: I am highly interested in one of your destinations. My contact information is below:

• Name: ${v.name}
• Email: ${v.email}
• Phone: ${formattedPhone}
• Personal Profile: ${v.personal_profile_url || "N/A"}
• Preferred Destination: ${v.preferred_destination}

• Current Transition / Motivation:
${v.motivation}
`;

    const mailtoUrl = `mailto:lchiang0007@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
    setStatus("done");
  }

  const field =
    "mt-2 w-full rounded-sm border border-input bg-input-surface px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring";

  return (
    <footer id="apply" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Eyebrow>05 — Apply / Contact</Eyebrow>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Request a beta invitation.</h2>
          <p className="mt-6 text-muted-foreground">
            If you are approaching a transition, or seeking time and distance from
            normal routines. Tell us a little about where you are.
          </p>

          {/* Contact Icons and Links */}
          <ul className="mt-10 space-y-4 text-sm font-medium">
            <li>
              <a
                className="group flex items-center gap-3 transition-colors hover:text-primary"
                href="mailto:lchiang0007@gmail.com"
              >
                <div className="flex size-9 items-center justify-center rounded-sm bg-sand/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="size-4" />
                </div>
                <span>Email us</span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center gap-3 transition-colors hover:text-primary"
                href="https://wa.me/+34689614934"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex size-9 items-center justify-center rounded-sm bg-sand/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <WhatsAppIcon className="size-4" />
                </div>
                <span>Whatsapp Chat</span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center gap-3 transition-colors hover:text-primary"
                href="https://cal.com/luis-chiang-5s122l"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex size-9 items-center justify-center rounded-sm bg-sand/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Video className="size-4" />
                </div>
                <span>Schedule a video call</span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center gap-3 transition-colors hover:text-primary"
                href="https://www.linkedin.com/in/luis-chiang/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex size-9 items-center justify-center rounded-sm bg-sand/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <LinkedInIcon className="size-4" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          {status === "done" ? (
            <div className="border bg-card p-10">
              <h3 className="text-3xl">Thank you.</h3>
              <p className="mt-3 text-muted-foreground">
                Your application details have been generated. If your email composer did not automatically open, please send your details to lchiang0007@gmail.com.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2" noValidate>
              
              {/* Name */}
              <label className="text-sm font-medium">Name *
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  maxLength={120}
                  placeholder="Your name...."
                  className={`${field} placeholder:text-muted-foreground/60 placeholder:italic`}
                />
                {touched.name && fieldErrors.name && (
                  <span className="mt-1 block text-xs text-destructive">{fieldErrors.name}</span>
                )}
              </label>

              {/* Email */}
              <label className="text-sm font-medium">Email *
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  maxLength={255}
                  placeholder="aa@email.xx"
                  className={`${field} placeholder:text-muted-foreground/60 placeholder:italic`}
                />
                {touched.email && fieldErrors.email && (
                  <span className="mt-1 block text-xs text-destructive">{fieldErrors.email}</span>
                )}
              </label>

              {/* Phone with Full List, Partial Number Lookup, Auto-scroll & Highlight */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium block">Phone Number</label>
                <div className="mt-2 flex gap-2">
                  <div className="relative w-1/3">
                    <input
                      type="text"
                      value={countrySearch}
                      onChange={handleCountrySearchChange}
                      onFocus={() => setIsCountryDropdownOpen(true)}
                      onBlur={() => setTimeout(() => setIsCountryDropdownOpen(false), 200)}
                      placeholder="+code..."
                      className="w-full rounded-sm border border-input bg-input-surface px-3 py-3 text-foreground outline-none text-sm focus:border-primary focus:ring-1 focus:ring-ring placeholder:text-muted-foreground/60 placeholder:italic"
                    />
                    {isCountryDropdownOpen && (
                      <ul className="absolute z-50 mt-1 max-h-56 w-64 overflow-y-auto rounded-sm border border-input bg-card shadow-lg text-sm">
                        {COUNTRY_CODES.length > 0 ? (
                          COUNTRY_CODES.map((c) => {
                            const searchClean = countrySearch.trim().replace("+", "");
                            const isMatch = searchClean !== "" && c.code.replace("+", "").includes(searchClean);
                            const key = `${c.code}-${c.country}`;
                            return (
                              <li
                                key={key}
                                ref={(el) => {
                                  itemRefs.current[key] = el;
                                }}
                                onMouseDown={() => selectCountryCode(c.code)}
                                className={`cursor-pointer px-3 py-2 transition-colors flex justify-between ${
                                  isMatch
                                    ? "bg-primary text-primary-foreground font-bold"
                                    : "hover:bg-primary/20"
                                }`}
                              >
                                <span>{c.code}</span>
                                <span className="text-xs opacity-75">{c.country}</span>
                              </li>
                            );
                          })
                        ) : (
                          <li className="px-3 py-2 text-xs text-muted-foreground">No country codes available</li>
                        )}
                      </ul>
                    )}
                  </div>
                  <input
                    name="phone_number"
                    type="tel"
                    value={formData.phone_number}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone_number")}
                    placeholder="Numbers only..."
                    className="w-2/3 rounded-sm border border-input bg-input-surface px-4 py-3 text-foreground outline-none text-sm focus:border-primary focus:ring-1 focus:ring-ring placeholder:text-muted-foreground/60 placeholder:italic"
                  />
                </div>
                {touched.phone_number && fieldErrors.phone_number && (
                  <span className="mt-1 block text-xs text-destructive">{fieldErrors.phone_number}</span>
                )}
              </div>

              {/* Personal Profile URL */}
              <label className="text-sm font-medium md:col-span-2">Personal Profile URL
                <input
                  name="personal_profile_url"
                  type="url"
                  value={formData.personal_profile_url}
                  onChange={handleChange}
                  onBlur={() => handleBlur("personal_profile_url")}
                  maxLength={300}
                  placeholder="https://..."
                  className={field}
                />
                {touched.personal_profile_url && fieldErrors.personal_profile_url && (
                  <span className="mt-1 block text-xs text-destructive">{fieldErrors.personal_profile_url}</span>
                )}
              </label>

              {/* Transition / Motivation */}
              <label className="text-sm font-medium md:col-span-2">Tell us about your transition / motivation *
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  onBlur={() => handleBlur("motivation")}
                  rows={4}
                  maxLength={2000}
                  placeholder="I am currently considering ..."
                  className={`${field} placeholder:text-muted-foreground/60 placeholder:italic`}
                />
                {touched.motivation && fieldErrors.motivation && (
                  <span className="mt-1 block text-xs text-destructive">{fieldErrors.motivation}</span>
                )}
              </label>

              {/* Preferred Destination */}
              <label className="text-sm font-medium md:col-span-2">Preferred destination *
                <select
                  name="preferred_destination"
                  value={formData.preferred_destination}
                  onChange={handleChange}
                  onBlur={() => handleBlur("preferred_destination")}
                  className={field}
                >
                  <option value="El Camino Portugués">El Camino Portugués — Porto to Santiago</option>
                  {DESTINATIONS.filter((x) => x.comingSoon).map((x) => (
                    <option key={x.name} value={x.name} disabled className="cursor-not-allowed opacity-50">
                      {x.name} — {x.route} · Coming Soon
                    </option>
                  ))}
                  <option value="Other: custom destination">Other: custom destination</option>
                </select>
                {touched.preferred_destination && fieldErrors.preferred_destination && (
                  <span className="mt-1 block text-xs text-destructive">{fieldErrors.preferred_destination}</span>
                )}
              </label>

              <button
                type="submit"
                className="rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-hover md:col-span-2"
              >
                Apply for Pilot Cohort
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="mt-24 flex flex-col justify-between gap-2 rounded-sm bg-forest-deep px-6 py-6 text-forest-deep-foreground/80 text-xs md:flex-row">
        <span className="flex items-center gap-2 tracking-[0.3em] text-forest-deep-foreground"><LogoMark className="h-4 w-auto" />WAYFINDING // CYCLING</span>
        <span>Concept definition & validation phase · 2026</span>
      </div>
    </footer>
  );
}