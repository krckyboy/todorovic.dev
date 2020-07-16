import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Container = styled.div`
	p {
		color: ${preferences.colors.neutral};
	}

	display: flex;
	align-items: flex-start;
`

const Li = styled.li`
	&:not(:last-child) {
		margin-bottom: 32px;
	}

	@media (min-width: 960px) {
		flex: 1 0 40%;
		max-width: 600px;
		margin-bottom: 56px !important;

		&:nth-child(odd) {
			margin-right: 182px;
		}
	}
`

const NumberElement = styled.img`
	margin-right: 24px;
`

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const Title = styled.h3`
	font-weight: bold;
	font-size: 24px;
	color: ${preferences.colors.secondaryMain};
	margin-bottom: 8px;

	@media (min-width: 960px) {
		font-size: 32px;
	}
`

const HowWeWorkElement = ({ imgSrc, title, text }) => {
	return (
		<Li>
			<Container>
				<NumberElement src={imgSrc} alt={imgSrc} />
				<TextContainer>
					<Title>{title}</Title>
					<p className='commonText'>{text}</p>
				</TextContainer>
			</Container>
		</Li>
	)
}

export default HowWeWorkElement
