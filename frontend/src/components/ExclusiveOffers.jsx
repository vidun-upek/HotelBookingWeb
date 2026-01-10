import React from 'react'
import { exclusive_offers, assets } from '../assets/assets'
import Title from './Title'

const ExclusiveOffers = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8">
        <Title 
          align="left"
          title="Exclusive Offers" 
          subtitle="Take advantage of our specially curated packages and seasonal discounts."
        />
        <button className="flex items-center gap-2 text-primary font-semibold hover:underline mb-10">
          View all offers
          <img src={assets.arrow_icon} className="h-4" alt="arrow" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exclusive_offers.map((item) => (
          <div 
            key={item.id}
            className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
            
            <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-lg font-bold">
              {item.price_off}% OFF
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm opacity-90 mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs uppercase tracking-wider">Expires: {item.expiry_date}</p>
                <button className="bg-white text-black p-2 rounded-full">
                  <img src={assets.add_icon} className="h-4" alt="view" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers