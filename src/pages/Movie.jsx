import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Section } from '../components/Section/styles'
import styled from 'styled-components'

import "../assets/css/tailwind.css"

import Flickity from 'react-flickity-component'

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieKeywords, setMovieKeywords] = useState()
  const [movieRecommendations, setMovieRecommendations] = useState();

  useEffect(() => {
    const getMovieData = async () => {
      const movieData = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US`)
      const movieRes = await movieData.json();

      const movieCreditsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US`)
      const movieCreditsRes = await movieCreditsData.json();

      const movieKeyWordsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/keywords?api_key=c2b569d95e4b2013348fb2f4430655a5`)
      const movieKeywordsRes = await movieKeyWordsData.json()

      const movieRecommendationsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US&page=1`)
      const movieRecommendationsRes = await movieRecommendationsData.json()

      setMovie(movieRes)
      setMovieCredits(movieCreditsRes)
      setMovieKeywords(movieKeywordsRes.keywords)
      setMovieRecommendations(movieRecommendationsRes.results)
    }

    getMovieData()

  }, [])

  function formatDate(releaseDate) {
    let dateData;
    if (releaseDate.length == 10) {
      dateData = {
        year: releaseDate.split('-')[0],
        date: `${releaseDate.split('-')[1]}-${releaseDate.split('-')[2]}-${releaseDate.split('-')[0]}`
      }
    } else {
      let date = releaseDate.slice(0, releaseDate.indexOf('T'))
      date = date.split('-');
      const day = date[2]
      let month = date[1]
      const year = date[0]
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      month = months[month - 1];

      dateData = {
        date: `${month} ${day}, ${year}`
      }
    }

    return dateData;
  }

  function formatGenres(genres) {
    let genreString = '';
    genres.forEach((genre, index) => {
      if (index == genres.length - 1) {
        genreString += `${genre.name}`
      } else {
        genreString += `${genre.name}, `
      }
    })

    return genreString;
  }

  function formateMovieDuration(runtime) {
    let hours = Math.floor(runtime / 60);
    let minutes = runtime - (hours * 60);

    return `${hours}h ${minutes}m`;
  }

  function formatCredits(credits) {
    let formatedCredits = { crew: [] };

    for (let i = 0; i < credits.crew.length; i++) {
      let crewIndex;
      const found = formatedCredits.crew.find((element, index) => {
        crewIndex = index;
        return element.name == credits.crew[i].name
      });
      if (!found) {
        formatedCredits.crew = [...formatedCredits.crew, { name: credits.crew[i].name, jobs: [credits.crew[i].job] }]
      } else {
        formatedCredits.crew[crewIndex].jobs.push(credits.crew[i].job)
      }
    }

    formatedCredits.crew = formatedCredits.crew.sort((a, b) => b.jobs.length - a.jobs.length).slice(0, 6)

    return formatedCredits
  }

  return (
    <Section>
      {movie &&
        <div className='p-8 flex items-center gap-8 relative overflow-hidden'>
          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='absolute left-0 top-0 h-full w-full object-cover z-0 blur-md' alt="movie backdrop" />
          <div className='absolute left-0 top-0 h-full w-full z-0 bg-movieBackground opacity-60'></div>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='relative z-10 rounded-md h-fit w-[300px]' alt="movie poster" />
          <div className='relative z-10'>
            <h2 className='text-3xl font-bold text-[#efefef] mb-2'>{movie.title} <span className='text-[#999] text-xl'>({formatDate(movie.release_date).year})</span></h2>
            <div className='flex gap-4 items-center'>
              <span style={{ border: '1px solid #999', color: '#999', padding: '2px' }}>PG-13</span><span>{formatDate(movie.release_date).date}</span><span>{formatGenres(movie.genres)}</span><span>{formateMovieDuration(movie.runtime)}</span>
            </div>
            <p className='text-[#bbb] italic mt-4'>{movie.tagline}</p>
            <div className='flex flex-col gap-2 mb-4'>
              <h3 className='font-bold text-xl mt-4'>Synopse</h3>
              <p>{movie.overview}</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
              {formatCredits(movieCredits).crew.map((movieCredit, index) => {
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
      }
      <div className='grid grid-cols-[1fr_auto]'>
        <div>
          {movieCredits &&
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
                {movieCredits.cast.slice(0, 10).map((cast, index) => {
                  return (
                    <div className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[125px] mr-3' key={index}>
                      <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt="cast profile picture" />
                      <div className='p-2'>
                        <p className='font-semibold'>{cast.name}</p>
                        <span className='text-sm'>{cast.character}</span>
                      </div>
                    </div>
                  )
                })}
              </Flickity>
              <NavLink to={`/movie/${id}/cast`}>Full Cast & Crew</NavLink>
            </div>
          }
          {movieRecommendations &&
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
                {movieRecommendations.map((recommendationMovie, index) => {
                  return (
                    <div key={index} className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[125px] mr-3'>
                      <NavLink to={`/movie/${recommendationMovie.id}`} reloadDocument>
                        <img src={`https://image.tmdb.org/t/p/original/${recommendationMovie.poster_path}`} alt="movie poster" />
                      </NavLink>
                      <div className='p-2'>
                        <p className='font-semibold'>{recommendationMovie.title}</p>
                      </div>
                    </div>
                  )
                })}
              </Flickity>
            </div>
          }
        </div>
        {movie && movieKeywords &&
          <div className='max-w-[250px] p-4 relative'>
            <div className='absolute top-0 -left-10 h-full w-10 z-10 bg-gradient-to-l from-[#1A161F] to-transparent'></div>
            <p className='flex flex-col mb-4'>
              <span className='font-semibold'>Status</span>
              <span>{movie.status}</span>
            </p>
            <p className='flex flex-col mb-4'>
              <span className='font-semibold'>Original Language</span>
              <span>{movie.original_language}</span>
            </p>
            <p className='flex flex-col mb-4'>
              <span className='font-semibold'>Budget</span>
              <span>${new Intl.NumberFormat('de-DE').format(movie.budget)}</span>
            </p>
            <p className='flex flex-col mb-4'>
              <span className='font-semibold'>Revenue</span>
              <span>${new Intl.NumberFormat('de-DE').format(movie.revenue)}</span>
            </p>
            <div>
              <span className='font-semibold'>KeyWords</span>
              <div className='flex flex-wrap pr-2 gap-2'>
                {movieKeywords.map((keyword, index) => {
                  return (
                    <span key={index} className='text-sm bg-[#444] p-1 rounded-sm'>{keyword.name}</span>
                  )
                })}
              </div>
            </div>
          </div>
        }
      </div>
    </Section >
  )
}

export default Movie