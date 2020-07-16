import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import SubHeading from '../components/SubHeading'
import HowWeWorkElement from '../components/HowWeWorkElement'

const Container = styled.div`
	max-width: 100%;
	background-color: #f8f3fd;
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
	return (
		<Container className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>HOW WE WORK</SubHeading>
				<Ul>
					<HowWeWorkElement
						imgSrc='icons/1.svg'
						title='Setting up goals'
						text='First, we discuss with you what you want to accomplish with the website and cover all the details.'
					/>
					<HowWeWorkElement
						imgSrc='icons/2.svg'
						title='Design'
						text='We challenge ourselves to come up with the design ideas for your website with your approval.'
					/>
					<HowWeWorkElement
						imgSrc='icons/3.svg'
						title='Development'
						text='Now that we have the design ready, we can start developing your website.'
					/>
					<HowWeWorkElement
						imgSrc='icons/4.svg'
						title='Testing'
						text='We make sure that every aspect of the website is working as intended, on all devices.'
					/>
				</Ul>
			</Content>
		</Container>
	)
}

export default HowWeWork
