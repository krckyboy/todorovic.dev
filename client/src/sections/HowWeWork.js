import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import SubHeading from '../components/SubHeading'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const Container = styled.div`
	max-width: 100%;
	background-color: #F8F3FD;
`

// Styles for positioning control dots
const Content = styled.div`
	
`

const HowWeWork = () => {
	return (
		<Container className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>HOW WE WORK</SubHeading>
			</Content>
		</Container>
	)
}

export default HowWeWork
