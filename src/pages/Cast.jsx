import React, { useEffect, useState } from 'react'
import { Section } from '../components/Section/styles'
import { Link, useParams } from 'react-router-dom'
import { HiArrowSmLeft } from 'react-icons/hi'
import { IoPerson } from 'react-icons/io5'
import { MdHideImage } from 'react-icons/md'

import "../assets/css/tailwind.css"

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

const Cast = ({ type }) => {
  document.title = "Cast & Crew"

  const { id } = useParams();
  const [media, setMedia] = useState()
  const [movieCredits, setMediaCredits] = useState()

  useEffect(() => {
    const getMediaData = async () => {
      const mediaData = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US`)
      const mediaRes = await mediaData.json();

      const mediaCreditsData = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US`)
      const mediaCreditsRes = await mediaCreditsData.json();

      setMedia(mediaRes)
      setMediaCredits(mediaCreditsRes)

      filterCrew(mediaCreditsRes.crew)
    }

    getMediaData()
  }, [])

  return (
    <Section>
      {media && type == 'movie' &&
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center pt-4 pb-4 pl-6 pr-6 bg-[#444]'>
          {media.poster_path
            ? <img src={`https://image.tmdb.org/t/p/w300${media.poster_path}`} alt="movie poster" className='max-h-[100px]' />
            : <MdHideImage className='h-[100px] w-[66px]'></MdHideImage>
          }
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl sm:text-3xl font-bold text-[#efefef]'>{media.title} <span className='text-[#999] text-xl'>({media.release_date.split('-')[0]})</span></h2>
            <Link to={`/movie/${id}`} className='flex items-center gap-1 text-gray-300 font-semibold hover:underline'><HiArrowSmLeft className='text-2xl' />Back to main</Link>
          </div>
        </div>
      }

      {media && type == 'tv' &&
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center pt-4 pb-4 pl-6 pr-6 bg-[#444]'>
          {media.poster_path
            ? <img src={`https://image.tmdb.org/t/p/w300${media.poster_path}`} alt="tv-show poster" className='max-h-[100px]' />
            : <MdHideImage className='h-[100px] w-[66px]'></MdHideImage>
          }
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl sm:text-3xl font-bold text-[#efefef]'>{media.name} <span className='text-[#999] text-xl'>({media.first_air_date.split('-')[0]})</span></h2>
            <Link to={`/tv-show/${id}`} className='flex items-center gap-1 text-gray-300 font-semibold hover:underline'><HiArrowSmLeft className='text-2xl' />Back to main</Link>
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