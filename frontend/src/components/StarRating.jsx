import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <img 
          key={index}
          src={rating > index ? assets.star_icon_filled : assets.star_icon_outlined} 
          className="h-4 w-4" 
          alt="star" 
        />
      ))}
    </div>
  )
}

export default StarRating