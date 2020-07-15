import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Heading = styled.h2`
	font-family: Rajdhani;
	font-style: normal;
	font-weight: bold;
    font-size: 48px;
    color: ${preferences.colors.secondaryMain};
    margin-bottom: 48px;
`

const SubHeading = ({ children }) => {
	return <Heading>{children}</Heading>
}

export default SubHeading
