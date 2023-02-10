import React from 'react'
import "../../assets/css/tailwind.css"


const MediaHeader = ({ media, mediaCredits, type }) => {

  function formatGenres(genres) {
    let genreString = '';
    genres.forEach((genre, index) => {
      if (index == genres.length - 1) {
        genreString += `${genre.name}`
      } else {
        genreString += `${genre.name}, `
      }
    })

    return genreString;
  }

  function formatCredits(credits) {
    let formatedCredits = { crew: [] };

    for (let i = 0; i < credits.crew.length; i++) {
      let crewIndex;
      const found = formatedCredits.crew.find((element, index) => {
        crewIndex = index;
        return element.name == credits.crew[i].name
      });
      if (!found) {
        formatedCredits.crew = [...formatedCredits.crew, { name: credits.crew[i].name, jobs: [credits.crew[i].job] }]
      } else {
        formatedCredits.crew[crewIndex].jobs.push(credits.crew[i].job)
      }
    }

    formatedCredits.crew = formatedCredits.crew.sort((a, b) => b.jobs.length - a.jobs.length).slice(0, 6)

    return formatedCredits
  }

  function formatDate(releaseDate) {
    let dateData;
    if (releaseDate.length == 10) {
      dateData = {
        year: releaseDate.split('-')[0],
        date: `${releaseDate.split('-')[1]}-${releaseDate.split('-')[2]}-${releaseDate.split('-')[0]}`
      }
    } else {
      let date = releaseDate.slice(0, releaseDate.indexOf('T'))
      date = date.split('-');
      const day = date[2]
      let month = date[1]
      const year = date[0]
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      month = months[month - 1];

      dateData = {
        date: `${month} ${day}, ${year}`
      }
    }

    return dateData;
  }

  function formatMediaDuration(runtime) {
    let hours = Math.floor(runtime / 60);
    let minutes = runtime - (hours * 60);
    if (minutes === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${minutes}m`;
    }

  }

  if (type == 'movie') {
    return (
      <div className='p-8 flex items-center gap-8 relative overflow-hidden'>
        <img src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`} className='absolute left-0 top-0 h-full w-full object-cover z-0 blur-md' alt="movie backdrop" />
        <div className='absolute left-0 top-0 h-full w-full z-0 bg-movieBackground opacity-60'></div>
        <img src={`https://image.tmdb.org/t/p/original${media.poster_path}`} className='relative z-10 rounded-md h-fit w-[300px]' alt="movie poster" />
        <div className='relative z-10'>
          <h2 className='text-3xl font-bold text-[#efefef] mb-2'>{media.title} <span className='text-[#999] text-xl'>({formatDate(media.release_date).year})</span></h2>
          <div className='flex gap-4 items-center'>
            <span>{formatDate(media.release_date).date}</span><span>{formatGenres(media.genres)}</span><span>{formatMediaDuration(media.runtime)}</span>
          </div>
          <p className='text-[#bbb] italic mt-4'>{media.tagline}</p>
          <div className='flex flex-col gap-2 mb-4'>
            <h3 className='font-bold text-xl mt-4'>Synopse</h3>
            <p>{media.overview}</p>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {formatCredits(mediaCredits).crew.map((movieCredit, index) => {
              return (
                <div key={index} className='flex flex-col gap-2'>
                  <p className='font-semibold'>{movieCredit.name}</p>
                  <div className='text-sm flex flex-wrap gap-1 max-w-max'>
                    {movieCredit.jobs.map((job, index2) => {
                      if (index2 == movieCredit.jobs.length - 1) {
                        return <span key={index2}>{job}</span>
                      } else {
                        return <span key={index2}>{job}, </span>
                      }
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  } else if (type == 'tv') {
    return (
      <div className='p-8 flex items-center gap-8 relative overflow-hidden'>
        <img src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`} className='absolute left-0 top-0 h-full w-full object-cover z-0 blur-md' alt="tv show backdrop" />
        <div className='absolute left-0 top-0 h-full w-full z-0 bg-movieBackground opacity-60'></div>
        <img src={`https://image.tmdb.org/t/p/original${media.poster_path}`} className='relative z-10 rounded-md h-fit w-[300px]' alt="tv show poster" />
        <div className='relative z-10'>
          <h2 className='text-3xl font-bold text-[#efefef] mb-2'>{media.name} <span className='text-[#999] text-xl'>({formatDate(media.first_air_date).year})</span></h2>
          <div className='flex gap-4 items-center'>
            <span>{formatDate(media.first_air_date).date}</span><span>{formatGenres(media.genres)}</span><span>{formatMediaDuration(media.episode_run_time[0])}</span>
          </div>
          <p className='text-[#bbb] italic mt-4'>{media.tagline}</p>
          <div className='flex flex-col gap-2 mb-4'>
            <h3 className='font-bold text-xl mt-4'>Synopse</h3>
            <p>{media.overview}</p>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {formatCredits(mediaCredits).crew.map((movieCredit, index) => {
              return (
                <div key={index} className='flex flex-col gap-2'>
                  <p className='font-semibold'>{movieCredit.name}</p>
                  <div className='text-sm flex flex-wrap gap-1 max-w-max'>
                    {movieCredit.jobs.map((job, index2) => {
                      if (index2 == movieCredit.jobs.length - 1) {
                        return <span key={index2}>{job}</span>
                      } else {
                        return <span key={index2}>{job}, </span>
                      }
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default MediaHeader