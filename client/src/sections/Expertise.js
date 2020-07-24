import React, { useContext } from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import ExpertiseBox from '../components/ExpertiseBox'
import OurExpertiseDecorations from '../components/decorations/OurExpertise'
import { languageStore } from './../contexts/LanguageContext'
import content from '../content'

const Container = styled.div`
	max-width: 100%;
	background-color: #f8f3fd;
	overflow: hidden;
`

const Content = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	* {
		z-index: 9;
		position: relative;
	}
`

const FlexContainer = styled.div`
	@media (min-width: 960px) {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: stretch;
	}
`

const Expertise = () => {
	const { state: language } = useContext(languageStore)
	const { expertise } = content[language]
	return (
		<Container className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<OurExpertiseDecorations />
				<SubHeading>{expertise.heading}</SubHeading>
				<FlexContainer>
					<ExpertiseBox
						imgSrc='/bullseye.svg'
						title={expertise.boxes.first.heading}
						text={expertise.boxes.first.text}
					/>
					<ExpertiseBox
						imgSrc='/devices.svg'
						title={expertise.boxes.second.heading}
						text={expertise.boxes.second.text}
					/>
					<ExpertiseBox
						imgSrc='/speed.svg'
						title={expertise.boxes.third.heading}
						text={expertise.boxes.third.text}
					/>
				</FlexContainer>
			</Content>
		</Container>
	)
}

export default Expertise
