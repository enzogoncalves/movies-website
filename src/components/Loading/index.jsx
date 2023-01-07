import React from 'react'
import "../../assets/css/tailwind.css"
import { FaSpinner } from 'react-icons/fa'

const Loading = ({ type }) => {
  if (type == 'movieHeader') {
    return (
      <div className='animate-pulse w-full h-[450px] flex items-center justify-center bg-neutral-700 mb-4'>
        <FaSpinner className='w-8 h-8 animate-spin' />
      </div>
    )
  } else if (type == 'movieKeywords') {
    return (
      <div className='animate-pulse w-[200px] h-[376px] flex items-center justify-center bg-neutral-700 ml-4'>
        <FaSpinner className='w-8 h-8 animate-spin' />
      </div>
    )
  } else if (type == 'upcomingMovies') {
    return (
      <div className='animate-pulse w-[270px] h-screen row-span-2 flex items-center justify-center bg-neutral-700 ml-4 mb-4'>
        <FaSpinner className='w-8 h-8 animate-spin' />
      </div>
    )
  } else {
    return (
      <div className='animate-pulse w-full h-[200px] flex items-center justify-center bg-neutral-700 mb-4'>
        <FaSpinner className='w-8 h-8 animate-spin' />
      </div>
    )
  }
}

export default Loading