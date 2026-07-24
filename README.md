# Aakash's Developer Portfolio

## Tech Stack Badges

![Static Badge](https://img.shields.io/badge/TypeScript-v5-3178C6?logo=typescript&logoColor=white&color=3178C6)
![Static Badge](https://img.shields.io/badge/Next.js-v16.0-000000?logo=nextdotjs&logoColor=white&color=000000)
![Static Badge](https://img.shields.io/badge/React-v19.2-61DAFB?logo=react&logoColor=black&color=61DAFB)
![Static Badge](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white&color=06B6D4)
![Static Badge](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white&color=0055FF)
![Static Badge](https://img.shields.io/badge/Sanity_CMS-F03E2F?logo=sanity&logoColor=white&color=F03E2F)
![Static Badge](https://img.shields.io/badge/Resend-000000?logo=resend&logoColor=white&color=000000)
![Static Badge](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&color=000000)

---
Most developer portfolios are still static HTML pages or over-engineered SPAs nobody asked for. This one is built differently.

The stack here treats the portfolio as a *real* production app — CMS-driven content, serverless email, WebGL landing animations, and the React Compiler running under the hood.

**The architecture in 3 lines:**
→ Next.js 16 (App Router) as the shell, with Sanity CMS powering all content via live GROQ queries.
→ Framer Motion handles page transitions with blur-in/blur-out animations across 5 paginated sections.
→ Resend + React Email delivers a fully server-side contact form — no third-party form services, no client-side hacks.

---

🆚 **The Old Way vs. The New Way**

| The Old Way | This Portfolio |
|---|---|
| Hardcoded HTML/JSX for every section | Sanity CMS — update content without touching code |
| `mailto:` links or Google Forms for contact | Resend API with typed React Email templates |
| CSS keyframes for animation | Framer Motion with declarative blur transitions |
| Static landing with a hero image | Unicorn Studio WebGL scene — interactive 3D |
| ESLint + Prettier setup overhead | Biome — one tool for lint AND format |
| React 18 with manual memoization | React 19 + React Compiler — auto-optimization |

---

🛠 **What makes this interesting technically:**

- 🧠 **React Compiler** is enabled via `babel-plugin-react-compiler` — meaning the compiler is automatically memoizing components. No more manual `useMemo` / `useCallback` everywhere.
- 📦 **Sanity Studio is embedded** directly in the app at `/studio` — the CMS lives inside the Next.js project itself.
- 📧 **`/api/send-mail`** is a true Next.js Route Handler — no Express, no external backend. Resend fires the email server-side with a React component as the template.
- 🎨 **Tailwind v4** — the new PostCSS-first config, no `tailwind.config.js` needed.
- ⚡ **pnpm** for fast, disk-efficient installs. **Biome** as a single-binary linter + formatter replacing the ESLint/Prettier combo.

---

The whole thing is live at 👉 https://custom-portfolio-drab.vercel.app
Source: https://github.com/Vorpalv2/Portfolio

#NextJS #React #SanityCMS #WebDevelopment #TypeScript #PortfolioDesign #Vercel #FramerMotion #OpenSource
