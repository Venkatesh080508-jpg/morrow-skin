# Morrow Skin — Skincare E-Commerce Experience

**Morrow Skin** is a premium, approachable skincare e-commerce website concept designed to deliver a clean, intuitive, and responsive online shopping experience. The project focuses on brand identity, product discovery, detailed product information, and a seamless cart-to-checkout journey.

## 🌐 Live Demo

- **Website:** https://morrow-skin.vercel.app/
- **Shop:** https://morrow-skin.vercel.app/shop
- **GitHub Repository:** https://github.com/Venkatesh080508-jpg/morrow-skin

## ✨ Features

- **Responsive Design:** Layouts designed for desktop, tablet, and mobile screens.
- **Homepage:** Brand introduction, featured products, ingredient highlights, skincare philosophy, and customer review sections.
- **Product Catalog:** Browse skincare products with search, filtering, and sorting options.
- **Product Details:** Product images, descriptions, sizes, pricing, ingredient information, and related products.
- **Quick View:** Preview product information without leaving the catalog.
- **Shopping Cart:** Add or remove products, update quantities, and calculate subtotals and totals.
- **Persistent Cart:** Cart contents are retained across page refreshes using browser local storage.
- **Promo Codes:** Supports the demo coupon codes `MORROW10` and `ROUTINE15`.
- **Skincare Routine Quiz:** An interactive experience to explore routine recommendations.
- **Checkout Demo:** Shipping form and mock order confirmation, without real payments.
- **Reusable Components:** Shared UI components and consistent styling throughout the application.

## 🎨 Design System

The visual identity combines a warm, minimal aesthetic with natural skincare-inspired colors.

| Element | Design |
|---|---|
| Primary background | Warm ivory |
| Accent color | Muted sage green |
| Secondary accent | Terracotta |
| Typography | Elegant serif headings with clean sans-serif body text |
| Visual direction | Minimal, calm, natural, and premium |

## 🛠️ Technology Stack

- **Frontend:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing:** React Router
- **Icons:** Lucide React
- **Styling:** CSS, custom design tokens, and responsive layouts
- **State Management:** React Context API
- **Cart Persistence:** Browser local storage
- **Version Control:** Git and GitHub
- **Deployment:** Vercel

## 🚀 Run Locally

### Prerequisites

- Node.js and npm installed
- Git installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Venkatesh080508-jpg/morrow-skin.git
   ```

2. Navigate into the project directory:

   ```bash
   cd morrow-skin
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

### Production Build

To generate a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```text
morrow-skin/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── cart/
│   │   ├── common/
│   │   ├── home/
│   │   ├── layout/
│   │   └── product/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── vercel.json
└── vite.config.ts
```

## 🧪 Demo Notes

- Morrow Skin is a fictional brand created for a UI/UX design project.
- Product catalog entries and customer reviews are demonstration content, not claims about real products or verified customers.
- Checkout is a front-end demonstration. No real payments or orders are processed.
- Coupon codes are for demonstration purposes.

## 🎯 Project Objective

The objective of this project is to demonstrate practical product design and frontend implementation skills through a cohesive e-commerce experience, with emphasis on visual consistency, responsive design, usability, and the complete product discovery-to-cart flow.

---

**Created by:** Venkatesh Gaddam

**Project:** ShadowFox UI/UX Design Internship — Intermediate Task
