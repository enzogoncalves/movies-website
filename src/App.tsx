import {
	BrowserRouter
} from "react-router-dom";

import { AppContextProvider } from "./contexts/AppContext";
import './index.css';
import { Router } from "./router";

import './assets/css/flickity.css'
import "./assets/css/tailwind.css"

export function App() {
  return (
    <BrowserRouter>
			<AppContextProvider>
				<Router />
			</AppContextProvider>
		</BrowserRouter>
  )
}
