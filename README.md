# 🎬 Super App

A modern entertainment dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Zustand**. The application allows users to register, select entertainment categories, view a personalized dashboard, and browse movies based on their interests.

---

## 🚀 Live Demo

**Live URL:** *https://super-app-teal-eight.vercel.app/*

**GitHub Repository:** *https://github.com/Devendradev44/Super-App*

---

## 📌 Features

### Authentication & Registration

* User registration form
* Input validation for:

  * Name
  * Username
  * Email
  * Mobile Number
* Registration data stored using Zustand Persist

### Category Selection

* Multiple entertainment categories
* Minimum of **3 categories** required before proceeding
* Selected categories persisted in browser storage

### Dashboard

* Personalized User Profile
* Live Weather Widget
* Live News Widget (updates every **2 seconds**)
* Notes Widget with browser persistence
* Countdown Timer

  * Start
  * Pause
  * Resume
  * Reset

### Movies

* Fetches movies dynamically using selected categories
* Responsive movie cards
* Hover animations
* Movie details modal

---

## 🛠 Tech Stack

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Zustand
* Axios
* OpenWeather API
* NewsAPI
* OMDb API

---

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── categories/
│   ├── dashboard/
│   ├── movies/
│   └── page.tsx
│
├── components/
│   ├── dashboard/
│   ├── categories/
│   ├── forms/
│   ├── movies/
│   └── common/
│
├── services/
├── store/
├── types/
├── lib/
└── utils/
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd super-app
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
NEXT_PUBLIC_NEWS_API_KEY=YOUR_NEWS_API_KEY
NEXT_PUBLIC_OMDB_API_KEY=YOUR_OMDB_API_KEY
```

Run the development server

```bash
npm run dev
```

Open

```text
http://localhost:3000
```

---

## 🌐 APIs Used

### Weather

* OpenWeather API

### News

* NewsAPI

### Movies

* OMDb API

---

## 📱 Responsive Design

The application is responsive across:

* Mobile
* Tablet
* Desktop

---

## ✨ Assignment Requirements Covered

* Registration Form
* Form Validation
* Category Selection
* Minimum 3 Categories Validation
* User Profile
* Weather API Integration
* News API Integration
* Countdown Timer
* Persistent Notes
* Movie Listing
* Movie Details Modal
* State Management using Zustand
* API Integration
* Responsive Design
* Tailwind CSS
* Clean Component Architecture

---

## 🚀 Performance

* Optimized using Next.js
* Reusable React Components
* Zustand Persist for lightweight state management
* API abstraction using Axios services
* Type-safe development with TypeScript

---

## 📸 Screenshots

*Add screenshots of:*

* Registration
* Categories
* Dashboard
* Movies

---

## 👨‍💻 Author

**Devendra Pujari**

GitHub: *https://github.com/Devendradev44/*

LinkedIn: *https://www.linkedin.com/in/pujari-devendra/*

---

## 📄 License

This project was developed as part of a Frontend Developer assessment.
