export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    year: "2015",
    role: "Project Manager",
    company: "Anoop Glass & Construction",
    description:
      "Led construction and glass installation projects end to end, coordinating on-site teams to deliver residential and commercial builds on schedule.",
  },
  {
    year: "2018",
    role: "Senior Construction Engineer",
    company: "Premium Construction Inc.",
    description:
      "Managed large-scale residential and office projects with a focus on structural integrity, site safety, and craftsmanship at every stage.",
  },
  {
    year: "2020",
    role: "Glassworks Specialist",
    company: "Glass Creations Ltd.",
    description:
      "Specialized in custom glasswork for interiors and exteriors — windows, partitions, and decorative glass features tailored to each space.",
  },
  {
    year: "2024",
    role: "Full-Stack Construction & Glassworks",
    company: "Anoop's Glass & Construction",
    description:
      "Leading projects that combine traditional building craftsmanship with modern glass technology for lasting, elegant results.",
  },
];

export interface SkillItem {
  icon: "management" | "glass" | "structural" | "design" | "restoration" | "printing";
  name: string;
  description: string;
}

export const skills: SkillItem[] = [
  {
    icon: "management",
    name: "Construction Management",
    description:
      "Managing complex builds from first sketch to handover — timelines, budgets, and quality held to the same standard throughout.",
  },
  {
    icon: "glass",
    name: "Glassworks Design",
    description:
      "Designing and installing custom glass solutions for homes, offices, and public spaces — built for function first, beauty always.",
  },
  {
    icon: "structural",
    name: "Structural Engineering",
    description:
      "Ensuring every structure stands on sound engineering — safety and durability are never the part that gets compromised.",
  },
  {
    icon: "design",
    name: "Interior & Exterior Design",
    description:
      "Bringing construction and glass together into spaces that feel considered from every angle, inside and out.",
  },
  {
    icon: "restoration",
    name: "Glass Restoration",
    description:
      "Repairing and refurbishing glass elements to restore original clarity and strength, while respecting a building's character.",
  },
  {
    icon: "printing",
    name: "3D Printing for Construction",
    description:
      "Using 3D-printed components to speed up prototyping and enable precise, custom structural details with less material waste.",
  },
];

