import React from 'react'
import styled from 'styled-components'
import LanguageSwitcher from '../LanguageSwitcher'

const Container = styled.header`
    display: flex;
	justify-content: space-between;
	align-items: center;
`

const Header = () => {
	return (
		<Container>
			<a href='/' rel='noopener noreferrer' target='_blank'>
				<img src='logo.svg' alt='Logo' />
			</a>
			<LanguageSwitcher />
		</Container>
	)
}

export default Header
