import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Button = styled.button`
	background-color: ${preferences.colors.main};
	outline: none;
	border: 2px solid transparent;
	padding: 20px 64px;
	color: white;
	font-family: 'Rajdhani', sans-serif;
	font-weight: 600;
	font-size: 20px;
	cursor: pointer;
`

export default ({ children }) => {
	return <Button>{children}</Button>
}
