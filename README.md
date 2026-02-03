# Abhijeet Jadhav - Portfolio Website

A premium, production-ready portfolio website showcasing AI/ML projects, skills, and experience. Built with modern web technologies for optimal performance and user experience.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **UI Components:** Shadcn UI
- **Theme:** Dark/Light mode with next-themes

## ✨ Features

- 🎨 **Premium Design** - Modern, aesthetic, minimal with glassmorphism effects
- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Performance Optimized** - Fast load times and smooth animations
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- 📊 **Dynamic Routing** - Individual case study pages for projects
- 🎯 **Sticky Navigation** - Active section highlighting
- 📧 **Contact Form** - Interactive contact section

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and utilities
│   └── projects/
│       └── [id]/
│           ├── page.tsx    # Dynamic project case study pages
│           └── not-found.tsx
├── components/
│   ├── hero.tsx            # Hero section with profile
│   ├── skills.tsx          # Animated skills cards
│   ├── experience.tsx      # Timeline experience section
│   ├── projects.tsx        # Projects grid
│   ├── project-case-study.tsx  # Case study template
│   ├── education.tsx       # Education section
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer with links
│   ├── navbar.tsx          # Sticky navigation
│   ├── theme-provider.tsx  # Theme context
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── utils.ts            # Utility functions
│   └── projects-data.ts    # Project data and types
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Installation

1. **Clone or download the project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Sections

### Hero Section
- Animated profile image with glow effect
- Career objective and headline
- CTA buttons for Resume, GitHub, LinkedIn, and Email
- Smooth scroll indicator

### Skills Section
- Animated skill cards with hover effects
- Categorized by Technical Skills, Libraries, and Tools
- Stats counters

### Experience Section
- Vertical timeline with animated cards
- Current and past positions
- Detailed responsibilities

### Projects Section
- Premium project cards with hover effects
- Dynamic routing to individual case study pages
- Each case study includes:
  - Problem statement
  - Approach & methodology
  - Results & impact
  - Key learnings
  - Architecture diagram placeholder
  - GitHub links

### Education Section
- Academic credentials with highlights
- Key coursework and achievements

### Contact Section
- Contact information cards
- Interactive contact form
- Social media links
- Availability status

## 🎨 Customization

### Colors & Theme
Edit `app/globals.css` to customize the color scheme:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* ... other variables */
}
```

### Content
- **Personal Info:** Update in `components/hero.tsx`
- **Skills:** Modify `components/skills.tsx`
- **Experience:** Edit `components/experience.tsx`
- **Projects:** Update `lib/projects-data.ts`
- **Education:** Modify `components/education.tsx`

### Profile Image
Replace the placeholder in `components/hero.tsx` with your actual image:
```tsx
<Image
  src="/your-image.jpg"
  alt="Abhijeet Jadhav"
  fill
  className="object-cover"
/>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify:** `npm run build` → Deploy `out` folder
- **AWS Amplify:** Connect GitHub repo
- **Docker:** Create Dockerfile with Node.js

## 📊 Performance

- ⚡ Fast load times with Next.js optimization
- 🖼️ Image optimization with Next.js Image component
- 📦 Code splitting and lazy loading
- 🎯 SEO optimized with metadata

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

- Next.js 14+
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn UI
- Lucide Icons
- next-themes

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Contact

- **Email:** jadhavabhijeet4404@gmail.com
- **LinkedIn:** [abhijeetsjadhav](https://www.linkedin.com/in/abhijeetsjadhav/)
- **GitHub:** [AbhijeetJadhav72](https://github.com/AbhijeetJadhav72)

---

Built with ❤️ using Next.js and Framer Motion
