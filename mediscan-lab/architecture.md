# architecture.md — Mediscan Lab Redesign

## 1) Overview

A client-side rendered React application built with Vite. It features a modern, component-based architecture focusing on visual fidelity, smooth transitions, and responsive layout.

## 2) Architecture Drivers

- **Performance**: Instant load times, smooth 60fps animations.
- **Reliability**: Semantic HTML, accessible components.
- **Aesthetic**: High control over styling (Vanilla CSS / CSS Modules) to achieve "pixel perfect" "elite" look.

## 3) Tech Stack

### Frontend

- **React**: Component reusability and state management.
- **Vite**: Fast build tool and dev server.
- **CSS Modules / Vanilla CSS**: Scoped styling with full control over animations and variables.
- **Framer Motion** (optional, if needed for complex animations): For "immersive" feel.

### Infra / DevOps

- **Hosting**: Netlify / Vercel (assumed for static site).
- **CI/CD**: Manual deployment for now.

## 4) Components & Responsibilities

- **Layout**: Main wrapper with Header (Sticky/Glassmorphism) and Footer.
- **Hero**: High-impact visual entry point.
- **ServiceCard**: Reusable component for displaying tests.
- **BookingForm**: Modal or section for user capture.

## 5) Primary Data Flow

1. User interaction (scroll/click).
2. React state update (e.g., modal open, filter change).
3. UI re-render with animation.

## 6) Security & Privacy

- No real PII handling in this frontend prototype.
- standard HTTPS assumed for deployment.

## 7) Reliability & Observability

- Console error logging.

## 8) Testing & Release

- **Manual Verification**: Cross-browser checking (Chrome/Edge/Firefox).
- **Mobile Responsiveness**: DevTools simulation.
