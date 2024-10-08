import { useContext } from 'react'
import "../../assets/css/tailwind.css"
import { AppContext } from '../../contexts/AppContext'
import { Keyword } from '../../interfaces/Keywords'
import { MovieDetails } from '../../interfaces/Movie'
import { TvShowDetails } from '../../interfaces/TvShow'

interface MediaKeywordsProps {
	media: MovieDetails | TvShowDetails
	mediaKeywords: Keyword[]
}

export const MediaKeywords = ({ media, mediaKeywords }: MediaKeywordsProps) => {
	const { windowWidth } = useContext(AppContext)

  return (
    <div className='sticky top-0 lg:max-w-[250px] p-2 lg:p-4 border-2 border-neutral-600 lg:border-none'>
      {windowWidth >= 1024
        ? <div className='absolute top-0 -left-10 h-full w-10 z-10 bg-gradient-to-l from-[#1A161F] to-transparent'></div>
        : <></>
      }
      <div className='sticky top-20'>
				<p className='flex flex-col mb-4'>
					<span className='font-semibold'>Status</span>
					<span>{media.status}</span>
				</p>
				<p className='flex flex-col mb-4'>
					<span className='font-semibold'>Original Language</span>
					<span>{media.original_language}</span>
				</p>
				{/* {
					(media.budget !== 0 && typeof media.budget != 'undefined') &&
					<p className='flex flex-col mb-4'>
						<span className='font-semibold'>Budget</span>
						<span>${new Intl.NumberFormat('de-DE').format(media.budget)}</span>
					</p>
				}
				{
					(media.revenue !== 0 && typeof media.revenue != 'undefined') &&
					<p className='flex flex-col mb-4'>
						<span className='font-semibold'>Revenue</span>
						<span>${new Intl.NumberFormat('de-DE').format(media.revenue)}</span>
					</p>
				} */}
				{mediaKeywords.length > 0 && <div>
					<span className='font-semibold'>Keywords</span>
					<div className='flex flex-wrap pr-2 gap-2 mt-1'>
						{mediaKeywords.map((keyword, index) => {
							return (
								<span key={index} className='text-sm bg-[#444] p-1 rounded-sm'>{keyword.name}</span>
							)
						})}
					</div>
				</div>
				}
			</div>
    </div>
  )
}
