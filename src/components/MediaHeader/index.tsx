import { MdHideImage } from 'react-icons/md';
import "../../assets/css/tailwind.css";
import { Crew } from '../../interfaces/Crew';
import { MovieDetails } from '../../interfaces/Movie';
import { TvShowDetails } from '../../interfaces/TvShow';
import { formatCredits, formatDate, formatGenres, formatMediaDuration } from './utils/functions';

interface MediaHeaderProps {
	media: MovieDetails | TvShowDetails
 	type: 'tv' | 'movie'
	mediaCredits: Crew[]
}

export const MediaHeader = ({ media, mediaCredits, type }: MediaHeaderProps) => {
  if (type == 'movie') {
		const movie = media as MovieDetails

    return (
      <div className='relative overflow-hidden'>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='absolute left-0 top-0 h-96 md:h-full w-full object-cover blur' alt="movie backdrop" />
        <div className='absolute left-0 top-0 h-full w-full bg-movieBackground opacity-60'></div>
        <div className='p-2 md:p-8 grid grid-rows-mobHeader grid-cols-mobHeader lg:grid-cols-[auto_1fr] gap-x-4 gap-y-4 lg:gap-y-2 relative z-10'>
          {movie.poster_path
            ? <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='relative h-fit w-32 lg:w-[300px] lg:row-span-full lg:self-center justify-self-center col-span-2 2xsm:col-span-1 xsm:justify-self-auto rounded-md' alt="movie poster" />
            : <MdHideImage className='relative h-fit w-32 lg:w-[300px] lg:row-span-full lg:self-center rounded-md'></MdHideImage>
          }
          <h2 className='text-xl sm:text-3xl font-bold text-[#efefef] md:mb-2 self-end row-start-2 col-span-2 2xsm:col-span-1 2xsm:row-start-1 2xsm:col-start-2'>{movie.title} <span className='text-[#999] text-xl'>({formatDate(movie.release_date).year})</span></h2>
          <div className='flex flex-wrap gap-4 items-center col-span-2 lg:col-span-1'>
            <span>{formatDate(movie.release_date).date}</span><span>{formatGenres(movie.genres)}</span><span>{formatMediaDuration(movie.runtime)}</span>
          </div>
          <p className='text-[#bbb] italic mt-4 col-span-2 lg:col-span-1'>{movie.tagline}</p>
          <div className='flex flex-col gap-2 mb-4  col-span-2 lg:col-span-1'>
            <h3 className='font-bold text-xl mt-4'>Synopse</h3>
            <p>{movie.overview}</p>
          </div>
          <div className='grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-4 col-span-2 lg:col-span-1'>
            {formatCredits(mediaCredits).map((movieCredit, index) => {
              return (
                <div key={index} className='flex flex-col gap-2'>
                  <p className='font-semibold'>{movieCredit.name}</p>
                  <div className='text-sm flex flex-wrap gap-1 max-w-max'>
                    {movieCredit.jobs.map((job, index2) => {
                      if (index2 == movieCredit.jobs.length - 1) {
                        return <span key={index2}>{job}</span>
                      } else {
                        return <span key={index2}>{job}, </span>
                      }
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  } else if (type == 'tv') {
		const tvShow = media as TvShowDetails

    return (
      <div className='relative overflow-hidden'>
        <img src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`} className='absolute left-0 top-0 h-96 md:h-full w-full object-cover blur' alt="tv show backdrop" />
        <div className='absolute left-0 top-0 h-full w-full bg-movieBackground opacity-60'></div>
        <div className='p-2 md:p-8 grid grid-rows-mobHeader grid-cols-mobHeader lg:grid-cols-[auto_1fr] gap-x-4 gap-y-4 lg:gap-y-2 relative z-10'>
          {tvShow.poster_path
            ? <img src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`} className='relative h-fit w-32 lg:w-[300px] lg:row-span-full lg:self-center justify-self-center col-span-2 2xsm:col-span-1 xsm:justify-self-auto rounded-md' alt="movie poster" />
            : <MdHideImage className='relative h-fit w-32 lg:w-[300px] lg:row-span-full lg:self-center rounded-md'></MdHideImage>
          }
          <h2 className='text-xl sm:text-3xl font-bold text-[#efefef] md:mb-2 self-end row-start-2 col-span-2 2xsm:col-span-1 2xsm:row-start-1 2xsm:col-start-2'>{tvShow.name} <span className='text-[#999] text-xl'>({formatDate(tvShow.first_air_date).year})</span></h2>
          <div className='flex flex-wrap gap-4 items-center col-span-2 lg:col-span-1'>
            <span>{formatDate(tvShow.first_air_date).date}</span><span>{formatGenres(tvShow.genres)}</span><span>{formatMediaDuration(tvShow.episode_run_time[0] ?? tvShow.last_episode_to_air.runtime)}</span>
          </div>
          <p className='text-[#bbb] italic mt-4 col-span-2 lg:col-span-1'>{tvShow.tagline}</p>
          <div className='flex flex-col gap-2 mb-4  col-span-2 lg:col-span-1'>
            <h3 className='font-bold text-xl mt-4'>Synopse</h3>
            <p>{tvShow.overview}</p>
          </div>
          <div className='grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-4 col-span-2 lg:col-span-1'>
            {formatCredits(mediaCredits).map((movieCredit, index) => {
              return (
                <div key={index} className='flex flex-col gap-2'>
                  <p className='font-semibold'>{movieCredit.name}</p>
                  <div className='text-sm flex flex-wrap gap-1 max-w-max'>
                    {movieCredit.jobs.map((job, index2) => {
                      if (index2 == movieCredit.jobs.length - 1) {
                        return <span key={index2}>{job}</span>
                      } else {
                        return <span key={index2}>{job}, </span>
                      }
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  } else {
		return <></>
	}
}