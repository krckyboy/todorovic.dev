import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Button = styled.a`
	background-color: ${preferences.colors.main};
	outline: none;
	border: 2px solid transparent;
	padding: 24px 90px;
	cursor: pointer;
	transition: 0.2s transform, 0.2s box-shadow;
	color: white;
	font-family: 'Rajdhani', sans-serif;
	font-weight: 600;
	font-size: 20px;
	text-decoration: none;
	display: inline-block;
	margin-top: 56px !important;

	:hover,
	:focus {
		box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.5);
		transform: translateY(-2px);
	}

	@media (min-width: 960px) {
		width: initial;
		font-size: 24px;
	}
`

export default ({ children }) => {
	return <Button href='#form'>{children}</Button>
}
