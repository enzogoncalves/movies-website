export interface Movie {
	poster_path: string;
  id: number;
  original_title: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<any>;
  homepage: string;
  original_language: string;
  overview: string;
  release_date: string;
  title: string;
}

export interface MovieDetails extends Movie {
	revenue: number
	runtime: number
	tagline: string
	budget: number
	genres: Genre[]
	production_companies: Array<any>
	status: string
}

export interface ProductionCompanie {
	id: number
	logo_path: string
	name: string
	origin_country: string
}

export interface Genre {
	id: number
	name: string
}