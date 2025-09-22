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
import { api } from "../libs/axios"
import { Helmet } from "@dr.pogodin/react-helmet"

const api_key = import.meta.env.VITE_TMDB_API_KEY;

interface Credits {
	id: number
	cast: Cast[]
	crew: Crew[]
}

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetails>()
  const [movieCredits, setMovieCredits] = useState<{crew: Crew[]; cast: Cast[]}>({cast: [], crew: []})
  const [movieKeywords, setMovieKeywords] = useState<Keyword[]>()
  const [movieRecommendations, setMovieRecommendations] = useState<MovieDetails[]>();

	async function getMovieData() {
		const response = await api.get<MovieDetails>(`movie/${id}?api_key=${api_key}&language=en-US`)

		setMovie(response.data)
	}

	async function getMovieCreditsData() {
		const response = await api.get<Credits>(`movie/${id}/credits?api_key=${api_key}&language=en-US`)

		setMovieCredits(response.data)
	}

	async function getMovieKeywordsData() {
		const response = await api.get<{ keywords: Keyword[] }>(`movie/${id}/keywords?api_key=${api_key}`)

		setMovieKeywords(response.data.keywords)
	}

	async function getMovieRecommendations() {
		const response = await api.get<{ results: MovieDetails[] }>(`movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`)

		setMovieRecommendations(response.data.results)
	}



  useEffect(() => {
		getMovieData()
		getMovieCreditsData()
		getMovieKeywordsData()
		getMovieRecommendations()
  }, [])

  return (
    <Section>
			<Helmet title={`${movie?.title ? movie?.title : 'Movie'}`}/>

			<GoBackButton />

      {movie
        ? <MediaHeader media={movie} mediaCredits={movieCredits.crew} type='movie' />
        : <Loading type='mediaHeader' />
      }
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto]'>
        <div>
          {movieCredits
            ? <MediaCredits mediaCredits={movieCredits.cast} id={id} type={'movie'} />
            : <Loading />
          }
          {movieRecommendations
            ? (movieRecommendations.length > 0 && <MediaRecommendations mediaRecommendations={movieRecommendations} type="movie" />)
            : <Loading />
          }
        </div>
        {(movie && movieKeywords)
          ? <MediaKeywords media={movie} mediaKeywords={movieKeywords}/>
          : <Loading type='mediaKeywords' />
        }
      </div>
    </Section >
  )
}		