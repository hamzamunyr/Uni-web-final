'use client'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-800 mb-3">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question or feedback? We'd love to hear from you. 
          Use the information below to get in touch with our team.
        </p>
      </div>
      
      {/* Contact Information Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Email Card */}
        <div className="bg-white p-4 rounded border border-gray-200 text-center">
          <div className="bg-blue-100 p-2 rounded-full inline-block mb-3">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-medium text-lg mb-2">Email Us</h3>
          <p className="text-gray-500 mb-2">We'll respond within 24-48 hours</p>
          <a href="mailto:hello@blogninja.com" className="text-blue-600 hover:text-blue-800">
            hamza@blogninja.com
          </a>
        </div>
        
        {/* Phone Card */}
        <div className="bg-white p-4 rounded border border-gray-200 text-center">
          <div className="bg-blue-100 p-2 rounded-full inline-block mb-3">
            <Phone className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-medium text-lg mb-2">Call Us</h3>
          <p className="text-gray-500 mb-2">Mon-Fri from 9am to 5pm</p>
          <a href="tel:+923208265900" className="text-blue-600 hover:text-blue-800">
            +923208265900
          </a>
        </div>
        
        {/* Office Card */}
        <div className="bg-white p-4 rounded border border-gray-200 text-center">
          <div className="bg-blue-100 p-2 rounded-full inline-block mb-3">
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-medium text-lg mb-2">Visit Us</h3>
          <p className="text-gray-500 mb-2">Our office location</p>
          <address className="not-italic text-blue-600">
            Superior University<br />
            Dubai Town, Lahore
          </address>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-blue-800 mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium text-lg text-blue-800 mb-2">How quickly will I receive a response?</h3>
            <p className="text-gray-600">We strive to respond to all inquiries within 24-48 hours during business days.</p>
          </div>
          
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium text-lg text-blue-800 mb-2">Can I write for Blog Ninja?</h3>
            <p className="text-gray-600">Yes! We're always looking for talented writers to join our community. Send us a message with your writing samples and areas of interest.</p>
          </div>
          
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium text-lg text-blue-800 mb-2">Do you offer advertising opportunities?</h3>
            <p className="text-gray-600">We have several options for brands looking to partner with Blog Ninja. Contact us with details about your company and goals.</p>
          </div>
        </div>
      </div>
    </div>
  )
}