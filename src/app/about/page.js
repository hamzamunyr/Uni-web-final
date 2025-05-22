'use client'

import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      

      {/* About Content */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="md:w-1/2">
          <Image
            src="/components/3.png" // Replace with your actual image
            alt="About Blog Ninja"
            width={500}
            height={500}
            className="rounded-md object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">About Blog Ninja</h1>
          <p className="text-gray-700 mb-4">
            Welcome to Blog Ninja, your go-to destination for insightful articles, travel stories, 
            and life lessons. We believe in sharing authentic experiences that inspire and educate.
          </p>
          <p className="text-gray-700 mb-4">
            Our team of writers are passionate about exploring the world and uncovering the 
            hidden gems in everyday life. From travel tips to thought-provoking observations, 
            we cover it all.
          </p>
          <p className="text-gray-700">
            Founded in 2025, Blog Ninja has grown from a personal blog to a community of 
            thousands of readers who value quality content and authentic storytelling.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Hamza Munir',
              role: 'Software Engineer',
              bio: 'Travel enthusiast and storyteller with 10+ years of writing experience.',
              image: '/components/1.jpeg'
            },
            {
              name: 'Hamza Munir',
              role: 'Software Engineer',
              bio: 'Food and culture expert who brings unique perspectives to everyday experiences.',
              image: '/components/2.jpeg'
            },
            {
              name: 'Hamza Munir',
              role: 'Software Engineer',
              bio: 'Captures the essence of our stories through stunning visuals.',
              image: '/components/3.png'
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-lg text-blue-900 mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          To create content that informs, inspires, and connects people through authentic 
          storytelling and shared experiences. We believe every story matters and every 
          journey has lessons worth sharing.
        </p>
      </div>
    </div>
  )
}