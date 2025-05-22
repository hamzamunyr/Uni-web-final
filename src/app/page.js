'use client'
import { useEffect, useState } from 'react'
import { Search, BookOpen, ArrowRight, DollarSign } from 'lucide-react'

export default function Home() {
  const [blogs, setBlogs] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showPriceFilter, setShowPriceFilter] = useState(false)

  useEffect(() => {
    fetch('http://localhost:1337/api/blogs?populate=*')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.data)
        setFilteredBlogs(data.data) // Initialize filtered blogs with all blogs
      })
  }, [])

  // Filter blogs whenever search query, category, or price range changes
  useEffect(() => {
    let results = blogs

    // Apply category filter first
    if (selectedCategory) {
      results = results.filter(blog => {
        const attrs = blog.attributes || blog
        return (attrs.category || '').trim().toLowerCase() === selectedCategory.toLowerCase()
      })
    }

    // Then apply search filter for title
    if (searchQuery.trim()) {
      results = results.filter(blog => {
        const attrs = blog.attributes || blog
        const title = attrs.title || ''
        return title.toLowerCase().includes(searchQuery.toLowerCase())
      })
    }

    // Apply price filter if min or max are set
    if (priceRange.min !== '' || priceRange.max !== '') {
      results = results.filter(blog => {
        const attrs = blog.attributes || blog
        const price = parseFloat(attrs.price)
        
        // Skip blogs with no price
        if (!price && price !== 0) return false
        
        // Check min price if specified
        if (priceRange.min !== '' && price < parseFloat(priceRange.min)) return false
        
        // Check max price if specified
        if (priceRange.max !== '' && price > parseFloat(priceRange.max)) return false
        
        return true
      })
    }

    setFilteredBlogs(results)
  }, [searchQuery, blogs, selectedCategory, priceRange])

  // show limited content
  const getExcerpt = (content) => {
    if (!content) return '';
    return content.length > 100 ? content.substring(0, 100) + '...' : content;
  }

  // search input handle kar raha ha change 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // category selection ko handle kar raha ha
  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category)
  }

  // Handle price range changes
  const handlePriceChange = (type, value) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }))
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('')
    setPriceRange({ min: '', max: '' })
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-8 mb-16 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-white">
            <div className="grid grid-cols-4 gap-4 h-full w-full">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="border border-white/20 rounded-md"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Discover stories that inspire your journey</h1>
            <p className="text-blue-100 mb-6">Join thousands of readers exploring insightful perspectives on travel, lifestyle, and personal growth.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Category Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange('food')}
                  className={`px-4 py-2 rounded-md ${selectedCategory === 'food' ? 'bg-white text-blue-900' : 'bg-blue-800/50 text-white border border-blue-600'}`}>
                  Food
                </button>
                <button
                  onClick={() => handleCategoryChange('entertainment')}
                  className={`px-4 py-2 rounded-md ${selectedCategory === 'entertainment' ? 'bg-white text-blue-900' : 'bg-blue-800/50 text-white border border-blue-600'}`}>
                  Entertainment
                </button>
                <button
                  onClick={() => handleCategoryChange('car')}
                  className={`px-4 py-2 rounded-md ${selectedCategory === 'car' ? 'bg-white text-blue-900' : 'bg-blue-800/50 text-white border border-blue-600'}`}>
                  Car
                </button>
              </div>
            </div>
          </div>


          <div className="md:w-1/2 md:pl-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-300" />
              </div>
              <input
                type="text"
                className="bg-blue-800/50 border border-blue-600 text-white placeholder-blue-300 w-full py-3 pl-10 pr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Search for Blogs..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* Price Filter Toggle */}
            <div className="mb-4">
              <button 
                onClick={() => setShowPriceFilter(!showPriceFilter)}
                className="flex items-center text-blue-200 hover:text-white"
              >
                <DollarSign className="h-4 w-4 mr-1" />
                {showPriceFilter ? 'Hide Price Filter' : 'Filter by Price'}
              </button>
            </div>

            {/* Price Range Filter */}
            {showPriceFilter && (
              <div className="mb-6 bg-blue-800/30 p-4 rounded-md">
                <div className="text-blue-200 mb-2 text-sm">Price Range</div>
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="bg-blue-800/50 border border-blue-600 text-white placeholder-blue-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                      value={priceRange.min}
                      onChange={(e) => handlePriceChange('min', e.target.value)}
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="number"
                      placeholder="Max"
                      className="bg-blue-800/50 border border-blue-600 text-white placeholder-blue-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange('max', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-800/30 p-4 rounded-md">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-blue-200 text-sm">Articles</div>
              </div>
              <div className="bg-blue-800/30 p-4 rounded-md">
                <div className="text-2xl font-bold">50k</div>
                <div className="text-blue-200 text-sm">Readers</div>
              </div>
              <div className="bg-blue-800/30 p-4 rounded-md">
                <div className="text-2xl font-bold">24</div>
                <div className="text-blue-200 text-sm">Topics</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedCategory || searchQuery || priceRange.min || priceRange.max) && (
        <div className="mb-6 flex items-center">
          <span className="text-gray-600 mr-2">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                Category: {selectedCategory}
                <button 
                  onClick={() => setSelectedCategory('')}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                Search: {searchQuery}
                <button 
                  onClick={() => setSearchQuery('')}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
            {(priceRange.min || priceRange.max) && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                Price: {priceRange.min || '0'} - {priceRange.max || '∞'}
                <button 
                  onClick={() => setPriceRange({ min: '', max: '' })}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => {
            const attrs = blog.attributes || blog;
            const imageUrl = attrs.Media?.url;

            return (
              <div key={blog.id} className="blog-card bg-white rounded-lg shadow-md overflow-hidden">
                {/* Image */}
                <div className="mb-3 overflow-hidden">
                  <img
                    src={imageUrl ? `http://localhost:1337${imageUrl}` : '/api/placeholder/400/250'}
                    alt={attrs.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  {/* Category Tag */}
                  <div className="flex justify-between items-center mb-2">
                    {attrs.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {attrs.category}
                      </span>
                    )}
                    
                    {/* Price Tag */}
                    {attrs.price && (
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {attrs.price}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <a
                    href={`/blog/${attrs.slug || blog.id}`}
                    className="block text-xl font-bold text-blue-900 mb-2 hover:text-blue-700"
                  >
                    {attrs.title}
                  </a>

                  {/* Excerpt from actual content */}
                  <p className="text-gray-600 text-sm mb-3">
                    {attrs.excerpt || getExcerpt(attrs.content)}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-2 text-center py-8">
            <div className="text-gray-400 text-lg">No matching blogs found</div>
            <button
              className="mt-4 text-blue-600 flex items-center justify-center mx-auto"
              onClick={resetFilters}
            >
              Clear all filters
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
      </div>

    </div>
  )
}