export interface Project {
  slug: string;
  index: string;
  name: string;
  subtitle: string;
  role: string;
  date: string;
  hue: "brass" | "pane" | "mixed";
  category: "institutional" | "commercial" | "residential";
  flagship?: boolean;
  location?: string;
  icon: string; // emoji shown on the placeholder visual until a real photo is added
  images: string[]; // filenames expected in /public/projects/
  video?: string; // optional filename expected in /public/media/projects/
  challenge: string;
  approach: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "central-academy",
    index: "01",
    name: "Central Academy — Decorative Mirror & Glass Installation",
    subtitle:
      "Custom mirror paneling and glasswork across Central Academy's interiors, built for durability under daily school use.",
    role: "Lead Glassworks Contractor",
    date: "2024",
    hue: "pane",
    category: "institutional",
    flagship: true,
    location: "Central Academy",
    icon: "🪞",
    images: ["central-academy-1.jpg", "central-academy-2.jpg", "central-academy-3.jpg"],
    video: "central-academy.mp4",
    challenge:
      "A school environment means constant contact — students leaning on surfaces, bags brushing past, daily cleaning with whatever's on hand. Standard decorative mirror mounting isn't built for that kind of repeated, unplanned impact.",
    approach:
      "Used reinforced mounting and edge-protected paneling instead of standard adhesive-backed mirror install, and chose glass thickness based on likely contact stress in each specific corridor rather than a single spec across the whole building.",
    outcome:
      "Decorative glasswork that holds up to daily school use without needing the fragile-surface warnings or restricted-access areas that thinner installations would require.",
  },
  {
    slug: "park-inn-radisson-tedhi-pulia",
    index: "02",
    name: "Park Inn by Radisson, Tedhi Pulia",
    subtitle:
      "Glass facade and interior glazing work for the Park Inn by Radisson property in Tedhi Pulia, Lucknow.",
    role: "Construction & Glazing Contractor",
    date: "2023",
    hue: "brass",
    category: "commercial",
    flagship: true,
    location: "Tedhi Pulia, Lucknow",
    icon: "🏨",
    images: ["park-inn-radisson-1.jpg", "park-inn-radisson-2.jpg", "park-inn-radisson-3.jpg"],
    video: "park-inn-radisson.mp4",
    challenge:
      "A hotel facade has to do three things at once: look sharp from the street, cut down on heat gain through a Lucknow summer, and not turn interior spaces into a greenhouse — three requirements that usually pull glass selection in different directions.",
    approach:
      "Balanced facade design with glazing spec chosen specifically for solar heat gain coefficient rather than appearance alone, coordinating the glazing plan with the building's actual sun exposure through the day rather than a uniform spec on all faces.",
    outcome:
      "A facade that reads as a clean, modern glass frontage while keeping interior cooling load manageable — not fighting the building's own design after the fact with tinting or film.",
  },
  {
    slug: "luxury-residential-facade",
    index: "03",
    name: "Luxury Residential Glass Facade",
    subtitle: "A modern glass facade installation for a high-end residential building.",
    role: "Lead Engineer",
    date: "2023",
    hue: "pane",
    category: "residential",
    icon: "🏠",
    images: ["project1.jpg", "project1-sub1.jpg", "project1-sub2.jpg"],
    challenge:
      "The client wanted a fully glazed frontage without the privacy and heat trade-offs that usually come with it.",
    approach:
      "Specified layered glazing with a privacy gradient by floor level, and oriented panel placement around actual sun path rather than a symmetrical, purely visual layout.",
    outcome:
      "A facade that reads as fully glass from the street while keeping interior rooms private and thermally comfortable without curtains doing the work.",
  },
  {
    slug: "commercial-office-building",
    index: "04",
    name: "Commercial Office Building",
    subtitle: "Construction of a commercial office space with modern glass features.",
    role: "Project Manager",
    date: "2022",
    hue: "brass",
    category: "commercial",
    icon: "🏢",
    images: ["project2.jpg", "project2-sub1.jpg", "project2-sub2.jpg"],
    challenge:
      "An occupied-building renovation timeline, where construction noise and disruption had to stay compatible with a working office downstairs.",
    approach:
      "Phased the glasswork installation around business hours and sequenced trades so structural and glazing work never overlapped in the same zone on the same day.",
    outcome:
      "Full glass-feature renovation completed without a single forced closure day for the tenant business.",
  },
  {
    slug: "glass-pool-enclosure",
    index: "05",
    name: "Glass Pool Enclosure for Luxury Estate",
    subtitle: "Enhancing a luxury estate with a stylish, secure glass pool enclosure.",
    role: "Project Manager",
    date: "2022",
    hue: "mixed",
    category: "residential",
    icon: "🏊",
    images: ["project3.jpg"],
    challenge:
      "Pool-area glass sees constant humidity and chlorine exposure, which degrades standard glass hardware and seals faster than anywhere else on a property.",
    approach:
      "Used corrosion-resistant hardware and marine-grade sealant rated for sustained humidity, rather than the standard fittings used on interior glasswork.",
    outcome:
      "An enclosure built to the same corrosion standard as the pool equipment itself, not just glass that happens to be near water.",
  },
  {
    slug: "smart-glass-facade",
    index: "06",
    name: "Smart Glass Facade for Commercial Building",
    subtitle: "An energy-efficient smart glass facade for a commercial building.",
    role: "Project Manager",
    date: "2022",
    hue: "mixed",
    category: "commercial",
    icon: "🌇",
    images: ["project5.jpg"],
    challenge:
      "The client wanted variable tinting to manage heat and glare without permanently darkening the facade or relying on external blinds.",
    approach:
      "Integrated electrochromic smart glass wired to a simple building-side control rather than a fixed-tint solution, coordinated with the electrical contractor early so wiring wasn't an afterthought.",
    outcome:
      "A facade that adjusts tint through the day instead of a fixed compromise between too bright and too dark.",
  },
];

