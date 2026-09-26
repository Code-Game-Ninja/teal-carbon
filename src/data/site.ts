/**
 * Teal Carbon — seed content (placeholder).
 * Swap copy, numbers and images for verified project data later.
 * Images are online (Unsplash) per Phase-0 brief.
 */

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "Teal Carbon Lab",
  tagline: "Advancing Teal Carbon Science for Climate-Resilient Shallow Inland (non-tidal) Wetlands",
  acknowledgment:
    "We acknowledge the Traditional Custodians of the coastlines and wetlands on which this research takes place.",
  external: { label: "Visit the lab", href: "https://www.laxmikant.org/" },
};

export const nav = [
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/impact" },
  { label: "Map", href: "/map" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Teal Carbon Lab",
  headline: ["FROM BLUE CARBON", "TO TEAL", "CARBON"],
  title: "Redefining Inland Wetland Climate Science",
  lead: "The world's first Teal Carbon Lab translating cutting-edge science into climate solutions by integrating field observations, satellite data, and GeoAI for inland wetland ecosystems.",
  cue: "Explore the research",
  image: img("photo-1507525428034-b723cf961d3e"),
  chapter: { index: "01", total: "05" },
  proof: {
    text: "Pioneering teal carbon science",
    avatars: [
      img("photo-1544005313-94ddf0286df2", 120),
      img("photo-1494790108377-be9c29b29330", 120),
      img("photo-1500648767791-00dcc994a43e", 120),
    ],
  },
};

export const intro = {
  eyebrow: "01 / WHAT IS TEAL CARBON",
  statement:
    "Teal carbon refers to carbon stored and cycled within all types of shallow inland (non-tidal) wetlands, including marshes, swamps, peatlands, and other lacustrine, riverine or palsutrine systems.",
  body: "These ecosystems regulate climate through a complex balance of carbon sequestration and greenhouse gas emissions. Unlike static classifications, teal carbon represents a process-driven framework capturing the coupled dynamics of hydrology and biogeochemistry.",
};

export type Ecosystem = {
  key: "marsh" | "swamp" | "peatland" | "lacustrine";
  name: string;
  blurb: string;
  color: string; // CSS var for styling
  hex: string; // raw hex for canvas/SVG (Leaflet)
  image: string;
};

export const ecosystems: Ecosystem[] = [
  {
    key: "marsh",
    name: "Marshes",
    blurb: "Shallow inland wetlands that sequester carbon in waterlogged soils.",
    color: "var(--color-eco-mangrove)",
    hex: "#2C8F80",
    image: img("photo-1518837695005-2083093ee35b"),
  },
  {
    key: "swamp",
    name: "Swamps",
    blurb: "Forested freshwater wetlands balancing carbon storage with methane emissions.",
    color: "var(--color-eco-seagrass)",
    hex: "#5FA88C",
    image: img("photo-1471922694854-ff1b63b20054"),
  },
  {
    key: "peatland",
    name: "Peatlands",
    blurb: "Thick layers of decayed organic matter storing the largest share of teal carbon.",
    color: "var(--color-eco-saltmarsh)",
    hex: "#B7A46A",
    image: img("photo-1500375592092-40eb2168fd21"),
  },
  {
    key: "lacustrine",
    name: "Lacustrine Systems",
    blurb: "Lake-associated wetlands with highly dynamic carbon cycling profiles.",
    color: "var(--color-eco-peatland)",
    hex: "#8A6F4B",
    image: img("photo-1552083375-1447ce886485"),
  },
];

export type Stat = { value: number | string; suffix?: string; label: string; source: string };

export const stats: Stat[] = [
  { value: 251, suffix: " t C/ha", label: "Max SOC at Keoladeo National Park", source: "Post-monsoon field analysis" },
  { value: 143, suffix: " t C/ha", label: "Carbon stocks at Sambhar Lake", source: "Pre-monsoon measurement" },
  { value: "Hundreds", suffix: " of Pg", label: "Carbon stored globally in teal systems", source: "Global Synthesis (Kumar et al., 2025)" },
];

export type ResearchArea = {
  index: string;
  slug: string;
  title: string;
  blurb: string;
  image: string;
  lead: string;
  body: string[];
  methods: string[];
};

export const research: ResearchArea[] = [
  {
    index: "01",
    slug: "teal-carbon-synthesis",
    title: "Teal Carbon Global Synthesis",
    blurb: "Quantifying teal carbon stocks and emissions globally.",
    image: img("photo-1518837695005-2083093ee35b"),
    lead: "The first global framework quantifying teal carbon stocks and emissions identifies wetlands as high-potential natural climate solutions.",
    body: [
      "Recent global synthesis demonstrates that teal carbon ecosystems store hundreds of petagrams of carbon globally, with peatlands alone contributing the largest share.",
      "Simultaneously, they act as dynamic sources of methane under changing hydro-climatic conditions.",
    ],
    methods: ["Global Synthesis", "Remote Sensing", "Carbon-flux modelling", "GeoAI"],
  },
  {
    index: "02",
    slug: "seasonal-variability",
    title: "Seasonal Variability in Semi-Arid Ecosystems",
    blurb: "Tracking carbon storage in semi-arid teal carbon systems.",
    image: img("photo-1552083375-1447ce886485"),
    lead: "Understanding how seasonal changes affect carbon dynamics in inland wetlands.",
    body: [
      "We track the latitudinal and seasonal variability of methane and carbon dioxide from teal carbon ecosystems.",
      "Using GOSAT and Sentinel-5P remote sensing data, we map the global methane and carbon dioxide trends to inform policy.",
    ],
    methods: ["GOSAT Monitoring", "Sentinel-5P Remote Sensing", "Field-based Science", "Seasonal Tracking"],
  },
];

export const getResearch = (slug: string) => research.find((r) => r.slug === slug);

export type Project = {
  index: string;
  slug: string;
  kind: string;
  title: string;
  year: string;
  status: string;
  location: string;
  blurb: string;
  image: string;
  body: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "keoladeo-national-park",
    kind: "Measure",
    title: "Keoladeo National Park",
    year: "2025",
    status: "Active",
    location: "Ramsar Site, India",
    blurb: "Assessing seasonal variability in carbon storage.",
    image: img("photo-1507525428034-b723cf961d3e"),
    body: [
      "This project focuses on the Keoladeo National Park, a critical Ramsar site. We discovered SOC up to 251 t C/ha post-monsoon.",
      "The ecosystem exhibits strong seasonal variability in carbon storage, which we track to understand the impact of hydro-climatic changes.",
    ],
    gallery: [img("photo-1507525428034-b723cf961d3e", 1200), img("photo-1505142468610-359e7d316be0", 1200)],
  },
  {
    index: "02",
    slug: "sambhar-lake",
    kind: "Map",
    title: "Sambhar Lake",
    year: "2025",
    status: "Active",
    location: "India’s Largest Inland Salt Lake",
    blurb: "Quantifying carbon stocks and hydrological stress.",
    image: img("photo-1500375592092-40eb2168fd21"),
    body: [
      "Sambhar Lake represents India's largest inland salt lake. We measured carbon stocks up to 143 t C/ha.",
      "Our research highlights a significant pre-monsoon carbon loss due to hydrological stress.",
    ],
    gallery: [img("photo-1500375592092-40eb2168fd21", 1200), img("photo-1471922694854-ff1b63b20054", 1200)],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export type Person = { name: string; role: string; image: string };

export const researchers: Person[] = [
  { name: "Prof. (Dr.) Laxmi Kant Sharma", role: "Visionary & Lab Lead", image: img("photo-1544005313-94ddf0286df2", 800) },
  { name: "Dr. Amanda Nahlik", role: "Pioneer in Teal Carbon", image: img("photo-1494790108377-be9c29b29330", 800) },
  { name: "Prof. Dr. Siobhan Fennessy", role: "Pioneer in Teal Carbon", image: img("photo-1500648767791-00dcc994a43e", 800) },
];

export const partners = [
  "Coastal Research Alliance",
  "National Wetlands Trust",
  "Ocean Futures Institute",
  "Blue Economy Foundation",
];

export type Publication = { year: string; title: string; venue: string };

export const publications: Publication[] = [
  { year: "2025", title: "Global teal carbon: Stocks, sequestration, and its potential role in climate change mitigation", venue: "Science of The Total Environment" },
  { year: "2025", title: "Assessing spatial and seasonal variability in soil organic carbon fractions of teal carbon in semi-arid Ramsar wetlands of India as a natural climate solution", venue: "Discover Soil" },
];

export const about = {
  eyebrow: "About the lab",
  mission:
    "The Teal Carbon Lab is dedicated to advancing cutting-edge, interdisciplinary research that quantifies, models, and translates teal carbon ecosystems into actionable nature-based climate solutions.",
  body: [
    "The Teal Carbon Lab is the world’s first dedicated research initiative advancing the science of carbon dynamics in shallow inland (non-tidal) wetland ecosystems. Conceived under the visionary leadership of Professor Dr. Laxmi Kant Sharma, the lab reflects a long-standing commitment to conservation, scientific excellence, and sustainable development.",
    "A central objective of the Teal Carbon Lab is to translate scientific understanding into actionable Nature-based Solutions (NbS) that are locally grounded and globally scalable. Emphasising indigenous and ecosystem-based approaches, the lab contributes to climate mitigation, ecological restoration, and sustainable resource management.",
  ],
  image: img("photo-1559825481-12a05cc00344"),
};

export const contact = {
  eyebrow: "Get in touch",
  headline: "Work with the lab.",
  blurb: "Collaboration, data requests, media, or restoration partnerships — reach out.",
  email: "hello@tealcarbon.example",
  address: "Coastal Sciences Building, Marine Campus",
};

export type MapNode = {
  id: string;
  name: string;
  eco: Ecosystem["key"];
  lat: number;
  lng: number;
  hectares: number;
  tco2e: number;
};

export const mapNodes: MapNode[] = [
  { id: "n1", name: "Keoladeo National Park", eco: "marsh", lat: 27.1593, lng: 77.5218, hectares: 2873, tco2e: 721000 },
  { id: "n2", name: "Sambhar Lake", eco: "lacustrine", lat: 26.9113, lng: 75.1764, hectares: 19000, tco2e: 2717000 },
];

export const mapCenter: [number, number] = [27.03, 76.34];

export const finalCta = {
  headline: ["NATURE-BASED", "CLIMATE", "SOLUTIONS."],
  cta: "Explore our research",
  image: img("photo-1518837695005-2083093ee35b"),
};
