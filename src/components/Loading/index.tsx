import { FaSpinner } from 'react-icons/fa'
import "../../assets/css/tailwind.css"

interface LoadingProps {
	type?: 'upcomingMovies' | 'mediaHeader' | 'mediaKeywords'
}

export const Loading = ({ type }: LoadingProps) => {
  if (type == 'mediaHeader') {
    return (
      <div className='animate-pulse w-full h-[450px] flex items-center justify-center bg-neutral-700 mb-4'>
        <FaSpinner className='w-8 h-8 animate-spin' />
      </div>
    )
  } else if (type == 'mediaKeywords') {
    return (
      <div className='animate-pulse w-full lg:w-[200px] h-60 lg:h-[376px] flex items-center justify-center bg-neutral-700 lg:ml-4'>
        <FaSpinner className='w-8 h-8 animate-spin' />
      </div>
    )
  } else if (type == 'upcomingMovies') {
    return (
      <div className='animate-pulse w-[270px] h-screen row-span-2 flex items-center justify-center bg-neutral-700 ml-4 mb-4 col-start-2 row-start-1'>
        <FaSpinner className='w-8 h-8 animate-spin' />
      </div>
    )
  } else {
    return (
      <div className='animate-pulse w-full h-[300px] flex items-center justify-center bg-neutral-700 mb-4'>
        <FaSpinner className='w-8 h-8 animate-spin' />
      </div>
    )
  }
}