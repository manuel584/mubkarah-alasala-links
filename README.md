# Minimal Link-in-Bio

A tiny, static "link-in-bio" website designed for performance and ease of use. No backend required.

## Features
- ⚡ **Tiny Footprint**: Plain HTML/CSS/JS. No heavy frameworks.
- 📱 **Mobile-First**: Responsive design that looks great on all devices.
- 🎨 **Themable**: Uses CSS variables for easy color customization.
- 🌗 **Dark Mode**: Automatic dark mode support based on system preference.
- ♿ **Accessible**: Semantic HTML and keyboard navigation support.
- 📝 **Easy Updates**: Just edit `links.json` to add or remove links.

## Stack Justification
**Plain HTML/CSS/Vanilla JS** was chosen over static site generators or frameworks (like React/Next.js) because:
1.  **Zero Build Step**: You can edit files directly on GitHub or locally and see changes instantly.
2.  **Performance**: The entire site is under 10KB (gzipped).
3.  **Maintenance**: No dependencies to update or security vulnerabilities to worry about.

## Setup & Deployment

### Local Development
1.  Clone the repository.
2.  Open `index.html` in your browser.
    - *Note*: To fetch `links.json` correctly, you might need a local server due to CORS policies on some browsers.
    - Run `python -m http.server` or `npx serve` in the project directory.

### Deploy to GitHub Pages
1.  Create a new public repository on GitHub.
2.  Push this code to the repository.
3.  Go to **Settings** > **Pages**.
4.  Under **Source**, select `main` branch and click **Save**.
5.  Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## How to Update Links
1.  Open `links.json`.
2.  Add a new object to the array:
    ```json
    {
      "title": "My New Link",
      "url": "https://example.com",
      "icon": "globe"
    }
    ```
3.  Commit and push changes. The site updates automatically.

## Customization
- **Colors**: Edit the `:root` variables in `styles.css`.
- **Profile**: Update the `img` src and text in `index.html`.
- **Icons**: Add new SVG paths to the `icons` object in `scripts.js`.

## License
MIT
