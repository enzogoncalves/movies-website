import { createContext, ReactNode, useMemo, useState } from "react";

interface AppContextType {
	lateralNavBarItems: {title: string; linkTo: string}[]
	headerLinks: {title: string; linkTo: string}[]
	windowWidth: number
}

export const AppContext = createContext({} as AppContextType)

interface AppContextProviderProps {
	children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
	
  window.addEventListener('resize', () => {
		setWindowWidth(window.innerWidth)
  })
	
	const lateralNavBarItems = useMemo(() => {
		return [{ title: 'Home', linkTo: '/' }, { title: 'Tv Shows', linkTo: '/tv-shows' }, { title: 'Search', linkTo: '/search' }]
	}, [])
	
	const headerLinks = useMemo(() => {
		return [{ title: 'Home', linkTo: '/' }, { title: 'Tv Shows', linkTo: '/tv-shows' }, { title: 'Search', linkTo: '/search' }]
	}, [])

	return (
		<AppContext.Provider value={{
			lateralNavBarItems: lateralNavBarItems,
			headerLinks: headerLinks,
			windowWidth: windowWidth,
		}}>
			{children}
		</AppContext.Provider>
	)
}