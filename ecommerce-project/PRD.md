# Product Requirements Document — FizzHub

## 1. Executive Summary

**Product:** FizzHub — an e-commerce platform specializing in craft and premium soda drinks.
**Goal:** Allow customers to browse, learn about, and purchase a curated selection of sodas with a fun, interactive experience.
**Brand Colors:** Black (`#0a0a0a`) and Magenta (`#d946ef`).

---

## 2. Business Model

### 2.1 Revenue Streams

| Stream | Description |
|---|---|
| **Direct Sales** | Per-bottle and multi-pack sales with margin markup (30–50%). |
| **Subscription Boxes** | Monthly "Soda Drop" boxes — curated 6-packs at a fixed monthly price. |
| **Bundling / Mix Packs** | Build-your-own 4-pack, 6-pack, 12-pack at a slight discount. |
| **Promotional Placements** | Brands pay for featured placement on the "Discovery" carousel. |
| **Shipping Fees** | Flat-rate or free-above-threshold ($30+) shipping. |

### 2.2 Customer Segments

- **Soda Enthusiasts** — collectors and fans of unique, small-batch sodas.
- **Health-Conscious Buyers** — low-sugar, natural-ingredient, or functional sodas.
- **Gift Shoppers** — curated boxes for birthdays, holidays, corporate gifting.
- **Subscribers** — recurring revenue through monthly soda subscriptions.

### 2.3 Key Metrics (North Stars)

- Monthly Recurring Revenue (MRR) from subscriptions
- Average Order Value (AOV)
- Customer Acquisition Cost (CAC) / Lifetime Value (LTV) ratio
- Conversion Rate (CVR)
- Monthly Active Users (MAU)

---

## 3. User Stories & Features

### 3.1 Landing Page (Interactive)

| ID | Story | Priority |
|---|---|---|
| LP-1 | As a visitor, I want to see a hero section with a animated soda-can that rotates / pours on scroll so the page feels alive. | P0 |
| LP-2 | As a visitor, I want a "flavor mood" selector where I click bubbles (Sweet, Tart, Spicy, Fruity) and the soda grid filters in real time with animated transitions. | P0 |
| LP-3 | As a visitor, I want an interactive carbonation slider — dragging it changes the displayed soda suggestions (Flat → Bubbly → Explosive). | P0 |
| LP-4 | As a visitor, I want particles / fizz bubbles floating in the hero background to reinforce the brand. | P1 |
| LP-5 | As a visitor, I want a countdown timer to the next "Soda Drop" subscription box deadline. | P1 |

### 3.2 Product Catalog & Search

| ID | Story | Priority |
|---|---|---|
| PC-1 | As a shopper, I can browse sodas by brand, flavor profile, sugar level, and price. | P0 |
| PC-2 | As a shopper, I can search by name or keyword with autocomplete suggestions. | P0 |
| PC-3 | As a shopper, I can filter by dietary tags (Sugar-Free, Organic, Caffeinated, Keto). | P0 |
| PC-4 | As a shopper, I can sort by popularity, price, rating, and newest. | P1 |
| PC-5 | As a shopper, I can view a quick-look modal from the grid without leaving the page. | P1 |

### 3.3 Product Detail Page (PDP)

| ID | Story | Priority |
|---|---|---|
| PD-1 | As a shopper, I see high-res product images, description, ingredients, nutrition facts, and reviews. | P0 |
| PD-2 | As a shopper, I can select quantity and add to cart. | P0 |
| PD-3 | As a shopper, I can see related / "you might also like" sodas. | P1 |

### 3.4 Cart & Checkout

| ID | Story | Priority |
|---|---|---|
| CC-1 | As a shopper, I can view my cart with line-item quantities, thumbnails, and prices. | P0 |
| CC-2 | As a shopper, I can apply a promo code. | P0 |
| CC-3 | As a shopper, I can check out as a guest or create an account. | P0 |
| CC-4 | As a shopper, I can pay via credit card, PayPal, or digital wallet. | P0 |
| CC-5 | As a shopper, I see real-time shipping cost before placing the order. | P1 |

### 3.5 User Account & Subscriptions

| ID | Story | Priority |
|---|---|---|
| UA-1 | As a registered user, I can view my order history and reorder. | P0 |
| UA-2 | As a subscriber, I can manage my subscription (pause, skip, cancel, change flavors). | P0 |
| UA-3 | As a subscriber, I can see my next "Soda Drop" date and what's in it. | P1 |
| UA-4 | As a user, I can save multiple shipping addresses. | P1 |

### 3.6 Admin Panel

| ID | Story | Priority |
|---|---|---|
| AD-1 | As an admin, I can manage products (CRUD) with image uploads and inventory tracking. | P0 |
| AD-2 | As an admin, I can view orders and update their status. | P0 |
| AD-3 | As an admin, I can manage subscriptions and handle cancellations. | P0 |
| AD-4 | As an admin, I can view sales analytics dashboard (revenue, AOV, top products). | P1 |
| AD-5 | As an admin, I can create promo codes with usage limits and date ranges. | P1 |

---

## 4. Visual Design & Branding

### 4.1 Color Palette

