import React, { createContext, useReducer } from 'react'

const initialState = 'en'

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
