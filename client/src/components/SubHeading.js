import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Heading = styled.h2`
	font-family: Rajdhani;
	font-style: normal;
	font-weight: bold;
	font-size: 45px;
	color: ${preferences.colors.secondaryMain};
	margin-bottom: 48px;

	@media (min-width: 560px) {
		font-size: 64px;
	}

	@media (min-width: 960px) {
		margin-bottom: 64px;
		font-size: 88px;
	}

	@media (min-width: 1200px) {
		margin-bottom: 96px;
		font-size: 100px;
	}

	@media (min-width: 1600px) {
		font-size: 120px;
	}
`

const SubHeading = ({ children }) => {
	return <Heading>{children}</Heading>
}

export default SubHeading
