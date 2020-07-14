import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Container = styled.div`
	display: flex;

	div {
		cursor: pointer;
		/* color: ${theme.colors.main}; */
		color: white;
		font-size: 18px;
		font-weight: 500;
		padding: 8px 16px;
		background-color: ${theme.colors.main};

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
