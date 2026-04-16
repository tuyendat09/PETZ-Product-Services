# 🐾 PETZ — Pet Services & E-commerce Platform

PETZ is a full-featured web application for a pet care business, combining an **e-commerce platform** for pet products with a **service booking system** (grooming, spa).
The system is built with a **modern fullstack architecture**, including a scalable backend API and a dynamic frontend application.

---

# 🧩 System Overview

PETZ consists of two main parts:

* **Backend Service** → RESTful API for products, orders, bookings, users, payments
* **Frontend Application** → Customer-facing UI + Admin dashboard

The system is designed with **modular architecture**, enabling scalability and future microservices expansion.

---

# 🚀 Features

## 🛍️ Storefront (Frontend)

* Product listing with category/subcategory filtering
* Sorting, pagination, and sale badge support
* Product detail with image gallery & reviews
* Shopping cart & multi-step checkout
* Voucher system (redeem points → discounts)

---

## ✂️ Booking System

* Browse pet grooming/spa services
* Select date & time slots (conflict-aware)
* Guest & authenticated booking flows
* MoMo payment integration
* Booking lookup via phone/email

---

## 👤 User Portal

* Profile management
* Order history & cancellation
* Booking history & review system
* Voucher wallet (points exchange)

---

## 🛠️ Admin Dashboard

| Module     | Capabilities                          |
| ---------- | ------------------------------------- |
| Dashboard  | Revenue charts, order & booking stats |
| Products   | CRUD, hide/show, stock tracking       |
| Orders     | Filter, update status, refund         |
| Bookings   | Confirm, complete, cancel             |
| Services   | Manage grooming services              |
| Vouchers   | CRUD, visibility toggle               |
| Categories | Category & subcategory management     |
| Users      | User & staff management               |
| Feedback   | Moderate reviews                      |

---

## 🔐 Access Control

| Role    | Permissions                      |
| ------- | -------------------------------- |
| user    | Storefront + user portal         |
| staff   | Orders, bookings, users          |
| manager | All admin features               |
| admin   | Full access + product management |

---

# 🏗️ Backend — Product & Service API

REST API server handling all core business logic.

## ⚙️ Tech Stack (Backend)

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB + Mongoose
* **Authentication:** JWT + Google OAuth (Passport)
* **Sessions:** express-session (MongoDB store)
* **File Storage:** AWS S3 + Google Drive
* **Payment:** MoMo Gateway
* **Email:** Nodemailer
* **Image Processing:** Sharp
* **Scheduler:** node-cron
* **Deployment:** Vercel

---

## 📁 Backend Structure

```
server.js           # Entry point
app.js              # Express setup

config/             # Passport strategies
routes/             # API routes
controller/         # Request handlers
services/           # Business logic
models/             # Mongoose schemas
middleware/         # Auth & upload middleware

momo/               # Payment logic
utils/              # Helpers (cron, email, encrypt, upload)

vercel.json         # Deployment config
```

---

## 🔌 API Overview

All endpoints are prefixed with `/api`

### Authentication

* Email/password + OTP verification
* JWT access & refresh token
* Google OAuth login

### Core Modules

* Products (filter, pagination, reviews)
* Orders (status flow + refund)
* Bookings (service scheduling + payment)
* Users & roles
* Vouchers & loyalty system

---

## 🔄 Authentication Flow

1. Signup → OTP email verification
2. Login → JWT issued
3. Google OAuth → token validation
4. Protected routes → JWT middleware
5. Admin routes → role-based middleware

---

# 🎨 Frontend Application

## ⚙️ Tech Stack (Frontend)

* **Framework:** Next.js 14 (App Router) + TypeScript
* **State Management:** Redux Toolkit + RTK Query
* **Auth:** NextAuth (Credentials + Google OAuth)
* **Styling:** Tailwind CSS + NextUI + Ant Design + MUI
* **Animations:** Framer Motion, GSAP, Lenis
* **Forms:** React Hook Form + Yup
* **i18n:** next-intl (EN / VI)
* **Maps:** Google Maps API

---

## 📁 Frontend Structure

```
src/
├── app/            # App Router pages
├── components/     # UI & feature components
├── libs/           # Redux store & API slices
├── types/          # TypeScript types
├── utils/          # Helpers
├── locales/        # i18n files
└── middleware.ts   # Route protection
```

---

# ⚡ Key Highlights

* Designed **fullstack system with clear separation of concerns**
* Implemented **role-based access control (RBAC)**
* Built **real-world e-commerce + booking flows**
* Integrated **third-party services** (MoMo, S3, Google OAuth)
* Optimized UX with **animations and smooth interactions**
* Structured for **scalability & maintainability**

---

# 🧪 Getting Started

## Backend

```bash
npm install
npm run dev
```

## Frontend

```bash
npm install
npm run dev
```

---

## Environment Variables

### Backend

```env
DATABASE=
JWT_SECRET=
SESSION_SECRET=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

MOMO_PARTNER_CODE=
MAIL_USER=
MAIL_PASS=
```

### Frontend

```env
NEXT_PUBLIC_API_URL=
NEXTAUTH_SECRET=
```

---

# 🌍 Deployment

* Backend: Vercel
* Frontend: Vercel

👉 Live demo: https://petz-zeta.vercel.app

---

# 👨‍💻 Author

**Dat Phan**

---

# 📌 Future Improvements

* Redis caching layer
* Full-text search (Elasticsearch / Meilisearch)
* Microservices architecture split
* Recommendation system (AI-based)

---
