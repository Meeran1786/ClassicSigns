# Classic Signs website

Static 5-page website for Classic Signs, Malakpet, Hyderabad (LED signboards, neon, metal works).
It's plain HTML, CSS and JavaScript, so there's no build step.

## Pages
- `index.html`: Home
- `products.html`: Products, with category filters
- `work.html`: Our Work, with the photo gallery and product videos
- `about.html`: About
- `contact.html`: Contact and quote form (sends the enquiry through WhatsApp)

## Editing content
Business details, products, gallery photos and videos are all in `js/data.js`.
Put new photos in `assets/images/` and new videos in `assets/videos/`, then add an entry for each one in `data.js`.

## Run locally
```
python3 -m http.server 8080
```
Then open http://localhost:8080

## Deploy to DigitalOcean App Platform (static site)
1. Push this folder to GitHub.
2. In DigitalOcean, go to Apps, click Create App, then choose GitHub and pick the repo and branch.
3. For the resource type, choose Static Site. Leave the build command empty and set the output directory to `/`.
4. Deploy. Then add your domain under Settings, then Domains.

Every push to the branch redeploys the site automatically.
