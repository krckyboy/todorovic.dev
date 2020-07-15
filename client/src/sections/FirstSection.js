import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import Header from '../components/layout/Header'
import preferences from '../preferences'
import MainButton from '../components/MainButton'

const Container = styled.div`
	padding-top: 20px;
	padding-bottom: 88px;
	max-width: 100%;
`

const Content = styled.div`
`

const Illustration = styled.img`
	max-width: 100%;
	margin-bottom: 32px;

	@media (min-width: 960px) {
		max-width: 45%;
		order: 2;
		flex: 0 1 40%;
		margin-bottom: 0;
	}

	@media (min-width: 1400px) {
		max-width: 60%;
		order: 2;
		flex: 0 1 40%;
		margin-bottom: 0;
	}
`

const TextContainer = styled.div`
	font-size: 20px;

	@media (min-width: 960px) {
		flex: 1 0 30%;
		min-width: 426px;
		margin-right: 64px;
	}

	* {
		margin-top: 16px;
	}

	span {
		color: ${preferences.colors.main};
		font-weight: 600;
	}

	h1 {
		color: ${preferences.colors.secondaryMain};
		font-size: 40px;
		font-weight: bold;
		line-height: 61px;
	}

	p {
		color: ${preferences.colors.neutral};
	}

	button {
		margin-top: 32px;
	}

	@media (min-width: 960px) {
		order: 1;
		max-width: 30%;
	}
`

const FlexContainer = styled.div`
	@media (min-width: 960px) {
		display: flex;
		justify-content: space-between;
	}
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
					<Content className='maxWidth'>
						<Header />
						<FlexContainer>
							<Illustration src='illustration1.svg' alt='Illustration' />
							<TextContainer>
								<span>Web Development Company</span>
								<h1>Creating websites with confidence.</h1>
								<p className='commonText'>
									We develop clean and optimized websites which are adapted for
									phones, tablets, laptops, and desktop computers.
								</p>
								<MainButton>CONTACT US</MainButton>
							</TextContainer>
						</FlexContainer>
					</Content>
				</animated.div>
			</animated.div>
		</Container>
	)
}

export default FirstSection
