import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoSearchOutline } from 'react-icons/io5'
import { MdHideImage } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import * as zod from 'zod'
import "../assets/css/tailwind.css"
import { Movie } from '../interfaces/Movie'
import { TvShow } from '../interfaces/TvShow'
import { api } from '../libs/axios'
import { Section } from '../components/Section/styles'
import { Helmet } from "@dr.pogodin/react-helmet"

const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const Search = () => {
	const [ mediasResearched, setMediasResearched ] = useState<Movie[] | TvShow[]>([])
	const [ mediaType, setMediaType ] = useState<'tv' | 'movie'>('movie')
  
	const searchFormSchema = zod.object({
		query: zod.string({required_error: "Preencha este campo!"}),
		option: zod.enum(['tv', 'movie'])
	})

	type SearchFormInputs = zod.infer<typeof searchFormSchema>
	
  async function fetchMediaData(query: string, type: 'movie' | 'tv') {
    const media = await api.get(`/search/${type}?api_key=${api_key}&language=en-US&query=${query}&include_adult=false`);
		
    setMediasResearched(media.data.results)
  }

	const { register, handleSubmit } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
		defaultValues: {
			option: 'movie'
		}
	})

  function handleSearchQuery(data: SearchFormInputs) {
		setMediaType(data.option)
		setMediasResearched([])
    fetchMediaData(data.query, data.option)
  }

  return (
    <Section>
			<Helmet title="Search"/>

      <form onSubmit={handleSubmit(handleSearchQuery)} className='flex flex-col gap-4'>
				<div className='flex gap-4 items-center border-2 border-gray-500 py-4 px-6 rounded-full focus-within:border-[#efefefs]'>
					<IoSearchOutline size={'22px'} color='#efefef' />
					<input type="search" {...register('query')} required placeholder='Type here to search' className='w-full bg-transparent border-none outline-none text-gray-500 placeholder:text-gray-500 focus:text-[#efefefs] focus:placeholder:text-[#efefefs]' />
					<button type="submit" className='bg-white text-black p-2 pl-4 pr-4 rounded-full hover:bg-slate-100'>SEARCH</button>
				</div>
				<div>
					<div className='inline-flex gap-2 p-2'>
						<input {...register('option', {value: "movie"})} type="radio" name="option" id="movie" value="movie" className='cursor-pointer' />
						<label htmlFor="movie" className='text-lg cursor-pointer'>Movie</label>
					</div>
					<div className='inline-flex gap-2 p-2'>
						<input {...register('option', { value: "tv"})} type="radio" name="option" id="tv" value="tv" className='cursor-pointer'/>
						<label htmlFor="tv" className='text-lg cursor-pointer'>TV Show</label>
					</div>
				</div>
      </form>
      {mediasResearched &&
        <div className='flex flex-wrap gap-2 pt-4'>
          {mediasResearched.map((media, index) => (
            <div key={index} className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[125px] mr-3'>
              <NavLink to={`/${mediaType == 'movie' ? 'movie' : 'tv-show'}/${media.id}`} reloadDocument>
                {media.poster_path
                  ? <img src={`https://image.tmdb.org/t/p/original/${media.poster_path}`} alt={`${mediaType == 'tv' ? "Tv Poster" : 'Movie'} Poster`} />
                  : <MdHideImage className='w-full h-full min-h-[185px] p-6 border-2' />
                }
              </NavLink>
              <div className='p-2'>
                <p className='font-semibold'>{mediaType == 'movie' ? (media as Movie).title : (media as TvShow).name}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </Section>
  )
}