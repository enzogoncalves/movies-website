import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { MediaCredits } from '../components/MediaCredits'
import { MediaHeader } from '../components/MediaHeader'
import { MediaKeywords } from '../components/MediaKeywords'
import { MediaRecommendations } from '../components/MediaRecommendations'

import "../assets/css/tailwind.css"
import { Section } from '../components/Section/styles'
import { Cast } from '../interfaces/Cast'
import { Crew } from '../interfaces/Crew'
import { Keyword } from '../interfaces/Keywords'
import { MovieDetails } from '../interfaces/Movie'
import { TvShowDetails } from '../interfaces/TvShow'
import { api } from '../libs/axios'
import { GoBackButton } from "../components/GoBackButton"
import { Helmet } from "react-helmet-async"

const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const Tv = () => {
  const { id } = useParams();
  const [tv, setTv] = useState<TvShowDetails | null>()
  const [tvCredits, setTvCredits] = useState<{ cast: Cast[], crew: Crew[]}>()
  const [tvKeywords, setTvKeywords] = useState<Keyword[]>()
  const [tvRecommendations, setTvRecommendations] = useState<TvShowDetails[] | MovieDetails[]>();

	async function getTvShowData() {
		const response = await api.get(`tv/${id}?api_key=${api_key}&language=en-US`)

		setTv(response.data)
	}

	async function getCreditsData() {
		const response = await api.get(`tv/${id}/credits?api_key=${api_key}&language=en-US`)

		setTvCredits(response.data)
	}

	async function getKeywordsData() {
		const response = await api.get(`tv/${id}/keywords?api_key=${api_key}`)

		setTvKeywords(response.data.results)
	}

	async function getTvRecommendationsData() {
		const response = await api.get(`tv/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`)

		setTvRecommendations(response.data.results)
	}

  useEffect(() => {
		getTvShowData()
		getCreditsData()
		getKeywordsData()
		getTvRecommendationsData()
  }, [])

	console.log(tvRecommendations)

  return (
    <Section className='relative'>
			<Helmet title={`${tv?.name ? tv.name : 'Tv Show'}`}/>

		<GoBackButton />
			
      {(tv && tvCredits)
        ? <MediaHeader media={tv} mediaCredits={tvCredits.crew} type='tv' />
        : <Loading type='mediaHeader' />
      }
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] relative'>
				<div>
          {tvCredits
            ? <MediaCredits mediaCredits={tvCredits.cast} id={id} type={'tv-show'} />
            : <Loading />
          }
          {tvRecommendations
            ? (tvRecommendations.length > 0 && <MediaRecommendations mediaRecommendations={tvRecommendations} type="tv-show" />)
            : <Loading />
          }
        </div>
        {(tv && tvKeywords)
          ? <MediaKeywords media={tv} mediaKeywords={tvKeywords}/>
          : <Loading type='mediaKeywords' />
        }
      </div>

    </Section >
  )
}