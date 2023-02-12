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
    return `${day} ${month}, ${year}`;
  } else {
    return `${day} ${month}`;
  }
}

const UpcomingMovie = ({ upcomingMovie }) => {
  return (
    <C.Movie  >
      <Link to={`/movie/${upcomingMovie.id}`} style={{ textDecoration: 'none', color: '#efefef' }}>
        <C.MoviePoster src={`https://image.tmdb.org/t/p/w500${upcomingMovie.backdrop_path}`} />
        <C.MovieTitle>{upcomingMovie.title} | {transformReleaseDate(upcomingMovie.release_date)}</C.MovieTitle>
      </Link>
      <C.MovieDesc>{upcomingMovie.overview}</C.MovieDesc>
    </C.Movie>
  )
}

export { UpcomingMovie, transformReleaseDate }