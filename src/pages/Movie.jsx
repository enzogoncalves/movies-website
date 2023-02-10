import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Section } from '../components/Section/styles'
import MediaCredits from '../components/MediaCredits'
import MediaRecommendations from '../components/MediaRecommendations'
import MediaKeywords from '../components/MediaKeywords'
import MediaHeader from '../components/MediaHeader'
import Loading from '../components/Loading'

import "../assets/css/tailwind.css"


const Movie = () => {
  document.title = 'Movie'

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
      {movie
        ? <MediaHeader media={movie} mediaCredits={movieCredits} type='movie' />
        : <Loading type='mediaHeader' />
      }
      <div className='grid grid-cols-[1fr_auto]'>
        <div>
          {movieCredits
            ? <MediaCredits mediaCredits={movieCredits} id={id} />
            : <Loading />
          }
          {movieRecommendations
            ? (movieRecommendations.length > 0 && <MediaRecommendations mediaRecommendations={movieRecommendations} type="movie" />)
            : <Loading />
          }
        </div>
        {(movie && movieKeywords)
          ? <MediaKeywords media={movie} mediaKeywords={movieKeywords} />
          : <Loading type='mediaKeywords' />
        }
      </div>
    </Section >
  )
}

export default Movie