import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'

const Container = styled.div`
	display: flex;

	div {
		cursor: pointer;
		/* color: ${preferences.colors.main}; */
		color: white;
		font-size: 18px;
		font-weight: 500;
		padding: 8px 16px;
		background-color: ${preferences.colors.main};

		&:first-child {
			margin-right: 8px;
		}
	}
`

export default () => {
	return (
		<Container>
			<div>EN</div>
			<div>RS</div>
		</Container>
	)
}