export const contact = {
  phone: "+91-8318641198",
  phoneHref: "tel:+918318641198",
  email: "shashiswadh20@gmail.com",
  whatsapp: "https://wa.me/918318641198",
  serviceArea: "Lucknow and surrounding Uttar Pradesh",
};

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "One team, one accountability",
    description:
      "Construction and glasswork are usually split across separate contractors who each blame the other when something goes wrong. Running both under one team means there's exactly one person accountable for the finished result — not a chain of subcontractors pointing elsewhere.",
  },
  {
    title: "Material choice comes from the site, not a catalogue",
    description:
      "The right glass for a school corridor is not the right glass for a pool enclosure or a hotel facade. Every material decision starts from what the space actually needs to survive — impact, humidity, sun exposure, cleaning chemicals — not from what's cheapest to stock.",
  },
  {
    title: "Structural review before design gets locked in",
    description:
      "Glass changes how a building carries load, wind, and heat. Structural safety gets checked before a design is finalized, not used as a rubber stamp afterward — because retrofitting a structural fix into a finished installation is expensive and sometimes impossible.",
  },
  {
    title: "Show the work, not just the invoice",
    description:
      "Clients get to see the reasoning behind material and cost decisions, not just a lump-sum number. If a choice costs more because it's the safer or more durable option, that gets explained — not buried in a line item.",
  },
];

export interface ServiceDetail {
  slug: string;
  icon: SkillItem["icon"];
  name: string;
  summary: string;
  details: string[];
  whyItMatters: string;
  whenYouNeedIt: string;
}

