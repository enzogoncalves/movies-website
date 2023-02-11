import React from 'react'
import "../../assets/css/tailwind.css"

const MediaKeywords = ({ media, mediaKeywords }) => {
  return (
    <div className='max-w-[250px] p-4 relative'>
      <div className='absolute top-0 -left-10 h-full w-10 z-10 bg-gradient-to-l from-[#1A161F] to-transparent'></div>
      <p className='flex flex-col mb-4'>
        <span className='font-semibold'>Status</span>
        <span>{media.status}</span>
      </p>
      <p className='flex flex-col mb-4'>
        <span className='font-semibold'>Original Language</span>
        <span>{media.original_language}</span>
      </p>
      {
        media.budget !== 0 &&
        <p className='flex flex-col mb-4'>
          <span className='font-semibold'>Budget</span>
          <span>${new Intl.NumberFormat('de-DE').format(media.budget)}</span>
        </p>
      }
      {
        media.revenue !== 0 &&
        <p className='flex flex-col mb-4'>
          <span className='font-semibold'>Revenue</span>
          <span>${new Intl.NumberFormat('de-DE').format(media.revenue)}</span>
        </p>
      }
      <div>
        <span className='font-semibold'>KeyWords</span>
        <div className='flex flex-wrap pr-2 gap-2'>
          {mediaKeywords.map((keyword, index) => {
            return (
              <span key={index} className='text-sm bg-[#444] p-1 rounded-sm'>{keyword.name}</span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MediaKeywords