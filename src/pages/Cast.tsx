import { useEffect, useState } from 'react'
import { HiArrowSmLeft } from 'react-icons/hi'
import { IoPerson } from 'react-icons/io5'
import { MdHideImage } from 'react-icons/md'
import { NavLink, useParams } from 'react-router-dom'

import "../assets/css/tailwind.css"
import { Cast } from '../interfaces/Cast'
import { Movie } from '../interfaces/Movie'
import { TvShow } from '../interfaces/TvShow'
import { api } from '../libs/axios'
import { Section } from '../components/Section/styles'

const api_key = import.meta.env.VITE_TMDB_API_KEY;

// function filterCrew(movieCrew: Crew[]) {
//   const filteredCrew = { departments: [] };
//   movieCrew.forEach((crew, index) => {
//     let departmentIndex = -1;
//     filteredCrew.departments.find((department, i) => {
//       if (department.name == crew.department) {
//         departmentIndex = i;
//       } else {
//         departmentIndex = -1;
//       }
//     })

//     if (departmentIndex != -1) {

//     }
//   })

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
// }

interface CastProps {
	type: 'tv' | 'movie'
}

export const CastPage = ({ type }: CastProps) => {
  document.title = "Cast & Crew"

  const { id } = useParams();
  const [media, setMedia] = useState<TvShow | Movie>()
  const [mediaCredits, setMediaCredits] = useState<Cast[]>()

	async function getMediaData() {
		const response = await api.get(`${type}/${id}?api_key=${api_key}&language=en-US`)
		
		setMedia(response.data)
	}

	async function getMediaCreditsData() {
		const response = await api.get(`${type}/${id}/credits?api_key=${api_key}&language=en-US`)

		setMediaCredits(response.data.cast)
	}


  useEffect(() => {
    getMediaData()
		getMediaCreditsData()
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
            <h2 className='text-xl sm:text-3xl font-bold text-[#efefef]'>{(media as Movie).title} <span className='text-[#999] text-xl'>({(media as Movie).release_date.split('-')[0]})</span></h2>
            <NavLink to={`/movie/${id}`} className='flex items-center gap-1 text-gray-300 font-semibold hover:underline'><HiArrowSmLeft className='text-2xl' />Back to main</NavLink>
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
            <h2 className='text-xl sm:text-3xl font-bold text-[#efefef]'>{(media as TvShow).name} <span className='text-[#999] text-xl'>({(media as TvShow).first_air_date.split('-')[0]})</span></h2>
            <NavLink to={`/tv-show/${id}`} className='flex items-center gap-1 text-gray-300 font-semibold hover:underline'><HiArrowSmLeft className='text-2xl' />Back to main</NavLink>
          </div>
        </div>
      }

      {mediaCredits &&
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-lg mb-4'>Cast <span className='text-[#999]'>{mediaCredits.length}</span></h3>
            <div className='flex flex-col max-w-[400px] gap-4'>
              {mediaCredits.map((cast, index) => {
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
            <h3 className='text-lg mb-4'>Crew <span className='text-[#999]'>{filterCrew(mediaCredits.crew).total}</span></h3>
            <div className='flex flex-col max-w-[400px] gap-4'>
              {filterCrew(mediaCredits.crew).departments.map((department, index) => {
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