import React, { useContext } from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import HowWeWorkElement from '../components/HowWeWorkElement'
import { languageStore } from './../contexts/LanguageContext'
import content from '../content'

const Container = styled.div`
	max-width: 100%;
	background-color: #f8f3fd;
	position: relative;
`

// Styles for positioning control dots
const Content = styled.div``

const Ul = styled.ul`
	@media (min-width: 960px) {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
	}
`

const HowWeWork = () => {
	const { state: language } = useContext(languageStore)
	const { howWeWork } = content[language]
	return (
		<Container className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>{howWeWork.heading}</SubHeading>
				<Ul>
					<HowWeWorkElement
						imgSrc='icons/1.svg'
						title={howWeWork.boxes.first.title}
						text={howWeWork.boxes.first.text}
					/>
					<HowWeWorkElement
						imgSrc='icons/2.svg'
						title={howWeWork.boxes.second.title}
						text={howWeWork.boxes.second.text}
					/>
					<HowWeWorkElement
						imgSrc='icons/3.svg'
						title={howWeWork.boxes.third.title}
						text={howWeWork.boxes.third.text}
					/>
					<HowWeWorkElement
						imgSrc='icons/4.svg'
						title={howWeWork.boxes.fourth.title}
						text={howWeWork.boxes.fourth.text}
					/>
				</Ul>
			</Content>
		</Container>
	)
}

export default HowWeWork
