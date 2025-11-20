# Optical Hub - Premium E-Commerce Website (Next.js)

A modern, high-end e-commerce website for an Optical Hub brand built with Next.js 14, React, and Tailwind CSS. This application features a clean, minimalistic design with premium aesthetics and a strong focus on user experience.

## Features

### Pages

1. **Homepage** (`/`)
   - Hero section with compelling headline and lifestyle imagery
   - Featured categories (Eyeglasses, Sunglasses, Prescription Lenses, Kids)
   - Best-selling products carousel
   - Trust elements and certifications
   - Promotional banners
   - Customer reviews

2. **Product Listing Page (PLP)** (`/products`)
   - Grid layout with clean spacing
   - Advanced filters (Frame shape, gender, color, price, brand, lens type)
   - Sorting options
   - Hover effects (quick view, add to wishlist)
   - Responsive pagination

3. **Product Detail Page (PDP)** (`/products/[id]`)
   - Large product images with zoom capability
   - Multiple image views
   - Color and size variations
   - Lens selection flow (Standard, Prescription, Blue Light, Progressive, Photochromic)
   - Customer reviews and ratings
   - Suggested products carousel
   - Add to cart functionality

4. **About Us Page** (`/about`)
   - Brand story and mission
   - Visual timeline of company milestones
   - Core values
   - Why choose us section with features
   - Trust-building elements

5. **Cart & Checkout** (`/cart`)
   - Clean, minimal checkout flow
   - Order summary
   - Shipping information form
   - Payment details with secure badges
   - Promo code functionality

### Design Elements

- **Color Scheme**: Soft neutrals with emerald/teal accent colors
- **Typography**: Modern sans-serif, clean and readable
- **Visual Style**: Rounded corners, subtle shadows, smooth gradients
- **Interactions**: Smooth animations, hover elevations, micro-interactions
- **Responsive**: Fully responsive layout for desktop, tablet, and mobile

### Components

- Sticky navigation bar with mega menu
- Reusable product card components
- Footer with customer service links
- Trust badges and certification elements
- Notification and tooltip UI elements
- Carousel/slider components

## Technology Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Motion (Framer Motion)** - Animations
- **react-slick** - Carousels
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
EYE-HUB/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   │   ├── page.tsx       # Product listing
│   │   └── [id]/          # Dynamic product detail
│   ├── about/             # About page
│   └── cart/              # Cart page
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── HomePage.tsx       # Homepage content
│   ├── ProductListing.tsx # Product listing page
│   ├── ProductDetail.tsx  # Product detail page
│   ├── ProductCard.tsx    # Product card component
│   ├── AboutUs.tsx        # About page content
│   └── CartCheckout.tsx   # Cart/checkout page
├── styles/                # Global styles
│   └── globals.css        # Tailwind CSS and global styles
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## Navigation

- Click on the logo to return to the homepage
- Use the mega menu to browse product categories
- Navigate to "All Products" to see the product listing
- Click on any product to view details
- Access "About Us" to learn more about the brand
- View cart by clicking the shopping cart icon

## Design Principles

1. **Premium Feel**: High-quality imagery, elegant spacing, and sophisticated color palette
2. **User Experience**: Intuitive navigation, clear CTAs, and smooth interactions
3. **Trust Building**: Certifications, reviews, warranties, and security badges
4. **Accessibility**: Clear typography, sufficient contrast, and keyboard navigation
5. **Performance**: Optimized images and efficient animations

## License

This project is for demonstration purposes.

