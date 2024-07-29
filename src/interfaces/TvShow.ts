import { Genre } from "./Movie"

export interface TvShow {
	id: number
  backdrop_path: string
  genre_ids: Array<any>
  name: string
  original_language: string
  original_name: string
  overview: string
  poster_path: string
  first_air_date: string
}

export interface TvShowDetails extends TvShow {
	episode_run_time: Array<any>
	tagline: String
	genres: Genre[]
	production_companies: Array<any>
	last_episode_to_air: {
		runtime: number
	}
	status: string
	number_of_episodes: number
	number_of_seasons: number
}