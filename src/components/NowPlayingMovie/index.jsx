import React from 'react'
import * as C from './styles'
import { Link } from 'react-router-dom'

function transformReleaseDate(releaseDate) {
  const date = releaseDate.split('-')
  const day = date[2]
  let month = date[1]
  const year = date[0]
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  month = months[month - 1];

  const currentYear = new Date().getFullYear();

  if (currentYear != year) {
    return ` | ${day} ${month}, ${year}`;
  } else {
    return ` | ${day} ${month}`;
  }
}


const NowPlayingMovie = ({ nowPlayingMovie }) => {
  return (
    <C.Movie  >
      <Link to={`/movie/${nowPlayingMovie.id}`} style={{ textDecoration: 'none', color: '#efefef' }}>
        <C.MoviePoster src={`https://image.tmdb.org/t/p/w500${nowPlayingMovie.backdrop_path}`} />
        <C.MovieTitle>{nowPlayingMovie.title}{transformReleaseDate(nowPlayingMovie.release_date)}</C.MovieTitle>
      </Link>
      <C.MovieDesc>{nowPlayingMovie.overview}</C.MovieDesc>
    </C.Movie>
  )
}

export default NowPlayingMovie