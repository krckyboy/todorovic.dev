import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Container = styled.div`
	background-color: white;

	img {
		margin: 0 auto;
		display: block;
		max-width: 100%;
		height: 250px;
		object-fit: cover;

		@media (min-width: 960px) {
			flex: 1;
			max-width: 45%;
			height: 100%;
			margin: 0;
		}
	}

	@media (min-width: 960px) {
		display: flex;
		justify-content: space-between;

		:not(:last-child) {
			margin-right: 32px;
		}
	}

	a {
		font-weight: 600;
		text-align: left;
		display: block;
		margin-top: 24px;
	}
`

const ProjectTextContainer = styled.div`
	@media (min-width: 960px) {
		max-width: 650px;
		min-width: 350px;
		margin-left: 16rem;
	}
`

const Title = styled.h3`
	color: ${preferences.colors.secondaryMain};
	font-family: Rajdhani;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	line-height: 41px;
	text-align: left;
	margin-top: 32px;
	margin-bottom: 16px;
`

const Text = styled.p`
	color: ${preferences.colors.neutral};
	text-align: left;
`

const Project = ({ imgSrc, title, text, websiteUrl }) => {
	return (
		<Container>
			<img src={imgSrc} alt={title} />
			<ProjectTextContainer>
				<Title>{title}</Title>
				<Text className='commonText'>{text}</Text>
				<a
					href={websiteUrl}
					className='commonText'
					target='_blank'
					rel='noopener noreferrer'
				>
					Visit website
				</a>
			</ProjectTextContainer>
		</Container>
	)
}

export default Project
