# 🛒 E-commerce Website (Inspired by DigiKala)

A modern e-commerce website inspired by [DigiKala](https://www.digikala.com/), built with **Next.js** and **TailwindCSS** for speed, SEO optimization, and a clean UI/UX.

---

## 🚀 Features

* 📱 **Fully responsive** (mobile, tablet, desktop)
* 🔎 **Product search & filtering**
* 🛍 **Shopping cart & order management**
* ❤️ **Wishlist functionality**
* 👤 **User authentication (login/signup)**
* 🌙 **Dark/Light mode**
* ⚡ **SEO-friendly** with Server-side Rendering (SSR)

---

## 🛠 Tech Stack

* [Next.js](https://nextjs.org/) – React framework for SSR and SSG
* [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework
* [TanStack Query (React Query)](https://tanstack.com/query) – Data fetching & caching
* [Axios](https://axios-http.com/) – HTTP client
* [NextAuth.js](https://next-auth.js.org/) – Authentication

---

## 📂 Project Structure

```bash
.
├── components        # Reusable UI components
├── pages             # Next.js pages (each file = route)
├── public            # Static assets (images, icons, etc.)
├── styles            # Tailwind and global styles
├── utils             # Helper functions & API logic
├── lib               # Configs, adapters, and shared modules
└── package.json      # Dependencies and scripts
```

---

## ⚙️ Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/username/digikala-clone.git
cd digikala-clone
```

### 2) Install dependencies

```bash
npm install
# or
yarn install
```

### 3) Configure environment variables

Create a `.env.local` file in the project root:

```env
# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# API
API_BASE_URL=https://api.example.com

# Auth (if using NextAuth)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace_with_a_strong_secret
```

### 4) Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧰 Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Run production build
npm run lint    # Lint the project
```

---

## 🖼 Preview

*Add screenshots or GIFs of your project here*

---

## 🌐 Live Demo

*Add your Vercel/Netlify deployment link here*

---

## 🧩 Key Modules

* **Product listing & details**: category pages, filters, sorting, pagination
* **Cart & checkout**: add/remove items, quantity update, order summary
* **User account**: profile, addresses, orders, wishlist
* **Search**: debounced search with server-side or client-side filtering
* **Theme**: dark/light with system preference fallback

---

## 🪄 Coding Standards

* Type-safe components (if using TypeScript)
* Accessible UI (aria labels, keyboard navigation)
* Reusable utility functions and hooks
* SEO: meta tags, Open Graph, structured data where relevant

---

## 👨‍💻 Author

**Hossein Nekoei** – [GitHub](https://github.com/username)

---

## 📜 License

This project is for educational and portfolio purposes only and has no affiliation with DigiKala.
