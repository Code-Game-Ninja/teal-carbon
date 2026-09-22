/**
 * Teal Carbon — seed content (placeholder).
 * Swap copy, numbers and images for verified project data later.
 * Images are online (Unsplash) per Phase-0 brief.
 */

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "Teal Carbon Lab",
  tagline: "Coastal & wetland carbon science",
  acknowledgment:
    "We acknowledge the Traditional Custodians of the coastlines and wetlands on which this research takes place.",
  external: { label: "Visit the lab", href: "#" },
};

export const nav = [
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/impact" },
  { label: "Map", href: "/map" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Teal Carbon Lab",
  headline: ["THE COAST", "HOLDS MORE", "THAN WATER."],
  title: "The coast holds more than water.",
  lead: "Join our field notes for research updates from the mangroves, marshes and meadows storing our carbon.",
  cue: "Explore the research",
  image: img("photo-1507525428034-b723cf961d3e"),
  chapter: { index: "01", total: "05" },
  proof: {
    text: "1,200+ researchers & partners",
    avatars: [
      img("photo-1544005313-94ddf0286df2", 120),
      img("photo-1494790108377-be9c29b29330", 120),
      img("photo-1500648767791-00dcc994a43e", 120),
    ],
  },
};

export const intro = {
  eyebrow: "01 / Why teal carbon",
  statement:
    "Wetlands and coastal ecosystems are some of Earth's most powerful natural carbon systems.",
  body: "Mangroves, saltmarshes, seagrass meadows and freshwater wetlands capture carbon, protect coastlines, and support life — storing it in waterlogged soils for millennia.",
};

export type Ecosystem = {
  key: "mangrove" | "seagrass" | "saltmarsh" | "peatland";
  name: string;
  blurb: string;
  color: string; // CSS var for styling
  hex: string; // raw hex for canvas/SVG (Leaflet)
  image: string;
};

export const ecosystems: Ecosystem[] = [
  {
    key: "mangrove",
    name: "Mangroves",
    blurb: "Tidal forests that lock carbon into deep, oxygen-poor soils.",
    color: "var(--color-eco-mangrove)",
    hex: "#2C8F80",
    image: img("photo-1518837695005-2083093ee35b"),
  },
  {
    key: "seagrass",
    name: "Seagrass",
    blurb: "Underwater meadows that bury carbon on the seabed.",
    color: "var(--color-eco-seagrass)",
    hex: "#5FA88C",
    image: img("photo-1471922694854-ff1b63b20054"),
  },
  {
    key: "saltmarsh",
    name: "Saltmarsh",
    blurb: "Coastal grasslands flooded by the tides, rich in buried carbon.",
    color: "var(--color-eco-saltmarsh)",
    hex: "#B7A46A",
    image: img("photo-1500375592092-40eb2168fd21"),
  },
  {
    key: "peatland",
    name: "Wetlands",
    blurb: "Freshwater peat systems — the teal end of the carbon spectrum.",
    color: "var(--color-eco-peatland)",
    hex: "#8A6F4B",
    image: img("photo-1552083375-1447ce886485"),
  },
];

export type Stat = { value: number; suffix?: string; label: string; source: string };

export const stats: Stat[] = [
  { value: 51700, suffix: " ha", label: "Potential restoration area", source: "PLACEHOLDER — use verified figure" },
  { value: 115596, label: "tCO₂e captured / year", source: "PLACEHOLDER — use verified figure" },
  { value: 34, label: "Active research projects", source: "PLACEHOLDER" },
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
    slug: "blue-carbon",
    title: "Blue Carbon",
    blurb: "Measuring carbon in coastal marine ecosystems.",
    image: img("photo-1518837695005-2083093ee35b"),
    lead: "Coastal marine ecosystems bury carbon in their soils faster, and hold it longer, than almost any forest on land.",
    body: [
      "Blue carbon is the carbon captured and stored by ocean and coastal ecosystems — principally mangroves, tidal saltmarshes and seagrass meadows. Waterlogged, oxygen-poor soils slow decomposition, letting carbon accumulate for centuries to millennia.",
      "Our team quantifies these stores with soil cores, allometric surveys and remote sensing, building the evidence base that lets restoration count toward real climate targets.",
    ],
    methods: ["Soil-core sampling", "Allometric biomass surveys", "Satellite & drone mapping", "Carbon-flux modelling"],
  },
  {
    index: "02",
    slug: "teal-carbon",
    title: "Teal Carbon",
    blurb: "Freshwater wetland and peatland carbon dynamics.",
    image: img("photo-1552083375-1447ce886485"),
    lead: "Teal carbon is the freshwater counterpart to blue — peatlands and inland wetlands that store immense carbon while cycling water and nutrients.",
    body: [
      "Freshwater wetlands occupy a fraction of Earth's surface yet hold a disproportionate share of soil carbon. When drained they flip from sink to source, so understanding their hydrology is central to protecting them.",
      "We track water tables, greenhouse-gas exchange and vegetation change to map where teal-carbon systems are most at risk — and most worth defending.",
    ],
    methods: ["Water-table monitoring", "Eddy-covariance flux towers", "Vegetation transects", "Peat-depth surveys"],
  },
  {
    index: "03",
    slug: "ecosystem-restoration",
    title: "Ecosystem Restoration",
    blurb: "Turning degraded coastlines back into carbon sinks.",
    image: img("photo-1500375592092-40eb2168fd21"),
    lead: "Restoration reactivates the carbon pump — but only if hydrology, species and timing are right.",
    body: [
      "Reconnecting tides to a drained marsh, or replanting mangroves along an eroding shore, can return a degraded site to a functioning carbon sink within years.",
      "We design and monitor restoration so outcomes are measurable, durable and beneficial to the communities and species that depend on these coasts.",
    ],
    methods: ["Hydrological reconnection", "Assisted revegetation", "Long-term monitoring plots", "Community co-design"],
  },
  {
    index: "04",
    slug: "climate-adaptation",
    title: "Climate Adaptation",
    blurb: "How natural systems buffer communities from change.",
    image: img("photo-1505142468610-359e7d316be0"),
    lead: "Healthy coasts are infrastructure — absorbing storm surge, holding sediment and buying time against rising seas.",
    body: [
      "Beyond carbon, coastal and wetland ecosystems shield people from flooding and erosion. We quantify these protective services so they can be valued alongside built defences.",
      "Our adaptation work links ecological data to the decisions of planners, insurers and coastal communities.",
    ],
    methods: ["Storm-surge modelling", "Sediment-budget analysis", "Natural-capital valuation", "Scenario planning"],
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
    slug: "coastal-blue",
    kind: "Map",
    title: "Coastal Blue",
    year: "2026",
    status: "Active",
    location: "Northern coastline",
    blurb: "Mapping the coastline to find where restoration makes the greatest difference.",
    image: img("photo-1507525428034-b723cf961d3e"),
    body: [
      "Coastal Blue is a continental-scale mapping effort combining satellite imagery, tidal models and field validation to identify the sites where restoration would return the most carbon and protection per hectare.",
      "The result is an open prioritisation layer that planners and funders can use to direct restoration where it matters most.",
    ],
    gallery: [img("photo-1507525428034-b723cf961d3e", 1200), img("photo-1505142468610-359e7d316be0", 1200)],
  },
  {
    index: "02",
    slug: "marsh-revival",
    kind: "Restore",
    title: "Marsh Revival",
    year: "2025",
    status: "In progress",
    location: "Central flats",
    blurb: "Rehydrating drained saltmarsh to reactivate carbon burial.",
    image: img("photo-1500375592092-40eb2168fd21"),
    body: [
      "Marsh Revival reconnects tidal flow to marshland drained decades ago for grazing. As salinity and inundation return, marsh vegetation re-establishes and soils begin storing carbon again.",
      "We monitor accretion, greenhouse-gas flux and biodiversity to document the recovery from day one.",
    ],
    gallery: [img("photo-1500375592092-40eb2168fd21", 1200), img("photo-1471922694854-ff1b63b20054", 1200)],
  },
  {
    index: "03",
    slug: "seabed-stores",
    kind: "Measure",
    title: "Seabed Stores",
    year: "2025",
    status: "Active",
    location: "West shelf",
    blurb: "Quantifying seagrass carbon across the continental shelf.",
    image: img("photo-1471922694854-ff1b63b20054"),
    body: [
      "Seabed Stores maps and cores seagrass meadows to measure the carbon locked beneath them — some of the least-counted and most-threatened stores in the ocean.",
      "The project pairs autonomous survey with diver sampling to build the first shelf-wide seagrass carbon inventory for the region.",
    ],
    gallery: [img("photo-1471922694854-ff1b63b20054", 1200), img("photo-1518837695005-2083093ee35b", 1200)],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export type Person = { name: string; role: string; image: string };

export const researchers: Person[] = [
  { name: "Dr. Marin Ochoa", role: "Lab Director · Blue carbon", image: img("photo-1544005313-94ddf0286df2", 800) },
  { name: "Dr. Talia Reyes", role: "Wetland biogeochemist", image: img("photo-1494790108377-be9c29b29330", 800) },
  { name: "Sam Whitlock", role: "Remote sensing lead", image: img("photo-1500648767791-00dcc994a43e", 800) },
  { name: "Dr. Ana Fielding", role: "Restoration ecologist", image: img("photo-1573497019940-1c28c88b4f3e", 800) },
];

export const partners = [
  "Coastal Research Alliance",
  "National Wetlands Trust",
  "Ocean Futures Institute",
  "Blue Economy Foundation",
];

export type Publication = { year: string; title: string; venue: string };

export const publications: Publication[] = [
  { year: "2026", title: "Continental blue-carbon prioritisation from tidal and satellite data", venue: "Nature Climate Change" },
  { year: "2025", title: "Carbon recovery trajectories in reconnected saltmarsh", venue: "Global Change Biology" },
  { year: "2025", title: "Shelf-wide seagrass carbon inventory methods", venue: "Frontiers in Marine Science" },
  { year: "2024", title: "Teal carbon: freshwater wetlands in national accounting", venue: "Environmental Research Letters" },
];

export const about = {
  eyebrow: "About the lab",
  mission:
    "We turn coastal and wetland ecosystems into measurable climate solutions.",
  body: [
    "Teal Carbon Lab is an interdisciplinary research group working across mangroves, saltmarshes, seagrass and freshwater wetlands. We measure the carbon these systems store, model where restoration will have the greatest effect, and work with communities to put that science into the ground.",
    "Our work spans field ecology, biogeochemistry, remote sensing and policy — because protecting these ecosystems is as much a human question as a scientific one.",
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

// Placeholder coordinates along the SE Queensland coast — swap for real sites.
export const mapNodes: MapNode[] = [
  { id: "n1", name: "Great Sandy Strait", eco: "mangrove", lat: -25.42, lng: 152.97, hectares: 8200, tco2e: 19400 },
  { id: "n2", name: "Moreton Bay Flats", eco: "saltmarsh", lat: -27.32, lng: 153.18, hectares: 12600, tco2e: 24100 },
  { id: "n3", name: "Eastern Banks", eco: "seagrass", lat: -27.18, lng: 153.42, hectares: 15300, tco2e: 41200 },
  { id: "n4", name: "Logan Wetland", eco: "peatland", lat: -27.72, lng: 153.28, hectares: 9600, tco2e: 18700 },
];

export const mapCenter: [number, number] = [-27.05, 153.2];

export const finalCta = {
  headline: ["THE FUTURE", "IS SOMETHING", "WE CAN RESTORE."],
  cta: "Explore our research",
  image: img("photo-1518837695005-2083093ee35b"),
};
