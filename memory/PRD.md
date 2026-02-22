# Baku Yükdaşıma Xidməti - PRD

## Original Problem Statement
Build a moving/transportation service website for "Baku Yükdaşıma Xidməti" (Baku Moving Service) in Azerbaijani language with:
- Modern design with animations
- Red accents (#DC2626), white background
- Sections: Hero, Services, Process, Why Us, Testimonials, FAQ, Contact
- Responsive design (mobile/tablet/desktop)
- Contact form with frontend validation

## User Personas
1. **Homeowners** - Need home moving services
2. **Office managers** - Need office relocation
3. **Individuals** - Need furniture assembly or single truck service

## Core Requirements (Static)
- Fully responsive landing page
- Modern, minimal design with trust-building elements
- Smooth transitions and animations
- Red CTA buttons, clickable phone number
- Oswald + Inter fonts
- Azerbaijani language only
- Contact form saves to database

## What's Been Implemented (2026-02-22)
- ✅ Hero section with stats (10+ years, 5K+ customers, 100% safety)
- ✅ Services section (6 cards: home, office, furniture, labor, truck, packing)
- ✅ Process steps (4 steps: contact, assessment, moving, delivery)
- ✅ Why Us section (6 advantages)
- ✅ Testimonials slider (5 testimonials, Azerbaijani names, no avatars)
- ✅ FAQ accordion (6 questions)
- ✅ Contact form with validation + MongoDB storage
- ✅ Footer with navigation and contact info
- ✅ Mobile floating phone button
- ✅ Sticky glassmorphism header
- ✅ SEO meta tags
- ✅ Smooth scroll navigation

## Prioritized Backlog
### P0 (Critical) - COMPLETED
- All core features implemented

### P1 (High Priority)
- Google Analytics integration
- WhatsApp integration for direct messaging
- Image optimization/lazy loading

### P2 (Medium Priority)
- Multi-language support (RU/EN)
- Admin panel for managing testimonials
- Real email notifications (SendGrid/Resend)
- Service pricing calculator

### P3 (Low Priority)
- Blog section for SEO
- Customer portal for tracking orders
- Online booking calendar

## Tech Stack
- Frontend: React 19, Tailwind CSS, shadcn/ui
- Backend: FastAPI, MongoDB
- Fonts: Oswald (headings), Inter (body)

## Next Tasks
1. Add WhatsApp click-to-chat button
2. Implement Google Analytics
3. Add admin panel for testimonials management
