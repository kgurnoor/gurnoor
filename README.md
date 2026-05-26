# Modern Personal Portfolio Website

A highly polished, responsive, and modern personal portfolio website built for a Senior Software Engineer. The application features a stunning premium dark aesthetic, dynamic animations, sticky scroll-stacking project cards, and a smooth infinite marquee testimonial slider.

---

## ⚡ Tech Stack

- **Core Framework**: React 18 (with TypeScript)
- **Scaffolding / Bundler**: Vite
- **Styling Layout**: Tailwind CSS
- **Micro-Animations**: Framer Motion
- **Icon Assets**: Lucide React
- **Typography Font**: Kanit (via Google Fonts)

---

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── components/            # Visual blocks & section modules
│   │   ├── Navbar.tsx         # Sticky glassmorphic navigation
│   │   ├── SocialLinks.tsx    # Active social pill renderer
│   │   ├── HeroSection.tsx    # Impactful viewport intro with SVG avatar
│   │   ├── AboutSection.tsx   # Detailed stats & profile biography
│   │   ├── ExperienceSection.tsx # Numbered career history items
│   │   ├── ServicesSection.tsx # Specialized engineering capabilities
│   │   ├── ProjectCard.tsx    # Individual sticky project visualizer
│   │   ├── ProjectsSection.tsx # Dynamic sorting & project mapping container
│   │   ├── TestimonialsSection.tsx # CSS-only loop marquee review rows
│   │   └── Footer.tsx         # 3-col footer & copy-to-clipboard email
│   ├── data/
│   │   └── portfolio.json     # Single source of truth (all contents)
│   ├── hooks/
│   │   └── usePortfolio.ts    # Typed React hook for data access
│   ├── types/
│   │   └── portfolio.ts       # Strict TypeScript type interfaces
│   ├── App.tsx                # Main entry composition shell
│   ├── main.tsx               # ReactDOM initialization
│   ├── index.css              # Global custom properties & marquee keyframes
│   └── vite-env.d.ts          # Vite client typescript bindings
├── index.html                 # Root document loading Kanit fonts
├── package.json               # Node dependencies & automation scripts
├── tailwind.config.js         # Theme extensions (colors, fonts, marquee)
├── postcss.config.js          # Tailwind compilation directives
├── tsconfig.json              # TypeScript compilation rules
└── vite.config.ts             # Vite server & bundler configurations
```

---

## 🛠️ Scripts & Commands

Always manage this project using **pnpm** (preferred) or **npm**:

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Run Local Development Server
Starts the Vite server on `http://localhost:3000` with hot-module reloading:
```bash
pnpm run dev
# or
npm run dev
```

### 3. Build for Production
Compiles all TypeScript components and exports highly optimized static assets into the `dist/` directory:
```bash
pnpm run build
# or
npm run build
```

### 4. Preview Local Production Build
Spins up a local server to test the production bundles before deployment:
```bash
pnpm run preview
# or
npm run preview
```

---

## ✍️ Modifying Content (portfolio.json)

All content is dynamically rendered from [portfolio.json](file:///c:/Users/gurno/Documents/serious-projects/personal-website/src/data/portfolio.json). There is **no hardcoded resume or project content** within the visual React components. 

To update the website, simply modify the values in `portfolio.json`:

### Schema Structure:

- **`profile`**: 
  - `name`: Full name.
  - `shortName`: Display name for greeting headers (e.g. "Hi, I'm Alex").
  - `tagline`: Captivating sub-header for the Hero block.
  - `role`: Professional job title.
  - `specialization`: High-level domain of expertise.
  - `location`: Base city.
  - `yearsOfExperience`: Number showing duration.
  - `bio`: General resume biography.
  - `avatarSvg`: Raw SVG string representing the headshot icon.
  - `social`: Key-value pairs for `github`, `instagram`, `linkedin`, `email`, `phone`, and `website`.
  
  *Note: Empty social properties (e.g. leaving `instagram` as `""`) will automatically be hidden.*

- **`skills`**: Contains array `categories` where each category has a `name` and a list of string `items`.

- **`experience`**: Array of job roles. Features `company`, `role`, `period` (monospace pill), `location`, `summary`, and `highlights` (a list of bullet items; only the first 3 will be rendered).

- **`projects`**: Array of engineering work:
  - Set `highlight: true` to float the project to the top of the collection.
  - Set `link: ""` to hide the "LIVE PROJECT" button.
  - Leave `image: ""` or omit it to automatically generate a premium dark-mode placeholder card with a customized code outline and title.

- **`testimonials`**: Colleague recommendations. Renders within the horizontal loop marquee, including initials avatar circles matching the designated `avatarColor` hex.

---

## 🎨 Premium Visual Elements

1. **Chrome / Silver Headlines**: Large display headers carry a brushed metal gradient: `.hero-heading` in `index.css`.
2. **Neon Glow Orbs**: Subtle background gradients blur behind containers to establish a high-end cyber feel.
3. **Sticky Project Stacks**: In the Projects section, cards stack on top of each other dynamically based on scroll offset.
4. **Infinite Marquee**: A CSS-only right-to-left marquee loops indefinitely and pauses when a cursor hovers over any card.
5. **Reduced Motion**: If a user has `prefers-reduced-motion` enabled in their OS, the marquee automatically turns into a standard scrollable horizontal card grid.
