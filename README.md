Here's a well-structured `README.md` file based on your documentation:

---

# 📝 Blog Platform

A responsive, filterable blog platform built with **React** and powered by a **Strapi** backend.

> 🚀 Live fetches from: `http://localhost:1337`

---

## 🔍 Features

### 1. **Blog Listing**

* Responsive grid layout (2 columns on desktop, 1 column on mobile)
* Each blog card includes:

  * Featured image
  * Category tag
  * Price (if available)
  * Title
  * Content excerpt

### 2. **Search Functionality**

* Real-time full-text search on blog titles
* Instant filtering as you type

### 3. **Category Filtering**

* Filter by category (e.g., Food, Entertainment, Car)
* Toggle individual categories on/off

### 4. **Price Filtering**

* Filter by minimum and maximum price
* Toggle price range filter UI

### 5. **Active Filters Display**

* View all applied filters
* Remove individual filters with a single click

### 6. **Hero Section**

* Stylish gradient background
* Key platform statistics
* Main call-to-action area

---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://your-repo-url.com
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## 📦 Requirements

* Node.js `v14+`
* React `v18+`
* Strapi backend running at `http://localhost:1337`

---

## 🗂️ Data Structure

Expected response from Strapi:

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Blog Title",
        "content": "Blog content...",
        "excerpt": "Short excerpt...",
        "category": "food",
        "price": 9.99,
        "slug": "blog-title",
        "Media": {
          "url": "/uploads/image.jpg"
        }
      }
    }
  ]
}
```

---

## 🧩 Components

### 1. **Hero Section**

* Gradient background
* Category filter buttons
* Search bar
* Price range inputs
* Statistics display

### 2. **Blog Card**

* Featured image
* Category and price tags
* Title with hover effect
* Excerpt preview

### 3. **Filter Controls**

* Search input with icon
* Toggleable category buttons
* Min/Max price inputs
* Active filters with remove buttons

---

## 🎨 Styling

* Tailwind CSS for utility-first styling
* Custom gradients and color themes
* Responsive layouts
* Hover transitions and spacing consistency

---

## 🔌 API Endpoints

* **Fetch blogs:**
  `GET http://localhost:1337/api/blogs?populate=*`

---

## ⚙️ Custom Hooks & Functions

* **State management:** `useState`, `useEffect`
* **Functions:**

  * `getExcerpt(content)` – Truncate content to 100 characters
  * `handleSearchChange(e)` – Update search query
  * `handleCategoryChange(category)` – Toggle category filter
  * `handlePriceChange(type, value)` – Update min/max price
  * `resetFilters()` – Clear all filters

---

## 📱 Responsive Design

* **Mobile:** Single-column layout
* **Desktop:** Two-column blog grid
* Flexible hero section layout for all screen sizes

---

## ⚠️ Error Handling

* Displays a message when no matching blogs are found
* Handles missing attributes gracefully

---

## 🌱 Future Improvements

* Add pagination
* Sorting options (date, title, price)
* Advanced filtering
* Enhanced loading states
* Smooth animations and transitions

---

## 🧰 Dependencies

* [React](https://reactjs.org/)
* [Lucide React](https://lucide.dev/)
* [Tailwind CSS](https://tailwindcss.com/)

---

## 📄 License

**MIT License** – Free to use and modify.

---

Let me know if you want a downloadable `.md` version or want it tailored for deployment (e.g., Vercel, Netlify).
