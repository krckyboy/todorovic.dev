import React, { createContext, useReducer } from 'react'

let initialState

// We fetch the language parameter from the url manually to set up the default state for context
const languageFromUrl = window.location.pathname.split('/')[1]
const acceptableLanguages = ['en', 'rs']

if (acceptableLanguages.includes(languageFromUrl)) {
	initialState = languageFromUrl
} else {
	initialState = 'en'
}

export const languageStore = createContext(initialState)

export const LanguageProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'Switch to English':
				return 'en'
			case 'Switch to Serbian':
				return 'rs'
			default:
				return 'en'
		}
	}, initialState)

	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

const { Provider } = languageStore
