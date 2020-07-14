import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import Header from '../components/layout/Header'

const Container = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`

const FirstSection = () => {
	const fade = useSpring({
		config: { duration: 1000 },
		from: { opacity: 0 },
		to: { opacity: 1 },
	})

	const scale = useSpring({
		config: { duration: 250 },
		from: { transform: 'scale(0.1)' },
		to: { transform: 'scale(1.0)' },
	})
	return (
		<Container backgroundColor='#fff' className='sidePadding'>
			<animated.div style={fade}>
				<animated.div style={scale}>
					<Header />
				</animated.div>
			</animated.div>
		</Container>
	)
}

export default FirstSection
