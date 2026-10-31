// Edit this file to update business details, products, gallery photos and videos.
// Put new photos in assets/images/ and new videos in assets/videos/, then add them below.

const SITE = {
  name: "Classic Signs",
  since: 2000,
  tagline: "LED Signboards · Neon · Metal Works",
  // Phone and WhatsApp numbers. The first one is used for the WhatsApp button, the quote form and "Call Now".
  phones: ["+91 73966 80385", "+91 88868 98914"],
  emails: ["classicsigns2000@gmail.com", "baseerkhizar@gmail.com", "syedbaseer00786@gmail.com"],
  address: "#16-8-920/1, beside Masjid-e-Mohiuddin unnisa begum, opposite Akbar Plaza, Malakpet Darussalam bank line, Hyderabad (T.G) 500036",
  hours: "Open every day, 10:00 AM to 11:00 PM IST",
  mapQuery: "Akbar Plaza, Malakpet, Hyderabad 500036",
  instagram: "https://www.instagram.com/classicsigns_/",
  google: "https://share.google/Sp16hY2bdwqDy7Dot", // Google Business profile
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
    name: "Acrylic Letter Boards",
    category: "LED Boards",
    image: "assets/images/board-infotech-school-lit.jpg",
    description: "Raised acrylic letters on a lit panel, sharp by day and glowing at night.",
  },
  {
    name: "LED Standees",
    category: "LED Boards",
    image: "assets/images/standee-trenz-salon.jpg",
    description: "Free-standing lit displays for menus, services and promotions.",
  },
  {
    name: "3D LED Letters",
    category: "3D Letters",
    image: "assets/images/letters-jockey-led.jpg",
    description: "Bold front-lit 3D letters for showrooms, malls and shop fronts.",
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
  { image: "assets/images/letters-jockey-led.jpg", caption: "3D LED letters: Jockey", category: "3D Letters" },
  { image: "assets/images/board-gahna-mahal.jpg", caption: "Shop front: Gahna Mahal Jewellers", category: "LED Boards" },
  { image: "assets/images/board-infotech-school-lit.jpg", caption: "Lit acrylic board: Infotech School", category: "LED Boards" },
  { image: "assets/images/letters-fitness-centre.jpg", caption: "Front-lit letters: Fitness Centre", category: "3D Letters" },
  { image: "assets/images/nameplate-aashiyana-e-manzoor.jpg", caption: "Back-lit nameplate: Aashiyana-e-Manzoor", category: "Metal Works" },
  { image: "assets/images/board-tea-cafe.jpg", caption: "LED signboard: Tea Cafe", category: "LED Boards" },
  { image: "assets/images/letters-park-led.jpg", caption: "Pixel LED letters: Park", category: "3D Letters" },
  { image: "assets/images/board-kings-pride.jpg", caption: "Gold letter board: Kings Pride Infra", category: "Metal Works" },
  { image: "assets/images/board-mazu-mobiles.jpg", caption: "Shop front: Mazu Mobiles", category: "LED Boards" },
  { image: "assets/images/board-infotech-school-day.jpg", caption: "Acrylic letter board: Infotech School", category: "LED Boards" },
  { image: "assets/images/board-kings-pride-vertical.jpg", caption: "Vertical board: Kings Pride Infra", category: "Metal Works" },
  { image: "assets/images/board-jono-kitchen.jpg", caption: "Night view: Jono Kitchen", category: "LED Boards" },
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
  { title: "Lit store front: Riwayat", src: "assets/videos/store-riwayat-lit.mp4", poster: "assets/images/poster-store-riwayat-lit.jpg" },
  { title: "Back-lit house nameplate", src: "assets/videos/nameplate-ameens-residence-video.mp4", poster: "assets/images/poster-nameplate-ameens-residence-video.jpg" },
  { title: "Steel & gold calligraphy wall art", src: "assets/videos/calligraphy-wall-art-video.mp4", poster: "assets/images/poster-calligraphy-wall-art-video.jpg" },
  { title: "Cut-out sign for IndiGo", src: "assets/videos/indigo-cut-out-sign.mp4", poster: "assets/images/poster-indigo-cut-out-sign.jpg" },
  { title: "Back-lit & infinity letters", src: "assets/videos/halo-letters-umar-shams.mp4", poster: "assets/images/poster-halo-letters-umar-shams.jpg" },
  { title: "White infinity mirror letters", src: "assets/videos/infinity-letters-lex.mp4", poster: "assets/images/poster-infinity-letters-lex.jpg", landscape: true },
  { title: "Infinity letters glowing", src: "assets/videos/infinity-letters-white.mp4", poster: "assets/images/poster-infinity-letters-white.jpg" },
  { title: "Nameplates & calligraphy in the workshop", src: "assets/videos/workshop-nameplates.mp4", poster: "assets/images/poster-workshop-nameplates.jpg", landscape: true },
  { title: "Halo-lit steel letters", src: "assets/videos/halo-letters-umar-shams-2.mp4", poster: "assets/images/poster-halo-letters-umar-shams-2.jpg", landscape: true },
];
