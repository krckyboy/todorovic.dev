import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import SubHeading from '../components/SubHeading'
import ExpertiseBox from '../components/ExpertiseBox'

const Container = styled.div`
	max-width: 100%;
	background-color: #f8f3fd;
`

const Content = styled.div``

const FlexContainer = styled.div`
	@media (min-width: 960px) {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: stretch;
 
	}
`

const Expertise = () => {
	return (
		<Container backgroundColor='#fff' className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>OUR EXPERTISE</SubHeading>
				<FlexContainer>
					<ExpertiseBox
						imgSrc='bullseye.svg'
						title='UNIQUE DESIGN'
						text='Our team will create the design that you’ll be satisfied with.'
					/>
					<ExpertiseBox
						imgSrc='devices.svg'
						title='ADAPTABLE'
						text='Your website will be responsive, work perfectly on all devices.'
					/>
					<ExpertiseBox
						imgSrc='speed.svg'
						title='BLAZING SPEED'
						text='We’ll make your website load as fast as possible. '
					/>
				</FlexContainer>
			</Content>
		</Container>
	)
}

export default Expertise
