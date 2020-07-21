import React from 'react'
import './App.scss'
import FirstSection from './sections/FirstSection'
import Expertise from './sections/Expertise'
import LatestWork from './sections/LatestWork'
import HowWeWork from './sections/HowWeWork'
import Form from './sections/Form'
import Footer from './components/layout/Footer'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
	return (
		<LanguageProvider>
			<FirstSection />
			<Expertise />
			<LatestWork />
			<HowWeWork />
			<Form />
			<Footer />
		</LanguageProvider>
	)
}

export default App
