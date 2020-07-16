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
	width: 100%;
	transition: 0.1s transform, 0.1s box-shadow;

	:hover,
	:focus {
		box-shadow: 0px 8px 14px -3px rgba(0,0,0,0.5);
		transform: translateY(-2px);
	}

	@media (min-width: 960px) {
		width: initial;
	}
`

export default ({ children }) => {
	return <Button>{children}</Button>
}
