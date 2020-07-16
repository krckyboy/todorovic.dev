import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Heading = styled.h2`
	font-family: Rajdhani;
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
	color: ${preferences.colors.secondaryMain};
	margin-bottom: 48px;

	@media (min-width: 960px) {
		margin-bottom: 64px;
	}
`

const SubHeading = ({ children }) => {
	return <Heading>{children}</Heading>
}

export default SubHeading
