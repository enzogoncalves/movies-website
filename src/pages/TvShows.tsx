import { useEffect, useState } from 'react'
import { FaFireAlt, FaStar } from 'react-icons/fa'
import { Loading } from '../components/Loading'
import { MediaCarousel } from '../components/MediaCarousel'

import "../assets/css/tailwind.css"
import { Section } from '../components/Section/styles'

const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const TvShows = () => {
  document.title = 'Tv Shows'

  const [trendingTvShows, setTrendingTvShows] = useState()
  const [topRatedTvShows, setTopRatedTvShows] = useState()

  useEffect(() => {
    const fetchMoviesData = async () => {
      const topRatedTvShowsFetch = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1&region=US`)
      const topRatedTvShowsData = await topRatedTvShowsFetch.json()

      const trendingTvShowsFetch = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
      const trendingTvShowsData = await trendingTvShowsFetch.json()

      setTrendingTvShows(trendingTvShowsData.results)
      setTopRatedTvShows(topRatedTvShowsData.results)
    }

    fetchMoviesData()
  }, [])

  return (
    <Section style={{
      gridArea: 'movie-content',
    }}>
      {trendingTvShows
        ? <MediaCarousel type="tv-show" data={trendingTvShows} sectionTitle="Trending Tv Shows" icon={<FaFireAlt size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
        : <Loading active/>
      }
      {topRatedTvShows
        ? <MediaCarousel type="tv-show" data={topRatedTvShows} sectionTitle="Top Rated Tv Shows" icon={<FaStar size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
        : <Loading active/>
      }
    </Section>
  )
}