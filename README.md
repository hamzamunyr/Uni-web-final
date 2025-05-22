Blog Platform - Documentation
Overview
This is a React-based blog platform that fetches blog posts from a Strapi backend (http://localhost:1337). The application features:

Blog post listing with images

Search functionality

Category filtering

Price range filtering

Responsive design

Features
1. Blog Listing
Displays blog posts in a responsive grid (2 columns on desktop, 1 column on mobile)

Each blog card shows:

Featured image

Category tag

Price (if available)

Title

Content excerpt

2. Search Functionality
Full-text search across blog titles

Real-time filtering as you type

3. Category Filtering
Filter blogs by category (Food, Entertainment, Car)

Toggle categories on/off

4. Price Filtering
Filter by minimum price

Filter by maximum price

Toggle price filter visibility

5. Active Filters Display
Shows currently applied filters

Allows removing individual filters

6. Hero Section
Attractive gradient background

Key statistics display

Main call-to-action area

Installation
Clone the repository

Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Requirements
Node.js (v14 or later)

React (v18 or later)

Strapi backend running at http://localhost:1337

Data Structure
The application expects blog data from Strapi with the following structure:

json
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
Components
1. Hero Section
Background with gradient and pattern

Category filter buttons

Search bar

Price filter controls

Statistics display

2. Blog Card
Responsive image

Category and price tags

Title with hover effect

Content excerpt

3. Filter Controls
Search input with icon

Category toggle buttons

Price range inputs (min/max)

Active filters display with remove buttons

Styling
The application uses Tailwind CSS for styling with:

Custom gradients and colors

Responsive grid layouts

Hover effects and transitions

Consistent spacing and typography

API Endpoints
Blog posts: GET http://localhost:1337/api/blogs?populate=*

Custom Hooks
The component uses React's useState and useEffect hooks to:

Fetch and manage blog data

Handle search and filter state

Manage UI state (price filter visibility)

Functions
getExcerpt(content) - Truncates content to 100 characters for excerpts

handleSearchChange(e) - Updates search query state

handleCategoryChange(category) - Toggles category filter

handlePriceChange(type, value) - Updates min/max price filters

resetFilters() - Clears all filters

Responsive Design
The layout adapts to different screen sizes:

Mobile: Single column layout

Desktop: Two-column grid for blog posts

Flexible hero section layout

Error Handling
Displays "No matching blogs found" when filters return no results

Gracefully handles missing blog attributes

Future Improvements
Add pagination for large blog collections

Implement sorting options

Add more detailed filter options

Improve loading states

Add animations for smoother transitions

Dependencies
React

Lucide React (for icons)

Tailwind CSS

License
MIT License - Free to use an
