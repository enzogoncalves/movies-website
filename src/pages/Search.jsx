import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Section } from '../components/Section/styles'
import "../assets/css/tailwind.css"
import { IoSearchOutline } from 'react-icons/io5'
import { MdHideImage } from 'react-icons/md'

const Search = () => {
  document.title = 'Search'

  const [mediasResearched, setMediasResearched] = useState()
  const [query, setQuery] = useState('')
  const [mediaType, setMediaType] = useState('movie')

  async function searchMovie() {
    if (!query) return
    const fetchMovie = await fetch(`https://api.themoviedb.org/3/search/${mediaType}?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US&query=${query}&include_adult=false`)
    const fetchMovieData = await fetchMovie.json();
    setMediasResearched(fetchMovieData)
  }

  function keyDown(event) {
    if (event.key == "Enter" && query != '') { searchMovie() }
  }

  return (
    <Section>
      <div className='flex gap-4 items-center border-2 border-gray-500 py-4 px-6 rounded-full focus-within:border-[#efefefs]'>
        <IoSearchOutline size={'22px'} color='#efefef' onClick={searchMovie} cursor='pointer' />
        <input type="search" placeholder='Type here to search' className='w-full bg-transparent border-none outline-none text-gray-500 placeholder:text-gray-500 focus:text-[#efefefs] focus:placeholder:text-[#efefefs]' onKeyDown={keyDown} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" onClick={searchMovie}>SEARCH</button>
      </div>
      <div className='inline-flex gap-2 p-2'>
        <input type="radio" name="media" id="movie" value="movie" defaultChecked={true} className='cursor-pointer' onClick={() => setMediaType('movie')} />
        <label htmlFor="movie" className='text-lg cursor-pointer'>Movie</label>
      </div>
      <div className='inline-flex gap-2 p-2'>
        <input type="radio" name="media" id="tv" value="tv" className='cursor-pointer' onClick={() => setMediaType('tv')} />
        <label htmlFor="tv" className='text-lg cursor-pointer'>TV Show</label>
      </div>
      {mediasResearched &&
        <div className='flex flex-wrap gap-2 pt-4'>
          {mediasResearched.results.map((media, index) => (
            <div key={index} className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[125px] mr-3'>
              <NavLink to={`/${mediaType == 'movie' ? 'movie' : 'tv-show'}/${media.id}`} reloadDocument>
                {media.poster_path
                  ? <img src={`https://image.tmdb.org/t/p/original/${media.poster_path}`} alt={`${mediaType == 'tv' ? "Tv Poster" : 'Movie'} Poster`} />
                  : <MdHideImage className='w-full h-full min-h-[185px] p-6 border-2' />
                }
              </NavLink>
              <div className='p-2'>
                <p className='font-semibold'>{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </Section>
  )
}

export default Search