import React, { useContext } from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import SubHeading from '../components/SubHeading'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import Project from '../components/Project'
import { languageStore } from './../contexts/LanguageContext'
import content from '../content'

const Container = styled.div`
	max-width: 100%;
	background-color: white;
`

// Styles for positioning control dots
const Content = styled.div`
	.carousel {
		&.carousel-slider {
			overflow: initial !important; /* Required for positioning dots */
		}

		.control-dots .dot {
			box-shadow: none !important;
			background: ${preferences.colors.main} !important;

			&:focus {
				outline: none;
			}
		}

		.control-dots {
			bottom: -16rem !important; /* Required for positioning */

			.dot {
				width: 20px;
				height: 20px;
			}
		}

		.slide {
			background: white;
		}
	}

	margin-bottom: 16rem;
`

const Expertise = () => {
	const { state: language } = useContext(languageStore)
	const { latestWork } = content[language]
	return (
		<Container backgroundColor='#fff' className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>{latestWork.heading}</SubHeading>
				<Carousel
					style={styles}
					showThumbs={false}
					showStatus={false}
					swipeScrollTolerance={50}
					showArrows={false}
					autoPlay={true}
				>
					<Project
						imgSrc='projects/resized/jelenacaldic.png'
						title={latestWork.projects.jelenaCaldic.heading}
						websiteUrl='https://jelenacaldic.com/'
						text={latestWork.projects.jelenaCaldic.text}
					/>
					<Project
						imgSrc='projects/resized/krckydev.png'
						title={latestWork.projects.krckyDev.heading}
						websiteUrl='https://krcky.dev/'
						text={latestWork.projects.krckyDev.text}
					/>
					<Project
						imgSrc='projects/resized/jovana.png'
						title={latestWork.projects.jovana.heading}
						websiteUrl='https://jovana-painter-static.netlify.app/'
						text={latestWork.projects.jovana.text}
					/>
				</Carousel>
			</Content>
		</Container>
	)
}

export default Expertise
