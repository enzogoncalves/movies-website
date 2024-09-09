import { createContext, ReactNode, useMemo, useState } from "react";

interface AppContextType {
	navigationItems: {title: string; linkTo: string}[]
	windowWidth: number
}

export const AppContext = createContext({} as AppContextType)

interface AppContextProviderProps {
	children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

	console.log(windowWidth)
	
  window.addEventListener('resize', () => {
		setWindowWidth(window.innerWidth)
  })
	
	const navigationItems = useMemo(() => {
		return [{ title: 'Home', linkTo: '/' }, { title: 'Tv Shows', linkTo: '/tv-shows' }, { title: 'Search', linkTo: '/search' }]
	}, [])

	return (
		<AppContext.Provider value={{
			navigationItems: navigationItems,
			windowWidth: windowWidth,
		}}>
			{children}
		</AppContext.Provider>
	)
}