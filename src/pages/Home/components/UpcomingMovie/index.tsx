import { NavLink } from 'react-router-dom'
import * as C from './styles'
import { MovieDetails } from '../../../../interfaces/Movie'
import { transformReleaseDate } from '../../../../utils/functions'

const UpcomingMovie = ({ upcomingMovie }: { upcomingMovie: MovieDetails }) => {
  return (
    <C.Movie>
      <NavLink to={`/movie/${upcomingMovie.id}`} style={{ textDecoration: 'none', color: '#efefef' }}>
        <C.MoviePoster src={`https://image.tmdb.org/t/p/w500${upcomingMovie.backdrop_path}`} />
        <C.MovieTitle>{upcomingMovie.title} | {transformReleaseDate(upcomingMovie.release_date)}</C.MovieTitle>
      </NavLink>
      <C.MovieDesc>{upcomingMovie.overview}</C.MovieDesc>
    </C.Movie>
  )
}

export { transformReleaseDate, UpcomingMovie }
