import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { MediaCredits } from '../components/MediaCredits'
import { MediaHeader } from '../components/MediaHeader'
import { MediaKeywords } from '../components/MediaKeywords'
import { MediaRecommendations } from '../components/MediaRecommendations'

import "../assets/css/tailwind.css"
import { TvShowDetails } from '../interfaces/TvShow'
import { api } from '../libs/axios'
import { Keyword } from '../interfaces/Keywords'
import { Crew } from '../interfaces/Crew'
import { Cast } from '../interfaces/Cast'
import { Section } from '../components/Section/styles'
import { AppContext } from '../contexts/AppContext'
import { MovieDetails } from '../interfaces/Movie'

const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const Tv = () => {
	const { windowWidth } = useContext(AppContext)

  document.title = 'Tv Show'

  const { id } = useParams();
  const [tv, setTv] = useState()
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
      {(tv && tvCredits)
        ? <MediaHeader media={tv} mediaCredits={tvCredits.crew} type='tv' />
        : <Loading type='mediaHeader' active={true} />
      }
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] relative'>
				<div>
          {tvCredits
            ? <MediaCredits mediaCredits={tvCredits.cast} id={id} type={'tv-show'} />
            : <Loading active={true} />
          }
          {tvRecommendations
            ? (tvRecommendations.length > 0 && <MediaRecommendations mediaRecommendations={tvRecommendations} type="tv-show" />)
            : <Loading active={true} />
          }
        </div>
        {(tv && tvKeywords)
          ? <MediaKeywords media={tv} mediaKeywords={tvKeywords}/>
          : <Loading type='mediaKeywords' active={true} />
        }
      </div>

    </Section >
  )
}