| Role | Hex | Usage |
|---|---|---|
| **Background** | `#0a0a0a` (Black) | Page backgrounds, cards |
| **Primary Accent** | `#d946ef` (Magenta) | CTAs, active states, highlights |
| **Secondary Accent** | `#f5d0fe` (Light Magenta) | Hover states, glow effects |
| **Text Primary** | `#fafafa` (White) | Body copy on dark surfaces |
| **Text Secondary** | `#a1a1aa` (Gray-400) | Subtitles, meta text |
| **Success** | `#22c55e` (Green) | In-stock, checkmarks |

### 4.2 Typography

- **Headings:** Inter Bold (or Poppins) — uppercase, wide tracking for brand voice.
- **Body:** Inter Regular — clean, highly legible at small sizes.
- **Accent / Display:** Playfair Display for hero taglines (contrast with modern sans).

### 4.3 UI Components & Patterns

- **Cards** — Dark glass-morphism (`rgba(255,255,255,0.05)` backdrop) with magenta border on hover.
- **Buttons** — Magenta filled primary; outlined secondary with magenta border.
- **Fizz Particles** — Floating CSS/Canvas bubbles in the landing page hero.
- **Interactive Filters** — Pill-shaped toggle groups with spring animations (Framer Motion).
- **Icons** — Lucide icon set for consistency.

---

## 5. Technical Requirements

### 5.1 Stack Recommendations

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | Next.js 14 (App Router) + TypeScript | SSR/SSG, file-based routing, React ecosystem |
| **Styling** | Tailwind CSS | Rapid dark-theme prototyping, utility-first |
| **Animations** | Framer Motion | Declarative gestures, spring physics, scroll animations |
| **State Mgmt** | Zustand (cart, filters) + React Query (server state) | Lightweight, performant |
| **Backend / API** | Next.js API Routes or Hono | Co-located API with frontend |
| **Database** | PostgreSQL (via Prisma or Drizzle) | Relational — products, orders, users, subs |
| **Auth** | NextAuth.js v5 | OAuth, credentials, session management |
| **Payments** | Stripe | Subscriptions, payment intents, webhooks |
| **File Storage** | Uploadthing or Cloudinary | Image uploads for products |
| **Deployment** | Vercel | Native Next.js support, edge functions |

### 5.2 Interactive Landing Page — Technical Spec

- **Hero Section:**
  - 3D soda-can model (Three.js / react-three-fiber) or a CSS 3D-rendered can that rotates on mousemove.
  - Scroll-triggered "fizz reveal" animation — as user scrolls, soda level in the can decreases, revealing flavor info.
- **Flavor Mood Selector:**
  - Grid of circular colored bubbles (Sweet=Pink, Tart=Yellow, Spicy=Red, Fruity=Purple).
  - On click, pills animate expanding; product grid filters via CSS transitions (opacity + scale).
- **Carbonation Slider:**
  - Custom-styled range input. Moving the slider updates a `useMemo` / `useDeferredValue` filter over the soda dataset.
  - Visual feedback: number of fizz particles increases with slider value.
- **Fizz Particles Background:**
  - Canvas-based particle system (or `react-tsparticles`) — small white/magenta circles that rise slowly.
- **Countdown Timer:**
  - Uses `date-fns` `differenceInDays/hours/minutes` with a `setInterval` tick.

### 5.3 Performance Targets

- Lighthouse score ≥ 90 for Performance, Accessibility, SEO.
- First Contentful Paint (FCP) < 1.5 s.
- Largest Contentful Paint (LCP) < 2.5 s.
- All interactive elements respond within 100 ms.

---

## 6. Database Schema (Core Entities)

```
User       — id, name, email, hashedPassword, role, createdAt
Product    — id, name, slug, brand, description, ingredients, nutrition,
             flavorProfile, sugarLevel, carbonationLevel, price, stock,
             imageUrl, tags[], isActive
Review     — id, productId, userId, rating, body, createdAt
Order      — id, userId, status, total, shippingAddress, paymentIntentId, createdAt
OrderItem  — id, orderId, productId, quantity, unitPrice
Subscription — id, userId, status, plan, nextBillingDate, preferences[], createdAt
PromoCode  — id, code, discountType, discountValue, maxUses, expiresAt
```

---

## 7. Milestones & Timeline

| Phase | Scope | Duration |
|---|---|---|
| **M1 — Foundation** | Next.js scaffold, Tailwind dark theme, landing page hero + particles, product grid | Week 1 |
| **M2 — Catalog & Cart** | PDP, search/filter, cart (Zustand), Stripe checkout | Week 2 |
| **M3 — Auth & Orders** | NextAuth, user accounts, order history, admin CRUD | Week 3 |
| **M4 — Subscriptions** | Subscription model, recurring payments, "Soda Drop" dashboard | Week 4 |
| **M5 — Polish & Launch** | Analytics, promo codes, performance tuning, production deploy | Week 5 |

---

## 8. Open Questions / Future Considerations

- Should we support a "Soda of the Month" limited-edition drop mechanic (e.g., 500 units only)?
- Localization: multi-currency / multi-language for future expansion?
- Reviews: moderation workflow or auto-publish?
- Loyalty program: points per purchase redeemable on future orders?
- Carbon offset at checkout for shipping?
