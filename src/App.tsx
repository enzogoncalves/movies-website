import {
	BrowserRouter
} from "react-router-dom";

import { AppContextProvider } from "./contexts/AppContext";
import './index.css';
import { Router } from "./router";

import './assets/css/flickity.css'
import "./assets/css/tailwind.css"
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
		<HelmetProvider>
			<Helmet titleTemplate="%s | MediaFy" />
			<BrowserRouter>
				<AppContextProvider>
					<Router />
				</AppContextProvider>
			</BrowserRouter>
		</HelmetProvider>
  )
}
