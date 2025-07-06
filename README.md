# VxCode AI - Modern IDE Website

A modern Next.js website for VxCode AI, featuring AI-powered IDE capabilities and developer-focused design.

## Features

- **Modern Design**: Clean, professional UI for VxCode AI
- **Responsive Layout**: Mobile-first design that works on all devices
- **AI-Focused Content**: Showcases AI-powered development tools and features
- **Developer Testimonials**: Real feedback from the developer community
- **Privacy & Security**: Emphasis on data protection and local-first approach

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Component-based UI library

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles and Tailwind configuration
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   ├── terms/page.tsx    # Terms of Service page
│   ├── privacy/page.tsx  # Privacy Policy page
│   └── cookies/page.tsx  # Cookie Policy page
└── components/
    ├── Hero.tsx          # Hero section with navigation
    ├── Features.tsx      # Feature showcase
    ├── AgentSection.tsx  # AI agent collaboration
    ├── CueSection.tsx    # Smart autocomplete demo
    ├── PrivacySection.tsx # Privacy and security
    ├── Testimonials.tsx  # Developer testimonials
    ├── DownloadSection.tsx # Download CTA
    └── Footer.tsx        # Site footer
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Key Components

### Hero Section
- Gradient background with navigation
- Compelling headline and call-to-action
- Code editor preview with AI features

### Features Section
- Grid layout showcasing AI capabilities
- Hover effects and modern card design
- Focus on developer productivity

### Agent Collaboration
- Three-column layout for @Agent, #Tool, #Context
- Interactive code examples
- Visual representation of AI workflow

### Cue Section
- Live code editor simulation
- Tab autocomplete demonstration
- Dark theme with syntax highlighting

### Privacy & Security
- Three key pillars of data protection
- Icon-based visual design
- Trust-building content

### Testimonials
- Real developer feedback
- Avatar and name display
- Grid layout for easy scanning

### Download Section
- Prominent call-to-action for free download
- Statistics and social proof
- Clear messaging about free access

### Legal Pages
- **Terms of Service** (`/terms`): Comprehensive terms covering service usage, user rights, and legal obligations
- **Privacy Policy** (`/privacy`): Detailed privacy practices with local-first approach and data protection
- **Cookie Policy** (`/cookies`): Complete cookie usage information with preference management

## Development

- The project uses TypeScript for type safety
- Tailwind CSS for responsive design
- Custom animations and gradients
- SEO-optimized metadata

## Deployment

This is a Next.js project that can be deployed on platforms like:
- Vercel (recommended)
- Netlify
- AWS
- Digital Ocean

## License

This project showcases modern web development practices for an AI-powered IDE platform.
