'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function BlogDetail() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (slug) {
      setLoading(true)
      
      fetch(`http://localhost:1337/api/blogs?populate=*`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Failed to fetch blog')
          }
          return res.json()
        })
        .then(data => {
          // Find the blog by slug 
          const found = data.data.find(
            b => b.attributes?.slug === slug || b.id.toString() === slug
          )
          
          if (!found) {
            throw new Error('Blog not found')
          }
          
          setBlog(found)
          setLoading(false)
        })
        .catch(err => {
          console.error('Error fetching blog:', err)
          setError(err.message)
          setLoading(false)
        })
    }
  }, [slug])

  // If  show error message
  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-8">
          <div className="font-bold text-lg text-blue-800">Blog Ninja</div>
          <nav>
            <ul className="flex space-x-4 text-sm text-gray-600">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <div className="text-center py-8">
          <h2 className="text-xl font-bold text-red-600 mb-3">Error</h2>
          <p className="text-gray-700">{error}</p>
          <Link href="/" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" /> Back to home
          </Link>
        </div>
      </div>
    )
  }

  // loading state
  const displayBlog = blog || {
    attributes: {
      title: loading ? "Loading..." : "Blog post not found",
      content: loading ? "" : "We couldn't find the blog post you're looking for.",
      Media: { data: { attributes: { url: null } } }
    }
  }

  const attrs = displayBlog.attributes || displayBlog
  const imageUrl = attrs.Media?.data?.attributes?.url

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      

      {/* Back button */}
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft size={16} className="mr-2" /> Back to all articles
      </Link>

      {/* Main blog content */}
      <article className="max-w-3xl mx-auto">
        {/* Blog title */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">
          {attrs.title}
        </h1>

        {/* Featured image */}
        {imageUrl && (
          <div className="mb-6 rounded overflow-hidden">
            <img
              src={imageUrl.startsWith('/api') ? imageUrl : `http://localhost:1337${imageUrl}`}
              alt={attrs.title}
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        {/* Blog content */}
        <div className="text-gray-700">
          {loading ? (
            // Loading skeleton for content
            <>
              <div className="h-3 bg-gray-200 rounded mb-3 w-full"></div>
              <div className="h-3 bg-gray-200 rounded mb-3 w-11/12"></div>
              <div className="h-3 bg-gray-200 rounded mb-3 w-10/12"></div>
              <div className="h-3 bg-gray-200 rounded mb-3 w-full"></div>
              <div className="h-3 bg-gray-200 rounded mb-3 w-9/12"></div>
            </>
          ) : (
            
            attrs.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-3">{paragraph}</p>
            ))
          )}
        </div>
      </article>
    </div>
  )
}