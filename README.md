# Alaska Drone Survey

Professional aerial surveying, mapping, and inspection services across Alaska.

## Features

- **Aerial Mapping & Surveying** - High-precision topographic surveys and 3D mapping
- **Infrastructure Inspection** - Safe inspections of bridges, towers, pipelines
- **Real Estate Photography** - Stunning 4K aerial photography and videography
- **Construction Monitoring** - Progress tracking and volumetric analysis
- **Environmental Assessment** - Wildlife monitoring and habitat surveys
- **Emergency Response** - 24/7 rapid deployment capabilities

## Technology Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- React Helmet Async (SEO)
- Lucide React (Icons)

## Live Site

Visit: [https://alaskacg.github.io/alaska-drone-survey/](https://alaskacg.github.io/alaska-drone-survey/)

Domains: alaskadronesurvey.com, akdronesurvey.com

## Local Development

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

The site automatically deploys to GitHub Pages when pushed to the main branch.

## Certifications

- FAA Part 107 Certified Pilots
- $2M Liability Insurance
- OSHA & Arctic Safety Training

## Contact

- Phone: (907) 555-DRONE
- Email: info@alaskadronesurvey.com
- Location: Anchorage, Alaska

---

© 2024 Alaska Drone Survey. All rights reserved.

## Stripe Payment Setup

This site uses Stripe for $10 flat-fee listing payments.

### Configuration

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Create a `.env` file based on `.env.example`:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
   VITE_STRIPE_SECRET_KEY=sk_test_...
   ```

### Features

- **$10 flat fee** for 60-day listings
- One-time payment checkout
- Instant listing activation
- Simple seller onboarding

### Usage

Import and use the `StripeListingCheckout` component in your listing forms:

```tsx
import StripeListingCheckout from './components/StripeListingCheckout';

// In your component:
<StripeListingCheckout 
  clientSecret={paymentIntent.client_secret}
  onSuccess={() => {
    // Handle successful payment
    activateListing();
  }}
/>
```
