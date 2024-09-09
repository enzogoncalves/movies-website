import { useEffect, useState } from 'react'
import { FaFireAlt, FaStar } from 'react-icons/fa'
import { Loading } from '../components/Loading'
import { MediaCarousel } from '../components/MediaCarousel'

import "../assets/css/tailwind.css"
import { Section } from '../components/Section/styles'
import { TvShowDetails } from "../interfaces/TvShow"
import { api } from "../libs/axios"
import { Helmet } from "react-helmet-async"

const api_key = import.meta.env.VITE_TMDB_API_KEY;

interface TvShowsResponse {
	results: TvShowDetails[]
}

export const TvShows = () => {
  const [trendingTvShows, setTrendingTvShows] = useState<TvShowDetails[]>()
  const [topRatedTvShows, setTopRatedTvShows] = useState<TvShowDetails[]>()
	
	async function getTopRatedTvShowsData() {
		const response = await api.get<TvShowsResponse>(`tv/top_rated?api_key=${api_key}&language=en-US&page=1&region=US`)
	
		setTrendingTvShows(response.data.results)
	}
	
	async function getTrendingTvShowsData() {
		const response = await api.get<TvShowsResponse>(`trending/tv/day?api_key=${api_key}`)
	
		setTopRatedTvShows(response.data.results)
	}

  useEffect(() => {
		getTopRatedTvShowsData()
    getTrendingTvShowsData()
  }, [])

  return (
    <Section style={{
      gridArea: 'movie-content',
    }}>
			<Helmet title='TV Shows'/>

      {trendingTvShows
        ? <MediaCarousel type="tv-show" data={trendingTvShows} sectionTitle="Trending Tv Shows" icon={<FaFireAlt size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
        : <Loading />
      }
      {topRatedTvShows
        ? <MediaCarousel type="tv-show" data={topRatedTvShows} sectionTitle="Top Rated Tv Shows" icon={<FaStar size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
        : <Loading />
      }
    </Section>
  )
}