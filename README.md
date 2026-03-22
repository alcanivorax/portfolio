# Roshan Singh — Portfolio

A minimal, modern developer portfolio built with **Next.js**, **TypeScript**, and **TailwindCSS**.  
Designed with a focus on clarity, subtle design, and developer-first aesthetics — inspired by Geist and shadcn/ui.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js (App Router) | Framework |
| TypeScript | Type safety |
| TailwindCSS v4 | Styling |
| shadcn/ui | UI primitives |
| Framer Motion | Animations |

---

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with ThemeProvider
├── page.tsx            # Home page
components/
├── layout/
│   ├── sidebar.tsx     # Fixed left sidebar with nav
│   └── theme-toggle.tsx
├── sections/
│   ├── hero.tsx
│   ├── projects.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── footer.tsx
├── ui/
│   └── background-effects.tsx  # Orbital background system
lib/
styles/
└── globals.css         # Theme tokens + background utilities
```

---

## 🎨 Background System

The background is built as a layered SVG orbital system — concentric rings with depth hierarchy, subtle planet nodes, and slow rotation animations. It lives entirely on the right 50% of the screen and fades out toward content using a CSS mask gradient.

- **Foreground ring** — strongest opacity, fastest rotation
- **Mid rings** — medium weight, varied sizes and directions  
- **Background rings** — near-invisible, create depth
- **Mask gradient** — fades left so content area stays clean

Adapts automatically to light and dark mode via CSS custom properties.

---

## 🌗 Theming

Uses `next-themes` with `attribute="class"` — the `dark` class is applied to `<html>`.  
All theme tokens are defined as CSS custom properties in `globals.css` under `:root` and `:root.dark`.

---

## 📄 License

MIT
