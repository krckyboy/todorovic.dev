import React from 'react'
import FirstSection from './sections/FirstSection'
import Expertise from './sections/Expertise'
import LatestWork from './sections/LatestWork'
import './App.scss'
import Footer from './components/layout/Footer'

function App() {
	return (
		<>
			<FirstSection />
			<Expertise />
			<LatestWork />
			<Footer />
		</>
	)
}

export default App
