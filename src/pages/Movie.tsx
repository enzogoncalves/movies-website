import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { MediaCredits } from '../components/MediaCredits'
import { MediaHeader } from '../components/MediaHeader'
import { MediaKeywords } from '../components/MediaKeywords'
import { MediaRecommendations } from '../components/MediaRecommendations'

import "../assets/css/tailwind.css"
import { Cast } from '../interfaces/Cast'
import { Crew } from '../interfaces/Crew'
import { Keyword } from '../interfaces/Keywords'
import { MovieDetails } from '../interfaces/Movie'
import { Section } from '../components/Section/styles'
import { GoBackButton } from '../components/GoBackButton'

const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const Movie = () => {
  document.title = 'Movie'

  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetails>()
  const [movieCredits, setMovieCredits] = useState<{crew: Crew[]; cast: Cast[]}>({cast: [], crew: []})
  const [movieKeywords, setMovieKeywords] = useState<Keyword[]>()
  const [movieRecommendations, setMovieRecommendations] = useState<MovieDetails[]>();

  useEffect(() => {
    const getMovieData = async () => {
      const movieData = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      const movieRes = await movieData.json();

      const movieCreditsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`)
      const movieCreditsRes = await movieCreditsData.json();

      const movieKeyWordsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${api_key}`)
      const movieKeywordsRes = await movieKeyWordsData.json()

      const movieRecommendationsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`)
      const movieRecommendationsRes = await movieRecommendationsData.json()

      setMovie(movieRes)
      setMovieCredits(movieCreditsRes)
      setMovieKeywords(movieKeywordsRes.keywords as Keyword[])
      setMovieRecommendations(movieRecommendationsRes.results)
    }

    getMovieData()
  }, [])

  return (
    <Section>
			<GoBackButton />

      {movie
        ? <MediaHeader media={movie} mediaCredits={movieCredits.crew} type='movie' />
        : <Loading type='mediaHeader' active={true} />
      }
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto]'>
        <div>
          {movieCredits
            ? <MediaCredits mediaCredits={movieCredits.cast} id={id} type={'movie'} />
            : <Loading active={true} />
          }
          {movieRecommendations
            ? (movieRecommendations.length > 0 && <MediaRecommendations mediaRecommendations={movieRecommendations} type="movie" />)
            : <Loading active={true} />
          }
        </div>
        {(movie && movieKeywords)
          ? <MediaKeywords media={movie} mediaKeywords={movieKeywords}/>
          : <Loading type='mediaKeywords' active={true} />
        }
      </div>
    </Section >
  )
}		