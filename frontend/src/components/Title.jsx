import React from 'react'

const Title = ({ title, subtitle, align, font }) => {
  return (
    <div className={`flex flex-col mb-10 ${align === 'left' ? 'md:items-start text-left' : 'items-center text-center'}`}>
      <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 ${font || 'font-playfair'}`}>
        {title}
      </h1>
      <p className="text-gray-500 max-w-lg">
        {subtitle}
      </p>
    </div>
  )
}

export default Title