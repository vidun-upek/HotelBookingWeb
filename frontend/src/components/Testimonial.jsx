import React from 'react'
import { testimonials } from '../assets/assets'
import Title from './Title'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl">
      <Title 
        title="What Our Guests Say" 
        subtitle="Read real stories from travelers who have experienced the QuickStay difference."
      />

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 min-w-[300px] max-w-[400px]">
            <div className="flex items-center gap-4 mb-4">
              <img src={item.image} className="h-14 w-14 rounded-full object-cover" alt={item.name} />
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.address}</p>
              </div>
            </div>
            <StarRating rating={item.rating} />
            <p className="mt-4 text-gray-600 italic">"{item.review}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial