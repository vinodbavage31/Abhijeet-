<div align="center">

# Abhijeet Jadhav

### AI/ML Engineer & Full-Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://abhijeetj.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhijeetsjadhav/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AbhijeetJadhav72)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jadhavabhijeet4404@gmail.com)

[![Visitors](https://api.visitorbadge.io/api/visitors?path=AbhijeetJadhav72%2Fportfolio&countColor=%2300C7B7&style=for-the-badge)](https://visitorbadge.io/status?path=AbhijeetJadhav72%2Fportfolio)
[![Stars](https://img.shields.io/github/stars/AbhijeetJadhav72?style=for-the-badge&logo=github&color=yellow)](https://github.com/AbhijeetJadhav72)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

**A premium, production-ready portfolio website showcasing AI/ML projects, skills, and experience.**

[View Live Site](https://abhijeetj.vercel.app/) • [Report Bug](https://github.com/AbhijeetJadhav72/portfolio/issues) • [Request Feature](https://github.com/AbhijeetJadhav72/portfolio/issues)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contact](#contact)

---

## About the Project

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue?style=for-the-badge)

</div>

This portfolio website represents the cutting edge of modern web development, combining stunning visual design with exceptional performance. Built to showcase AI/ML projects and professional experience in the most engaging way possible.

### Why This Portfolio Stands Out

```diff
+ Premium glassmorphism design with smooth animations
+ Lightning-fast performance with Next.js 14
+ Fully responsive across all devices
+ SEO optimized for maximum visibility
+ Dark/Light mode for user preference
+ Interactive case studies for each project
```

---

## Tech Stack

<div align="center">

### Core Technologies

[![Next.js](https://img.shields.io/badge/Next.js_14+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React_18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

### Styling & UI

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

### Tools & Deployment

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

</div>

---

## Features

<table>
<tr>
<td width="50%">

### Design & UI
- Premium glassmorphism effects
- Smooth scroll animations
- Sticky navigation with active states
- Interactive hover effects
- Modern card layouts

</td>
<td width="50%">

### Technical
- Server-side rendering (SSR)
- Static site generation (SSG)
- Image optimization
- Code splitting
- SEO optimization

</td>
</tr>
<tr>
<td width="50%">

### Functionality
- Dark/Light theme toggle
- Dynamic project routing
- Contact form integration
- Responsive navigation
- Social media integration

</td>
<td width="50%">

### Performance
- Fast page loads
- Optimized images
- Lazy loading
- Minimal bundle size
- 95+ Lighthouse score

</td>
</tr>
</table>

---

## Project Structure

```
portfolio/
│
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── projects/
│       └── [id]/
│           ├── page.tsx        # Dynamic project pages
│           └── not-found.tsx   # 404 handler
│
├── components/
│   ├── hero.tsx                # Hero section
│   ├── skills.tsx              # Skills showcase
│   ├── experience.tsx          # Timeline
│   ├── projects.tsx            # Projects grid
│   ├── project-case-study.tsx  # Case study template
│   ├── education.tsx           # Education section
│   ├── contact.tsx             # Contact form
│   ├── footer.tsx              # Footer
│   ├── navbar.tsx              # Navigation
│   ├── theme-provider.tsx      # Theme context
│   └── ui/                     # Reusable components
│
├── lib/
│   ├── utils.ts                # Helper functions
│   └── projects-data.ts        # Project data
│
├── public/                     # Static assets
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

---

## Getting Started

### Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-v18.0+-339933?style=flat-square&logo=node.js)
![npm](https://img.shields.io/badge/npm-v9.0+-CB3837?style=flat-square&logo=npm)

### Installation

<details open>
<summary><b>Click to expand installation steps</b></summary>

**1. Clone the repository**

```bash
git clone https://github.com/AbhijeetJadhav72/portfolio.git
cd portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Run development server**

```bash
npm run dev
```

**4. Open in browser**

Navigate to [http://localhost:3000](http://localhost:3000)

</details>

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Customization

<div align="center">

### Make It Your Own

</div>

| Section | File | Description |
|---------|------|-------------|
| **Personal Info** | `components/hero.tsx` | Update name, title, bio |
| **Skills** | `components/skills.tsx` | Add/remove skills |
| **Experience** | `components/experience.tsx` | Update work history |
| **Projects** | `lib/projects-data.ts` | Add project details |
| **Education** | `components/education.tsx` | Update academic info |
| **Theme Colors** | `app/globals.css` | Customize color scheme |
| **Metadata** | `app/layout.tsx` | SEO and meta tags |

### Theme Customization

Edit CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --accent: 240 4.8% 95.9%;
  /* Add your custom colors */
}
```

---

## Deployment

<div align="center">

### Deploy Anywhere

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AbhijeetJadhav72/portfolio)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AbhijeetJadhav72/portfolio)

</div>

<details>
<summary><b>Deployment Options</b></summary>

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### AWS Amplify

Connect your GitHub repository and deploy automatically

</details>

---

## Performance

<div align="center">

![Performance](https://img.shields.io/badge/Performance-95+-success?style=for-the-badge)
![Accessibility](https://img.shields.io/badge/Accessibility-100-success?style=for-the-badge)
![Best Practices](https://img.shields.io/badge/Best_Practices-95+-success?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-100-success?style=for-the-badge)

</div>

### Optimization Features

- Next.js Image Optimization
- Code Splitting & Lazy Loading
- Server-Side Rendering
- Static Site Generation
- Minified CSS & JS
- Compressed Assets
- CDN Distribution

### Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | < 768px | Single column |
| Tablet | 768px - 1024px | Two columns |
| Desktop | > 1024px | Full layout |



</div>

---

## Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

<div align="center">

Distributed under the MIT License. See `LICENSE` for more information.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## Contact

<div align="center">

### Let's Connect

[![Email](https://img.shields.io/badge/Email-jadhavabhijeet4404@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jadhavabhijeet4404@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-abhijeetsjadhav-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhijeetsjadhav/)
[![GitHub](https://img.shields.io/badge/GitHub-AbhijeetJadhav72-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AbhijeetJadhav72)
[![Portfolio](https://img.shields.io/badge/Portfolio-abhijeetj.vercel.app-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://abhijeetj.vercel.app/)

---

### Show Your Support

If you found this project helpful, please consider giving it a star!

[![GitHub Stars](https://img.shields.io/github/stars/AbhijeetJadhav72?style=social)](https://github.com/AbhijeetJadhav72)

---

**Built with passion using Next.js and Framer Motion**

![Made with Love](https://img.shields.io/badge/Made%20with-Love-ff69b4?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open-Source-green?style=for-the-badge)

</div>
