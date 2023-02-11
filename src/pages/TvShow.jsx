import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Section } from '../components/Section/styles'
import MediaCredits from '../components/MediaCredits'
import MediaRecommendations from '../components/MediaRecommendations'
import MediaKeywords from '../components/MediaKeywords'
import MediaHeader from '../components/MediaHeader'
import Loading from '../components/Loading'

import "../assets/css/tailwind.css"


const Movie = () => {
  document.title = 'Tv Show'

  const { id } = useParams();
  const [tv, setTv] = useState()
  const [tvCredits, setTvCredits] = useState()
  const [tvKeywords, setTvKeywords] = useState()
  const [tvRecommendations, setTvRecommendations] = useState();

  useEffect(() => {
    const getMovieData = async () => {
      const tvData = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US`)
      const tvRes = await tvData.json();

      const tvCreditsData = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US`)
      const tvCreditsRes = await tvCreditsData.json();

      const tvKeyWordsData = await fetch(`https://api.themoviedb.org/3/tv/${id}/keywords?api_key=c2b569d95e4b2013348fb2f4430655a5`)
      const tvKeywordsRes = await tvKeyWordsData.json()

      const tvRecommendationsData = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US&page=1`)
      const tvRecommendationsRes = await tvRecommendationsData.json()

      setTv(tvRes)
      setTvCredits(tvCreditsRes)
      setTvKeywords(tvKeywordsRes.results)
      setTvRecommendations(tvRecommendationsRes.results)
    }

    getMovieData()
  }, [])



  return (
    <Section>
      {tv
        ? <MediaHeader media={tv} mediaCredits={tvCredits} type='tv' />
        : <Loading type='mediaHeader' />
      }
      <div className='grid grid-cols-[1fr_auto]'>
        <div>
          {tvCredits
            ? <MediaCredits mediaCredits={tvCredits} id={id} />
            : <Loading />
          }
          {tvRecommendations
            ? (tvRecommendations.length > 0 && <MediaRecommendations mediaRecommendations={tvRecommendations} type="tv-show" />)
            : <Loading />
          }
        </div>
        {(tv && tvKeywords)
          ? <MediaKeywords media={tv} mediaKeywords={tvKeywords} />
          : <Loading type='mediaKeywords' />
        }
      </div>

    </Section >
  )
}

export default Movie