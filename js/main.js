// Shared header, footer and page rendering. Content lives in data.js.

const PAGES = [
  ["index.html", "Home"],
  ["products.html", "Products"],
  ["work.html", "Our Work"],
  ["about.html", "About"],
  ["contact.html", "Contact"],
];

const WA_ICON = `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4a10.4 10.4 0 0 1-1.7-5.7C5.1 9.9 10 5.2 16 5.2s10.9 4.7 10.9 10.6S22 26.4 16 26.4zm6-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>`;

function currentPage() {
  const file = location.pathname.split("/").pop();
  return file === "" ? "index.html" : file;
}

const digits = (phone) => phone.replace(/\D/g, "");

function waLink(text, phone = SITE.phones[0]) {
  const msg = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${digits(phone)}${msg}`;
}

function telLink(phone = SITE.phones[0]) {
  return `tel:+${digits(phone)}`;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const links = PAGES.map(([href, label]) =>
    `<li><a href="${href}" class="${href === currentPage() ? "active" : ""}">${label}</a></li>`
  ).join("");
  el.className = "site-header";
  el.innerHTML = `
    <nav class="container nav">
      <a href="index.html" class="logo" aria-label="${SITE.name} home">
        <img src="assets/images/logo-badge.jpg" alt="${SITE.name} logo" width="63" height="56">
        <span class="logo-text">Classic Signs<small>Since ${SITE.since}</small></span>
      </a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">&#9776;</button>
      <ul class="nav-links">${links}
        <li><a href="contact.html" class="btn btn-gold">Get a Quote</a></li>
      </ul>
    </nav>`;
  const toggle = el.querySelector(".nav-toggle");
  const list = el.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

function socialLinks() {
  const links = [
    [SITE.instagram, "Instagram"],
    [SITE.google, "Google reviews & directions"],
    [SITE.facebook, "Facebook"],
  ].filter(([url]) => url);
  return links.map(([url, label]) => `<li><a href="${url}" target="_blank" rel="noopener">${label} &#8599;</a></li>`).join("");
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const cats = [...new Set(PRODUCTS.map((p) => p.category))];
  el.className = "site-footer";
  el.innerHTML = `
    <div class="container footer-grid">
      <div>
        <a href="index.html" class="logo"><img src="assets/images/logo-badge.jpg" alt="${SITE.name} logo" width="63" height="56"></a>
        <p style="margin-top:16px;max-width:320px">Hyderabad's sign makers since ${SITE.since}. We design, fabricate and install LED signboards, neon signs and metal works.</p>
      </div>
      <div>
        <h4>Pages</h4>
        <ul>${PAGES.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Products</h4>
        <ul>${cats.map((c) => `<li><a href="products.html#${encodeURIComponent(c)}">${c}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Visit Us</h4>
        <ul>
          <li>${SITE.address}</li>
          ${SITE.phones.map((ph) => `<li><a href="${telLink(ph)}">${ph}</a></li>`).join("")}
          ${SITE.emails.map((em) => `<li><a href="mailto:${em}">${em}</a></li>`).join("")}
          ${socialLinks()}
        </ul>
      </div>
    </div>
    <div class="container copyright">&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</div>`;

  const wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = waLink("Hi Classic Signs, I'd like a quote for a sign.");
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.setAttribute("aria-label", "Chat on WhatsApp");
  wa.innerHTML = WA_ICON;
  document.body.appendChild(wa);
}

function renderProducts(limit) {
  const el = document.getElementById("product-grid");
  if (!el) return;
  const draw = (category) => {
    let items = PRODUCTS.filter((p) => category === "All" || p.category === category);
    if (limit) items = roundRobin(items).slice(0, limit);
    el.innerHTML = items.map((p) => `
      <article class="card reveal">
        <div class="card-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        <div class="card-body">
          <span class="tag">${p.category}</span>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <a class="more" href="${waLink(`Hi Classic Signs, I'm interested in ${p.name}.`)}" target="_blank" rel="noopener">Enquire on WhatsApp &rarr;</a>
        </div>
      </article>`).join("");
    observeReveal(el);
  };
  setupFilters("product-filters", PRODUCTS, draw);
}

// Mix categories so a short list shows a bit of everything.
function roundRobin(items) {
  const groups = {};
  items.forEach((p) => (groups[p.category] ||= []).push(p));
  const lists = Object.values(groups);
  const out = [];
  for (let i = 0; out.length < items.length; i++) lists.forEach((l) => l[i] && out.push(l[i]));
  return out;
}

function renderGallery() {
  const el = document.getElementById("gallery");
  if (!el) return;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `<button aria-label="Close">&times;</button><img alt="">`;
  document.body.appendChild(box);
  box.addEventListener("click", () => box.classList.remove("open"));
  document.addEventListener("keydown", (e) => e.key === "Escape" && box.classList.remove("open"));

  const draw = (category) => {
    el.innerHTML = GALLERY.filter((g) => category === "All" || g.category === category).map((g) => `
      <figure data-full="${g.image}">
        <img src="${g.image}" alt="${g.caption}" loading="lazy">
        <figcaption>${g.caption}</figcaption>
      </figure>`).join("");
  };
  el.addEventListener("click", (e) => {
    const fig = e.target.closest("figure");
    if (!fig) return;
    const img = box.querySelector("img");
    img.src = fig.dataset.full;
    img.alt = fig.querySelector("figcaption").textContent;
    box.classList.add("open");
  });
  setupFilters("gallery-filters", GALLERY, draw);
}

function renderVideos(limit) {
  const el = document.getElementById("video-grid");
  if (!el) return;
  el.innerHTML = VIDEOS.slice(0, limit || VIDEOS.length).map((v) => {
    const media = v.youtube
      ? `<iframe src="https://www.youtube.com/embed/${v.youtube}" title="${v.title}" loading="lazy" allowfullscreen style="width:100%;height:100%;border:0"></iframe>`
      : `<video src="${v.src}" poster="${v.poster}" controls muted loop playsinline preload="none"></video>`;
    return `<article class="card video-card reveal ${v.landscape ? "landscape" : ""}">
      <div class="card-media">${media}</div>
      <div class="card-body"><h3>${v.title}</h3></div>
    </article>`;
  }).join("");
  observeReveal(el);
}

function setupFilters(id, items, draw) {
  const filters = document.getElementById(id);
  const cats = ["All", ...new Set(items.map((p) => p.category))];
  const fromHash = decodeURIComponent(location.hash.slice(1));
  let start = cats.includes(fromHash) ? fromHash : "All";
  if (filters) {
    filters.innerHTML = cats.map((c) =>
      `<button class="filter-btn ${c === start ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      draw(btn.dataset.cat);
    });
  } else {
    start = "All";
  }
  draw(start);
}

