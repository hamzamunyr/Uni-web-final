Here is your documentation converted into a proper `README.md` file format for your blog platform:

````markdown
# Blog Platform

A React-based blog platform that fetches blog posts from a Strapi backend. Features include blog listing with images, search, category filtering, price filtering, and responsive design.

---

## 🌐 Overview

This application connects to a Strapi backend (`http://localhost:1337`) and includes:

- Blog post listing with images
- Real-time search
- Category and price filtering
- Responsive design for mobile and desktop

---

## ✨ Features

### 1. Blog Listing
- Responsive grid layout (2 columns on desktop, 1 column on mobile)
- Each blog card includes:
  - Featured image
  - Category tag
  - Price (if available)
  - Title
  - Content excerpt

### 2. Search Functionality
- Full-text search on blog titles
- Real-time filtering as user types

### 3. Category Filtering
- Filter blogs by categories:
  - Food
  - Entertainment
  - Car
- Toggle categories on/off

### 4. Price Filtering
- Filter blogs by price range:
  - Minimum price
  - Maximum price
- Toggle visibility of price filters

### 5. Active Filters Display
- Shows currently applied filters
- Option to remove individual filters

### 6. Hero Section
- Attractive gradient background
- Statistics display
- Main call-to-action and filter/search area

---

## 🚀 Installation

Clone the repository and install dependencies:

```bash
npm install
````

Start the development server:

```bash
npm run dev
```

---

## 🧰 Requirements

* Node.js (v14 or later)
* React (v18 or later)
* Strapi backend running at `http://localhost:1337`

---

## 📦 Data Structure

The app expects the following JSON format from Strapi:

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

### Hero Section

* Gradient and pattern background
* Filter controls
* Search bar
* Statistics display

### Blog Card

* Responsive image
* Category and price tags
* Hoverable title
* Content excerpt

### Filter Controls

* Search input with icon
* Category toggle buttons
* Min/max price inputs
* Active filters display

---

## 🎨 Styling

Tailwind CSS is used for:

* Custom gradients and colors
* Responsive grids
* Hover effects and transitions
* Consistent spacing and typography

---

## 📡 API Endpoint

* **GET** `http://localhost:1337/api/blogs?populate=*`

---

## 🔧 Custom Hooks & Functions

* `getExcerpt(content)` – Truncates content to 100 characters
* `handleSearchChange(e)` – Updates search input state
* `handleCategoryChange(category)` – Toggles selected category
* `handlePriceChange(type, value)` – Updates price filters
* `resetFilters()` – Clears all active filters

---

## 📱 Responsive Design

* Mobile: Single-column layout
* Desktop: Two-column layout
* Flexible hero section design

---

## ⚠️ Error Handling

* Displays message when no results match filters
* Handles missing attributes gracefully

---

## 🔮 Future Improvements

* Add pagination
* Implement sorting
* Add advanced filters
* Enhance loading animations
* Add transitions for smoother UX

---

## 📦 Dependencies

* React
* Lucide React (icons)
* Tailwind CSS

---

## 📄 License

MIT License — Free to use and modify.

```

Let me know if you want this saved as a downloadable file or formatted for GitHub Pages or another platform.
```
