import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Button = styled.button`
	background-color: ${preferences.colors.main};
	outline: none;
	border: 2px solid transparent;
	padding: 16px 128px;
	color: white;
	font-family: 'Rajdhani', sans-serif;
	font-weight: 600;
	font-size: 18px;
	cursor: pointer;
	transition: 0.1s transform, 0.1s box-shadow;

	:hover,
	:focus {
		box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.5);
		transform: translateY(-2px);
	}

	@media (min-width: 960px) {
		font-size: 20px;
	}
`

export default ({ children }) => {
	return <Button>{children}</Button>
}
