import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Container = styled.div`
	background-color: white;
	padding: 48px 32px;

	img {
		margin: 0 auto;
		display: block;
	}

	:not(:last-child) {
		margin-bottom: 32px;
	}

	@media (min-width: 960px) {
		flex: 1;
		max-width: 100%;
		min-width: 350px;
		margin-bottom: 32px;

		:not(:last-child) {
			margin-right: 32px;
		}
		
		:nth-child(2) {
			margin-right: 0;
		}
	}

	@media (min-width: 1178px) {
		max-width: 33.3333%;
		:nth-child(2) {
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
	letter-spacing: 0.095em;
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
