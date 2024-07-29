import Flickity from 'react-flickity-component'
import { MdHideImage } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import "../../assets/css/tailwind.css"
import { MovieDetails } from '../../interfaces/Movie'
import { TvShowDetails } from '../../interfaces/TvShow'


const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}

interface MediaRecommendationsProps {
	mediaRecommendations: MovieDetails[] | TvShowDetails[]
	type: 'movie' | 'tv-show'
}

export const MediaRecommendations = ({ mediaRecommendations, type }: MediaRecommendationsProps) => {
  return (
    <div className='mt-4'>
      <h2 className='text-xl font-semibold mb-2'>Recommendations</h2>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {mediaRecommendations.map((recommendationMovie, index) => {
          return (
            <div key={index} className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[100px] md:max-w-[125px] mr-3'>
              <NavLink to={`/${type}/${recommendationMovie.id}`} reloadDocument>
                {recommendationMovie.poster_path
                  ? <img src={`https://image.tmdb.org/t/p/original/${recommendationMovie.poster_path}`} alt="movie poster" className='min-h-[150px] md:min-h-[187px]' />
                  : <MdHideImage className='h-[149px] md:h-[187px] w-full'></MdHideImage>
                }
              </NavLink>
              <div className='p-2'>
                <p className='font-semibold'>{type == 'movie' ? (recommendationMovie as MovieDetails).title : (recommendationMovie as TvShowDetails).name}</p>
              </div>
            </div>
          )
        })}
      </Flickity>
    </div>
  )
}