function fillSiteInfo() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    el.textContent = SITE[el.dataset.site];
  });
  document.querySelectorAll("[data-tel]").forEach((el) => (el.href = telLink()));
  const phoneList = document.getElementById("phone-list");
  if (phoneList) {
    phoneList.innerHTML = SITE.phones.map((ph) =>
      `<p><a href="${telLink(ph)}">${ph}</a> &middot; <a href="${waLink("Hi Classic Signs", ph)}" target="_blank" rel="noopener">WhatsApp</a></p>`).join("");
  }
  const social = document.getElementById("social-list");
  if (social) social.innerHTML = socialLinks().replace(/<\/?li>/g, (t) => (t === "<li>" ? "<p>" : "</p>"));
  const emailList = document.getElementById("email-list");
  if (emailList) {
    emailList.innerHTML = SITE.emails.map((em) => `<p><a href="mailto:${em}">${em}</a></p>`).join("");
  }
  document.querySelectorAll("[data-wa]").forEach((el) => (el.href = waLink(el.dataset.wa)));
  const map = document.getElementById("map");
  if (map) map.src = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;
  const years = document.getElementById("years");
  if (years) years.textContent = `${new Date().getFullYear() - SITE.since}+`;
}

function setupQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;
  // No server needed: the enquiry opens in WhatsApp, ready to send.
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const text = [
      "Hi Classic Signs, I'd like a quote.",
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Product: ${d.get("product")}`,
      d.get("size") ? `Size: ${d.get("size")}` : "",
      d.get("message") ? `Details: ${d.get("message")}` : "",
    ].filter(Boolean).join("\n");
    window.open(waLink(text), "_blank", "noopener");
  });
  const select = form.querySelector("select[name=product]");
  if (select) {
    select.innerHTML = `<option value="">Choose a product</option>` +
      PRODUCTS.map((p) => `<option>${p.name}</option>`).join("") + `<option>Something else</option>`;
  }
}

let revealObserver;
function observeReveal(root = document) {
  const items = root.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("in"));
    return;
  }
  revealObserver ||= new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        revealObserver.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((i) => revealObserver.observe(i));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  fillSiteInfo();
  const home = document.body.dataset.page === "home";
  renderProducts(home ? 8 : 0);
  renderGallery();
  renderVideos(home ? 4 : 0);
  setupQuoteForm();
  observeReveal();
});