export const services: ServiceDetail[] = [
  {
    slug: "construction-management",
    icon: "management",
    name: "Construction Management",
    summary:
      "End-to-end oversight of a build, from the first site visit to final handover.",
    details: [
      "Site assessment, planning, and scheduling before ground is broken.",
      "Vendor and material coordination to keep a project moving without surprises.",
      "On-site quality checks at every stage, not just at the end.",
      "Transparent budget tracking so costs are never a surprise at handover.",
    ],
    whyItMatters:
      "Most construction delays and cost overruns don't come from bad work — they come from bad coordination: a vendor running late, a material choice made without checking the structural plan, an issue caught too late to fix cheaply. Managing the whole build as one continuous process, instead of a chain of handoffs between separate contractors, is what actually prevents that.",
    whenYouNeedIt:
      "Any project with more than one trade involved — which is almost every real build. Especially worth insisting on if you've been quoted by multiple separate contractors who won't be talking to each other.",
  },
  {
    slug: "glassworks-design",
    icon: "glass",
    name: "Glassworks Design",
    summary: "Custom glass solutions designed for the specific space, not off a shelf.",
    details: [
      "Windows, partitions, facades, and decorative glass features.",
      "Material selection based on load, light, and safety requirements.",
      "Precision installation with tempered and laminated glass where it matters.",
      "Designs that hold up to daily institutional or commercial use.",
    ],
    whyItMatters:
      "Glass isn't one material — tempered, laminated, insulated, and decorative glass all behave differently under load, heat, and impact. Choosing the wrong type for the application is how you end up with glass that looks fine on day one and cracks, fogs, or becomes a safety hazard within a year. The design decision happens before installation, not during it.",
    whenYouNeedIt:
      "Any glass that's structural, load-bearing, in a high-traffic area, or exposed to weather — not just decorative glass in a low-risk spot.",
  },
  {
    slug: "structural-engineering",
    icon: "structural",
    name: "Structural Engineering",
    summary: "The unglamorous part that makes everything else safe to build on.",
    details: [
      "Load calculations and structural reviews before design decisions are locked in.",
      "Safety-first material choices, even when it isn't the cheapest option.",
      "Reinforcement planning for glass-integrated structural elements.",
      "Compliance with local building safety norms.",
    ],
    whyItMatters:
      "Glass facades and large window installations change how a building carries load and handles wind and thermal stress — they're not purely cosmetic additions. Skipping the structural review to save time is exactly how installations that looked fine in the showroom fail in the field. This step exists specifically to catch that before it's built, not after.",
    whenYouNeedIt:
      "Any structural glass installation (facades, large spans, load-bearing partitions), and any renovation that changes a building's existing structure.",
  },
  {
    slug: "interior-exterior-design",
    icon: "design",
    name: "Interior & Exterior Design",
    summary: "Where construction and glasswork come together as one considered space.",
    details: [
      "Cohesive design across facades, interiors, and glass features.",
      "Lighting-aware glass placement for natural light without heat overload.",
      "Finish selection that matches the building's actual use, not just trends.",
    ],
    whyItMatters:
      "Glass placed without thinking about sun direction turns a bright feature into a greenhouse by 2pm. Design decisions about where glass goes have to happen alongside the construction plan, not after it — otherwise you're solving a heat or glare problem with curtains and film instead of getting it right the first time.",
    whenYouNeedIt:
      "Any project where glass is a major visual element — facades, atriums, large windows — especially in spaces that get direct sun for part of the day.",
  },
  {
    slug: "glass-restoration",
    icon: "restoration",
    name: "Glass Restoration",
    summary: "Bringing older or damaged glasswork back to its original clarity and strength.",
    details: [
      "Assessment of existing glass condition and structural safety.",
      "Repair or replacement that respects a building's existing character.",
      "Restoration work for older institutional and heritage-adjacent buildings.",
    ],
    whyItMatters:
      "Full replacement isn't always necessary, and it isn't always right — older glasswork is sometimes part of a building's actual character, not just a worn-out component. The assessment step exists to figure out honestly whether something needs repair, restoration, or replacement, instead of defaulting to the most expensive option.",
    whenYouNeedIt:
      "Cloudy, chipped, or structurally uncertain glass in an older building, especially one where matching the existing look matters.",
  },
  {
    slug: "3d-printing-construction",
    icon: "printing",
    name: "3D Printing for Construction",
    summary: "Using 3D-printed components where precision and speed matter most.",
    details: [
      "Rapid prototyping of custom structural or decorative details.",
      "Reduced material waste compared to fully manual fabrication.",
      "Precise, repeatable components for detail-heavy installations.",
    ],
    whyItMatters:
      "Some connective and decorative components are hard to get exactly right by hand, and expensive to iterate on if the first version doesn't fit. Prototyping them means a design can be tested and adjusted before committing material and labor to the final piece — which matters most on custom glasswork where a bad fit isn't a quick fix.",
    whenYouNeedIt:
      "Custom, non-standard connective hardware or decorative detail work where an off-the-shelf part doesn't fit the design.",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & site visit",
    description:
      "A direct conversation about what the space needs, followed by an on-site assessment before any commitment is made.",
  },
  {
    step: "02",
    title: "Design & estimate",
    description:
      "A concrete plan and transparent cost estimate — materials, timeline, and scope laid out before work begins.",
  },
  {
    step: "03",
    title: "Construction & installation",
    description:
      "On-site execution with regular quality checks, not just a start date and an end date.",
  },
  {
    step: "04",
    title: "Handover & follow-up",
    description:
      "A final walkthrough together, and availability afterward if anything needs attention.",
  },
];

export interface FaqEntry {
  question: string;
  answer: string;
  keywords: string[];
}

