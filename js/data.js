// Edit this file to update business details, products, gallery photos and videos.
// Put new photos in assets/images/ and new videos in assets/videos/, then add them below.

const SITE = {
  name: "Classic Signs",
  since: 2000,
  tagline: "LED Signboards · Neon · Metal Works",
  phone: "+91 7396 680 385",
  whatsapp: "917396680385",        // digits only, with country code
  email: "info@classicsigns.in",   // TODO: real email
  address: "#16-8-920/1, beside Masjid-e-Mohiuddin unnisa begum, opposite Akbar Plaza, Malakpet Darussalam bank line, Hyderabad (T.G) 500036",
  hours: "Open every day, 10:00 AM to 11:00 PM IST",
  mapQuery: "Akbar Plaza, Malakpet, Hyderabad 500036",
  instagram: "",                   // optional profile URL
  facebook: "",                    // optional page URL
};

const PRODUCTS = [
  {
    name: "Custom Neon Signs",
    category: "Neon",
    image: "assets/images/neon-kajol-gagan.jpg",
    description: "Names, couple signs, wedding and anniversary neon in any colour, font or shape.",
  },
  {
    name: "Neon Logo Signs",
    category: "Neon",
    image: "assets/images/neon-crown-lit.jpg",
    description: "Your logo traced in neon on a cut acrylic backing, for shops, offices and events.",
  },
  {
    name: "Neon Art & Religious Décor",
    category: "Neon",
    image: "assets/images/neon-dome-urdu.jpg",
    description: "Printed artwork outlined with neon, with Urdu, Arabic or English verses.",
  },
  {
    name: "Café & Brand Neon",
    category: "Neon",
    image: "assets/images/neon-boba.jpg",
    description: "Eye-catching icons and wordmarks for cafés, restaurants and selfie walls.",
  },
  {
    name: "LED Shop Signboards",
    category: "LED Boards",
    image: "assets/images/board-tea-story.jpg",
    description: "Bright, weatherproof shop-front boards that stay readable day and night.",
  },
  {
    name: "Back-lit LED Boards",
    category: "LED Boards",
    image: "assets/images/board-trenz-salon.jpg",
    description: "Evenly lit panels with printed graphics for salons, clinics and showrooms.",
  },
  {
    name: "Academy & Office Boards",
    category: "LED Boards",
    image: "assets/images/board-zias-zenith.jpg",
    description: "Large illuminated name boards for schools, coaching centres and offices.",
  },
  {
    name: "LED Standees",
    category: "LED Boards",
    image: "assets/images/standee-trenz-salon.jpg",
    description: "Free-standing lit displays for menus, services and promotions.",
  },
  {
    name: "Infinity Mirror Letters",
    category: "3D Letters",
    image: "assets/images/infinity-letters-gold.jpg",
    description: "3D letters with a deep, endless light effect that turns heads from the road.",
  },
  {
    name: "Back-lit Steel Letters",
    category: "3D Letters",
    image: "assets/images/poster-halo-letters-umar-shams.jpg",
    description: "Stainless steel letters with a soft halo glow behind them, for a premium look.",
  },
  {
    name: "House Nameplates",
    category: "Metal Works",
    image: "assets/images/nameplate-ameens-residence.jpg",
    description: "Acrylic and metal nameplates, with or without LED lighting.",
  },
  {
    name: "Home Name Boards",
    category: "Metal Works",
    image: "assets/images/nameplate-ashiyane-fatima.jpg",
    description: "Elegant metal lettering for house fronts, gates and compound walls.",
  },
  {
    name: "Islamic Calligraphy Wall Art",
    category: "Metal Works",
    image: "assets/images/calligraphy-wall-art.jpg",
    description: "Laser-cut gold and steel calligraphy for living rooms, masjids and offices.",
  },
  {
    name: "Steel Cut Calligraphy",
    category: "Metal Works",
    image: "assets/images/calligraphy-steel-cut.jpg",
    description: "Mirror-finish steel calligraphy cut to your design and size.",
  },
];

// Photos for the Our Work gallery.
const GALLERY = [
  { image: "assets/images/neon-kajol-gagan.jpg", caption: "Wedding neon: Kajol ♥ Gagan", category: "Neon" },
  { image: "assets/images/board-tea-story.jpg", caption: "LED signboard: Tea Story", category: "LED Boards" },
  { image: "assets/images/neon-crown-logo-views.jpg", caption: "Neon logo: Tajushariya crown", category: "Neon" },
  { image: "assets/images/infinity-letters-gold.jpg", caption: "Gold infinity mirror letters", category: "3D Letters" },
  { image: "assets/images/nameplate-ameens-residence.jpg", caption: "Lit house nameplate", category: "Metal Works" },
  { image: "assets/images/neon-qadri-weds-qadriya.jpg", caption: "Wedding neon: Qadri weds Qadriya", category: "Neon" },
  { image: "assets/images/board-trenz-salon.jpg", caption: "Back-lit LED board: Trenz Salon", category: "LED Boards" },
  { image: "assets/images/calligraphy-wall-art.jpg", caption: "Gold calligraphy wall art", category: "Metal Works" },
  { image: "assets/images/neon-dome-installed.jpg", caption: "Neon art with Urdu verse", category: "Neon" },
  { image: "assets/images/board-zias-zenith.jpg", caption: "Academy board: Zia's Zenith", category: "LED Boards" },
  { image: "assets/images/neon-happy-anniversary.jpg", caption: "Happy Anniversary neon", category: "Neon" },
  { image: "assets/images/standee-trenz-salon.jpg", caption: "LED standee: Trenz Salon", category: "LED Boards" },
  { image: "assets/images/neon-reh-aye.jpg", caption: "Couple neon: Reh ♥ Aye", category: "Neon" },
  { image: "assets/images/nameplate-ashiyane-fatima.jpg", caption: "Home name board: Ashiyane Fatima", category: "Metal Works" },
  { image: "assets/images/neon-crown-lit.jpg", caption: "Neon crown, lit up", category: "Neon" },
  { image: "assets/images/calligraphy-steel-cut.jpg", caption: "Steel cut calligraphy", category: "Metal Works" },
  { image: "assets/images/neon-boba.jpg", caption: "Café neon: boba cup", category: "Neon" },
  { image: "assets/images/neon-dome-closeup.jpg", caption: "Neon art, close-up", category: "Neon" },
  { image: "assets/images/neon-crown-side.jpg", caption: "Neon crown, side view", category: "Neon" },
  { image: "assets/images/neon-dome-urdu.jpg", caption: "Neon dome artwork", category: "Neon" },
];

// Product videos. `src` is a local mp4; set `youtube` to a video id to embed from YouTube instead.
const VIDEOS = [
  { title: "Back-lit & infinity letters", src: "assets/videos/halo-letters-umar-shams.mp4", poster: "assets/images/poster-halo-letters-umar-shams.jpg" },
  { title: "White infinity mirror letters", src: "assets/videos/infinity-letters-lex.mp4", poster: "assets/images/poster-infinity-letters-lex.jpg", landscape: true },
  { title: "Infinity letters glowing", src: "assets/videos/infinity-letters-white.mp4", poster: "assets/images/poster-infinity-letters-white.jpg" },
  { title: "Nameplates & calligraphy in the workshop", src: "assets/videos/workshop-nameplates.mp4", poster: "assets/images/poster-workshop-nameplates.jpg", landscape: true },
  { title: "Halo-lit steel letters", src: "assets/videos/halo-letters-umar-shams-2.mp4", poster: "assets/images/poster-halo-letters-umar-shams-2.jpg", landscape: true },
];
