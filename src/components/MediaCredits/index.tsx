import Flickity from 'react-flickity-component'
import { IoPerson } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import "../../assets/css/tailwind.css"
import { Cast } from '../../interfaces/Cast'

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}

interface MediaCredits {
	mediaCredits: Cast[]
	type: string
	id: string | undefined
}

export const MediaCredits = ({ mediaCredits, id, type }: MediaCredits) => {
  return (
    <div className='mt-4 pb-4'>
      <h2 className='text-xl font-semibold mb-2'>Main Cast</h2>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {mediaCredits.slice(0, 10).map((cast, index) => {
          return (
            <div className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[100px] md:max-w-[125px] mr-3' key={index}>
              {cast.profile_path
                ? <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt="cast profile picture" />
                : <IoPerson className='w-full h-[150px] md:h-[175px] p-[10px] rounded-md text-[#444] bg-[#efefef]' />
              }

              <div className='p-1 md:p-2'>
                <p className='font-semibold'>{cast.name}</p>
                <span className='text-xs md:text-sm'>{cast.character}</span>
              </div>
            </div>
          )
        })}
      </Flickity>
      <NavLink to={`/${type}/${id}/cast`} className='hover:underline'>Full Cast & Crew</NavLink>
    </div>
  )
}
