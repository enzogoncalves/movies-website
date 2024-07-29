import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/default";
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { CastPage } from './pages/Cast';
import { Search } from './pages/Search';
import { Tv } from './pages/TvShow';
import { TvShows } from './pages/TvShows';
import { ErrorPage } from "./pages/ErrorPage";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />} errorElement={<ErrorPage />}>
				<Route path="/" element={<Home />}/>
				<Route path="/movie/:id" element={<Movie />}/>
				<Route path="/movie/:id/cast" element={<CastPage type="movie"/>}/>
				<Route path="/search" element={<Search />}/>
				<Route path="/tv-shows" element={<TvShows />}/>
				<Route path="/tv-show" element={<Tv />}/>
				<Route path="/tv-show/:id" element={<Tv />}/>
				<Route path="/tv-show/:id/cast" element={<CastPage type="tv"/>}/>
			</Route>
		</Routes>
	)
}