import React from 'react'
import FirstSection from './sections/FirstSection'
import Expertise from './sections/Expertise'
import LatestWork from './sections/LatestWork'
import HowWeWork from './sections/HowWeWork'
import Form from './sections/Form'
import './App.scss'
import Footer from './components/layout/Footer'

function App() {
	return (
		<>
			<FirstSection />
			<Expertise />
			<LatestWork />
			<HowWeWork />
			<Form />
			<Footer />
		</>
	)
}

export default App
