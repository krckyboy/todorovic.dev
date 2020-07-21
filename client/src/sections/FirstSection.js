import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import Header from '../components/layout/Header'
import preferences from '../preferences'
import MainButton from '../components/MainButton'
import { languageStore } from './../contexts/LanguageContext'
import content from '../content'

const Container = styled.div`
	padding-top: 20px;
	padding-bottom: 88px;
	max-width: 100%;
	/* min-height: 100vh; */

	@media (min-width: 960px) {
		padding-bottom: 220px;
	}
`

const Content = styled.div``

const IllustrationContainer = styled.div`
	max-width: 450px;
	margin-bottom: 32px;

	@media (min-width: 960px) {
		max-width: 60%;
		order: 2;
		/* flex: 1 1 70%; */
		margin-bottom: 0;
	}
`

const Illustration = styled.img`
	max-width: 100%;
`

const TextContainer = styled.div`
	font-size: 20px;
	max-width: 500px;

	@media (min-width: 960px) {
		flex: 1 0 30%;
		min-width: 426px;
		margin-right: 64px;
		order: 1;
		max-width: 40%;
	}

	* {
		margin-top: 16px;
	}

	span {
		color: ${preferences.colors.main};
		font-weight: 600;

		@media (min-width: 960px) {
			font-size: 24px;
		}
	}

	h1 {
		color: ${preferences.colors.secondaryMain};
		font-size: 40px;
		font-weight: bold;
		line-height: 61px;

		@media (min-width: 560px) {
			font-size: 56px;
			line-height: 70px;
		}

		@media (min-width: 960px) {
			font-size: 64px;
			line-height: 80px;
		}

		@media (min-width: 1200px) {
			font-size: 70px;
			line-height: 90px;
		}

		@media (min-width: 1600px) {
			font-size: 96px;
			line-height: 110px;
		}
	}

	p {
		color: ${preferences.colors.neutral};
	}

	button {
		margin-top: 56px;
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

	const { state: language } = useContext(languageStore)
	const { firstSection } = content[language]
	return (
		<Container backgroundColor='#fff' className='sidePadding'>
			<animated.div style={fade}>
				<animated.div style={scale}>
					<Content className='maxWidth'>
						<Header />
						<FlexContainer>
							<IllustrationContainer>
								<Illustration src='illustration1.svg' alt='Illustration' />
							</IllustrationContainer>
							<TextContainer>
								<span>{firstSection.span}</span>
								<h1>{firstSection.heading}</h1>
								<p className='commonText'>{firstSection.paragraph}</p>
								<MainButton>{firstSection.button}</MainButton>
							</TextContainer>
						</FlexContainer>
					</Content>
				</animated.div>
			</animated.div>
		</Container>
	)
}

export default FirstSection
