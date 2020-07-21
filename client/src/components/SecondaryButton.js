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
	font-size: 20px;
	cursor: pointer;
	transition: 0.2s transform, 0.2s box-shadow;
	width: 100%;

	:hover,
	:focus {
		box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.5);
		transform: translateY(-2px);
	}

	@media (min-width: 960px) {
		font-size: 22px;
	}

	@media (min-width: 1600px) {
		font-size: 24px;
	}
`

export default ({ children }) => {
	return <Button>{children}</Button>
}
