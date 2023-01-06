import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Section } from '../components/Section/styles'
import MovieCredits from '../components/MovieCredits'
import MovieRecommendations from '../components/MovieRecommendations'
import MovieKeywords from '../components/movieKeywords'
import MovieHeader from '../components/MovieHeader'

import "../assets/css/tailwind.css"

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



  return (
    <Section>
      {movie &&
        <MovieHeader movie={movie} movieCredits={movieCredits} />
      }
      <div className='grid grid-cols-[1fr_auto]'>
        <div>
          {movieCredits &&
            <MovieCredits movieCredits={movieCredits} id={id} />
          }
          {movieRecommendations &&
            (movieRecommendations.length > 0 && <MovieRecommendations movieRecommendations={movieRecommendations} />)
          }
        </div>
        {movie && movieKeywords &&
          <MovieKeywords movie={movie} movieKeywords={movieKeywords} />
        }
      </div>
    </Section >
  )
}

export default Movie