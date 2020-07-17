import React from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import ExpertiseBox from '../components/ExpertiseBox'
import OurExpertiseDecorations from '../components/decorations/OurExpertise'

const Container = styled.div`
	max-width: 100%;
	background-color: #f8f3fd;
	position: relative;
	overflow: hidden;
`

const Content = styled.div`
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
	return (
		<Container className='sidePadding topBottomPadding'>
			<OurExpertiseDecorations />
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
