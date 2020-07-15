import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import SubHeading from '../components/SubHeading'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import Project from '../components/Project'

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
			bottom: -8rem !important; /* Required for positioning */

			.dot {
				width: 20px;
				height: 20px;
			}
		}

		.slide {
			background: white;
		}
	}

	margin-bottom: 8rem;
`

const Expertise = () => {
	return (
		<Container backgroundColor='#fff' className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>LATEST WORK</SubHeading>
				<Carousel
					style={styles}
					showThumbs={false}
					showStatus={false}
					swipeScrollTolerance={50}
					showArrows={false}
					autoPlay={true}
				>
					<Project
						imgSrc='projects/jovana_cut.png'
						title='Jovana Painter'
						websiteUrl='https://jovana-painter-static.netlify.app/'
						text='We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop.'
					/>
					<Project
						imgSrc='projects/krcky.png'
						title='Krcky.dev'
						websiteUrl='https://krcky.dev/'
						text='We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop.'
					/>
					<Project
						imgSrc='projects/jelena_caldic_cut.png'
						title='Jelena Ćaldić'
						websiteUrl='https://jelenacaldic.com/'
						text='We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop.'
					/>
					<Project
						imgSrc='projects/john_photography_cut.png'
						title={`John's Photography`}
						websiteUrl='https://krckyboy.github.io/John_Smith_Photography/'
						text='We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop.'
					/>
					<Project
						imgSrc='projects/john_bar_cut.png'
						title={`John's Bar`}
						websiteUrl='https://krckyboy.github.io/John-s-Bar/'
						text='We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop. We develop clean and optimized websites which are adapted for phones, laptops, tablets and desktop.'
					/>
				</Carousel>
			</Content>
		</Container>
	)
}

export default Expertise
