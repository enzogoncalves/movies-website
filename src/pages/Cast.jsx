import React, { useEffect, useState } from 'react'
import { Section } from '../components/Section/styles'
import { Link, useParams } from 'react-router-dom'
import { HiArrowSmLeft } from 'react-icons/hi'
import { IoFastFood, IoPerson } from 'react-icons/io5'

import "../assets/css/tailwind.css"


const Cast = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState()
  const [movieCredits, setMovieCredits] = useState()

  useEffect(() => {
    const getMovieData = async () => {
      const movieData = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US`)
      const movieRes = await movieData.json();

      const movieCreditsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US`)
      const movieCreditsRes = await movieCreditsData.json();

      setMovie(movieRes)
      setMovieCredits(movieCreditsRes)

      filterCrew(movieCreditsRes.crew)
    }

    getMovieData()

  }, [])

  function filterCrew(movieCrew) {
    const filteredCrew = { departments: [] };
    movieCrew.forEach((crew, index) => {
      let departmentIndex = -1;
      filteredCrew.departments.find((department, i) => {
        if (department.name == crew.department) {
          departmentIndex = i;
        } else {
          departmentIndex = -1;
        }
      })

      if (departmentIndex != -1) {

      }
    })

    // movieCrew.forEach((crew) => {
    //   {let departmentIndex = false;
    //   let crewIndex = false;
    //   filteredCrew.departments.find((element, i) => {
    //     if (element.department == crew.department) {
    //       departmentIndex = i;
    //       return element.department == crew.department
    //     } else {
    //       departmentIndex = false;
    //     }

    //     element.crew.find((element2, j) => {
    //       if (element2.name == crew.name) {
    //         crewIndex = j;
    //         departmentIndex = i;
    //       } else {
    //         crewIndex = false;
    //         departmentIndex = false;
    //       }
    //     })
    //   });

    //   if (departmentIndex === false) {
    //     filteredCrew.departments.push({ department: crew.department, crew: [crew] })
    //     console.log('a')
    //     return;
    //   }

    //   if (crewIndex !== false) {
    //     filteredCrew.departments[departmentIndex].crew[crewIndex].job == [filteredCrew.departments[departmentIndex].crew[crewIndex].job, crew.job];
    //     return;
    //   }

    //   if (departmentIndex !== false) {
    //     filteredCrew.departments[departmentIndex].crew.push(crew)
    //     console.log('c')
    //     return;
    //   }
    // })

    // let totalCrew = 0;
    // filteredCrew.departments.forEach((department) => {
    //   totalCrew += department.crew.length;
    // })

    // filteredCrew.total = totalCrew;
    // console.log(filteredCrew)
    // return filteredCrew}
  }

  return (
    <Section>
      {movie &&
        <div className='flex gap-4 items-center pt-4 pb-4 pl-6 pr-6 bg-[#444]'>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie poster" className='max-h-[100px]' />
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl font-bold text-[#efefef]'>{movie.title} <span className='text-[#999] text-xl'>({movie.release_date.split('-')[0]})</span></h2>
            <Link to={`/movie/${id}`} className='flex items-center gap-1 text-gray-300 font-semibold'><HiArrowSmLeft className='text-2xl' />Back to main</Link>
          </div>
        </div>
      }

      {movieCredits &&
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-lg mb-4'>Cast <span className='text-[#999]'>{movieCredits.cast.length}</span></h3>
            <div className='flex flex-col max-w-[400px] gap-4'>
              {movieCredits.cast.map((cast, index) => {
                return (
                  <div key={index} className='flex items-center gap-4'>
                    {cast.profile_path ? <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt="profile picture" className='w-[75px] h-[75px] rounded-md object-cover object-center' /> : <IoPerson className='w-[75px] h-[75px] p-[10px] rounded-md text-[#444] bg-[#efefef]' />
                    }
                    <div>
                      <p className='font-bold'>{cast.name}</p>
                      <span className='text-sm'>{cast.character}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* <div>
            <h3 className='text-lg mb-4'>Crew <span className='text-[#999]'>{filterCrew(movieCredits.crew).total}</span></h3>
            <div className='flex flex-col max-w-[400px] gap-4'>
              {filterCrew(movieCredits.crew).departments.map((department, index) => {
                return (
                  <div key={index} className='flex flex-col max-w-[400px] gap-4'>
                    <h4>{department.department}</h4>
                    {
                      department.crew.map((crew, index) => {
                        return (
                          <div key={index} className='flex items-center gap-4'>
                            {crew.profile_path ? <img src={`https://image.tmdb.org/t/p/w300${crew.profile_path}`} alt="profile picture" className='w-[75px] h-[75px] rounded-md object-cover object-center' /> : <IoPerson className='w-[75px] h-[75px] p-[10px] rounded-md text-[#444] bg-[#efefef]' />
                            }
                            <div>
                              <p className='font-bold'>{crew.name}</p>
                              <span className='text-sm'>{crew.job}</span>
                            </div>
                          </div>
                        )
                      }
                      )}
                  </div>
                )
              })}
            </div>
          </div> */}
        </div>
      }
    </Section>
  )
}

export default Cast