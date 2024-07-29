import { useContext, useEffect, useState } from 'react'
import { FaFireAlt, FaStar } from 'react-icons/fa'
import { GiPopcorn } from 'react-icons/gi'
import styled from "styled-components"
import { Loading } from '../../components/Loading'
import { MediaCarousel } from '../../components/MediaCarousel'
import { HomeSection } from './components/HomeSection/styles'
import { SectionTitle } from '../../components/SectionTitle'
import { UpcomingMovie } from './components/UpcomingMovie'
import { AppContext } from '../../contexts/AppContext'
import { MovieDetails } from '../../interfaces/Movie'
import { api } from '../../libs/axios'

const api_key = import.meta.env.VITE_TMDB_API_KEY;

const MovieSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  grid-area: upcoming-movies;
`

export const Home = () => {
  document.title = 'Home'
	const { windowWidth } = useContext(AppContext)

  const [trendingMovies, setTrendingMovies] = useState<MovieDetails[]>([])
  const [upcomingMovies, setUpcomingMovies] = useState<MovieDetails[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<MovieDetails[]>([])

	async function getTopRatedMoviesData() {
		const response = await api.get(`movie/top_rated?api_key=${api_key}&language=en-US&page=1&region=US`)

		setTopRatedMovies(response.data.results)
	}

	async function getUpcomingMoviesData() {
		const response = await api.get(`movie/upcoming?api_key=${api_key}&region=US&page=1&per_page=5`)

		const upcomingMoviesData = response.data.results.filter((movie: MovieDetails) => {
			return movie.backdrop_path !== null
		})

		setUpcomingMovies(upcomingMoviesData)
	}

	async function getTrendingMoviesData() {
		const response = await api.get(`trending/movie/day?api_key=${api_key}`)

		setTrendingMovies(response.data.results)
	}

  useEffect(() => {
    getTopRatedMoviesData()
		getUpcomingMoviesData()
		getTrendingMoviesData()
  }, [])

  return (
    <HomeSection display="grid">
			<div className={`${windowWidth >= 1189 && 'sticky top-20'}`}>
				{trendingMovies
					? <MediaCarousel type="movie" option={"trending-movies"} data={trendingMovies} sectionTitle="Trending Movies" icon={<FaFireAlt size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
					: <Loading active={true} />
				}
				{topRatedMovies
					? <MediaCarousel type="movie" option={"top-rated-movies"} data={topRatedMovies} sectionTitle="Top Rated Movies" icon={<FaStar size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
					: <Loading active={true} />
				}
			</div>
      {upcomingMovies && windowWidth <= 1189
        ? <MediaCarousel type="upcoming-movies" option={"upcoming-movies"} data={upcomingMovies} sectionTitle="Upcoming Movies" icon={<GiPopcorn size="1.25rem" style={{ marginLeft: '.75rem' }} />} />
        : <Loading active={windowWidth <= 1189} />
      }
      {upcomingMovies && windowWidth >= 1189
        ? <MovieSection>
          <SectionTitle sectionTitle="Upcoming Movies" icon={<GiPopcorn size="1.25rem" style={{ marginLeft: '.75rem' }} />} />
          {upcomingMovies.slice(0, 5).map((upcomingMovie, index) => (
            <UpcomingMovie upcomingMovie={upcomingMovie} key={index} />
          ))}
        </MovieSection>
        : <Loading type='upcomingMovies' active={windowWidth >= 1189} />
      }
    </HomeSection>
  )
}