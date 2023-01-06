import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Section } from '../components/Section/styles'
import "../assets/css/tailwind.css"
import { IoSearchOutline } from 'react-icons/io5'
import { MdHideImage } from 'react-icons/md'
// import { }

const Search = () => {
  const [moviesResearched, setMoviesResearched] = useState()
  const [query, setQuery] = useState('')

  async function searchMovie() {
    const fetchMovie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US&query=${query}&include_adult=false`)
    const fetchMovieData = await fetchMovie.json();
    setMoviesResearched(fetchMovieData)
    console.log(fetchMovieData)
  }

  function keyDown(event) {
    if (event.key == "Enter" && query != '') { searchMovie() }
  }

  return (
    <Section>
      <div className='flex gap-4 items-center border-2 border-gray-500 py-4 px-6 rounded-full focus-within:border-[#efefefs]'>
        <IoSearchOutline size={'22px'} color='#efefef' onClick={searchMovie} cursor='pointer' />
        <input type="text" placeholder='Type here to search' className='w-full bg-transparent border-none outline-none text-gray-500 placeholder:text-gray-500 focus:text-[#efefefs] focus:placeholder:text-[#efefefs]' onKeyDown={keyDown} onChange={(e) => setQuery(e.target.value)} />
      </div>
      {moviesResearched &&
        <div className='flex flex-wrap gap-2 pt-4'>
          {moviesResearched.results.map((movie, index) => (
            <div key={index} className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[125px] mr-3'>
              <NavLink to={`/movie/${movie.id}`} reloadDocument>
                {movie.poster_path
                  ? <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie poster" />
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