export const faqKnowledgeBase: FaqEntry[] = [
  {
    question: "How many years of experience does Anoop Mishra have?",
    answer:
      "Anoop Mishra has over 15 years of experience in construction and glassworks, starting as a Project Manager in 2015 and now leading full-stack construction and glassworks projects.",
    keywords: ["experience", "years", "how long", "since when", "background"],
  },
  {
    question: "What services does Anoop Mishra offer?",
    answer:
      "Six core services: Construction Management, Glassworks Design, Structural Engineering, Interior & Exterior Design, Glass Restoration, and 3D Printing for Construction. You can see full details on the Services page.",
    keywords: ["services", "offer", "what do you do", "capabilities", "work on"],
  },
  {
    question: "What kind of projects has Anoop worked on?",
    answer:
      "Projects span residential, commercial, and institutional work — including custom glasswork at Central Academy, glazing work at the Park Inn by Radisson in Tedhi Pulia, luxury residential glass facades, commercial office buildings, and more. See the Projects page for the full list.",
    keywords: ["projects", "portfolio", "worked on", "examples", "central academy", "radisson", "hotel", "school"],
  },
  {
    question: "Where is Anoop Mishra based, and what areas does he serve?",
    answer:
      "Based in Lucknow, serving Lucknow and the surrounding Uttar Pradesh region.",
    keywords: ["where", "location", "based", "area", "lucknow", "serve", "city"],
  },
  {
    question: "How can I contact Anoop Mishra?",
    answer:
      "Call or WhatsApp +91-8318641198, or email shashiswadh20@gmail.com. The Contact page has a quick-message form too.",
    keywords: ["contact", "reach", "phone", "number", "email", "whatsapp", "call"],
  },
  {
    question: "Does Anoop Mishra do glass restoration for older buildings?",
    answer:
      "Yes — glass restoration is one of the six core services, including repair and refurbishment work that respects a building's existing character, useful for older or heritage-adjacent properties.",
    keywords: ["restoration", "repair", "old", "heritage", "refurbish", "fix"],
  },
  {
    question: "What's the process for starting a project?",
    answer:
      "Four steps: a consultation and site visit, a design and cost estimate, construction and installation with regular quality checks, and a final handover with follow-up support. See the Process section on the About page.",
    keywords: ["process", "start", "how does it work", "steps", "begin", "get started"],
  },
  {
    question: "Does Anoop Mishra work on both residential and commercial projects?",
    answer:
      "Yes, both — residential builds, commercial spaces, and institutional projects like schools and hotels.",
    keywords: ["residential", "commercial", "institutional", "home", "office", "business"],
  },
  {
    question: "Why does construction and glasswork need to be handled by one team?",
    answer:
      "Because they're not actually separate problems — glass placement affects structural load, heat, and light, which are construction decisions. Split across two contractors who don't talk to each other, that coordination gap is where most delays and mistakes happen. One accountable team removes that gap.",
    keywords: ["why one team", "why together", "separate contractors", "accountability", "coordination"],
  },
  {
    question: "Why does the type of glass matter so much?",
    answer:
      "Tempered, laminated, insulated, and decorative glass all behave differently under load, heat, humidity, and impact. The wrong choice for the application is how glass looks fine on installation day and fails within a year — cracking, fogging, or becoming a safety risk. Material choice happens before installation for exactly this reason.",
    keywords: ["why glass type", "which glass", "tempered", "laminated", "material choice"],
  },
  {
    question: "Why is a site visit necessary before getting a quote?",
    answer:
      "Because an accurate quote depends on things a phone call can't tell you — sun exposure, existing structural condition, access constraints, humidity or usage patterns. A quote given without seeing the site is a guess; the site visit is what turns it into a real number.",
    keywords: ["why site visit", "site visit necessary", "quote", "estimate", "walkthrough"],
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends heavily on scope — a residential glass feature might take a couple of weeks, while a full facade or institutional installation can run several months. The design and estimate step (step 2 of the process) is where a realistic timeline gets set for your specific project, not before.",
    keywords: ["how long", "timeline", "duration", "how many weeks", "how many days"],
  },
  {
    question: "Why does safety-first material selection sometimes cost more?",
    answer:
      "Because the cheaper option is sometimes cheaper for a reason — thinner glass, standard (not corrosion-resistant) hardware, or skipping a structural review. When a costlier material or process is recommended, it's because the failure mode of the cheaper option is something you'd actually notice later — a cracked pane, a hardware failure, a heat problem. That reasoning is always explained, not just billed.",
    keywords: ["why cost more", "expensive", "cheaper option", "safety cost", "budget"],
  },
];
