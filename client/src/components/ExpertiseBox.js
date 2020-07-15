import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Container = styled.div`
	background-color: white;
	padding: 48px 60px;

	img {
		margin: 0 auto;
		display: block;
	}

	:not(:last-child) {
		margin-bottom: 32px;
	}

	@media (min-width: 960px) {
		flex: 1 0 350px;
		max-width: 33.3333%;
		min-width: 350px;
		margin-bottom: 32px;

		:not(:last-child) {
			margin-right: 32px;
		}
	}
`

const Title = styled.h3`
	color: ${preferences.colors.secondaryMain};
	font-family: Rajdhani;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	line-height: 41px;
	text-align: center;
	margin-top: 32px;
	margin-bottom: 16px;
`

const Text = styled.p`
	color: ${preferences.colors.neutral};
	text-align: center;
`

const ExpertiseBox = ({ imgSrc, title, text }) => {
	return (
		<Container>
			<img src={imgSrc} alt={title} />
			<Title>{title}</Title>
			<Text className='commonText'>{text}</Text>
		</Container>
	)
}

export default ExpertiseBox
