import React, { useContext, useState } from 'react'
import './App.scss'
import FirstSection from './sections/FirstSection'
import Expertise from './sections/Expertise'
import LatestWork from './sections/LatestWork'
import HowWeWork from './sections/HowWeWork'
import Form from './sections/Form'
import Footer from './components/layout/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import { languageStore } from './contexts/LanguageContext'

const Home = () => (
	<>
		<FirstSection />
		<Expertise />
		<LatestWork />
		<HowWeWork />
		<Form />
		<Footer />
	</>
)

// function App() {
// 	const language = useContext(languageStore)
// 	return (
// 		<LanguageProvider>
// 			<Router onUpdate={() => window.scrollTo(0, 0)} basename={`${language}`}>
// 				<Switch>
// 					<Route path='/' exact component={Home} />
// 					<Redirect to='/' />
// 				</Switch>
// 			</Router>
// 		</LanguageProvider>
// 	)
// }

// function App() {
// 	const language = useContext(languageStore)
// 	const supportedLanguages = ['en', 'rs']

// 	return (
// 		<LanguageProvider>
// 			<Router onUpdate={() => window.scrollTo(0, 0)}>
// 				<Switch>
// 					<Route
// 						path='/:lang/'
// 						render={(props) =>
// 							supportedLanguages.includes(props.match.params.lang) ? (
// 								<Home {...props} />
// 							) : (
// 								<Redirect to={`/${language}`} />
// 							)
// 						}
// 					/>
// 					<Redirect to={`/${language}`} />
// 				</Switch>
// 			</Router>
// 		</LanguageProvider>
// 	)
// }

function App() {
	const { state: language } = useContext(languageStore)
	const supportedLanguages = ['en', 'rs']
	console.log('Language in context: ', language)
	return (
		<Router onUpdate={() => window.scrollTo(0, 0)}>
			<Switch>
				<Route
					path='/:lang/'
					exact
					render={(props) =>
						supportedLanguages.includes(props.match.params.lang) ? (
							<Home {...props} />
						) : (
							<Redirect to={`/${language}`} />
						)
					}
				/>
				<Redirect to={`/${language}`} />
			</Switch>
		</Router>
	)
}

// function App() {
// 	const { state: language } = useContext(languageStore)
// 	console.log(language)
// 	return (
// 		<Router onUpdate={() => window.scrollTo(0, 0)} basename={`${language}`}>
// 			<Switch>
// 				<Route path='/' exact component={Home} />
// 				<Redirect to='/' />
// 			</Switch>
// 		</Router>
// 	)
// }

function AppWrapper({ children }) {
	return <LanguageProvider>{children}</LanguageProvider>
}

function WrappedApp() {
	return (
		<AppWrapper>
			<App />
		</AppWrapper>
	)
}

export default WrappedApp
