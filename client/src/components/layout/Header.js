import React from 'react'
import styled from 'styled-components'
import LanguageSwitcher from '../LanguageSwitcher'

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 56px;

	@media (min-width: 960px) {
		margin-bottom: 128px;
	}
`

const Header = () => {
	return (
		<Container>
			<a href='/'>
				<img src='/logo.svg' alt='Logo' />
			</a>
			<LanguageSwitcher />
		</Container>
	)
}

export default Header
