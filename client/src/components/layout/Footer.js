import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
	background-color: #f8f3fd;
	display: flex;
	justify-content: center;
	text-align: center;
	color: #9e6dcc;
	font-weight: 600;

	line-height: 28px;
	font-size: 18px;
    padding: 1.6rem;

	@media (min-width: 512px) and (min-height: 512px) {
		font-size: 16px;
	}

	@media (min-width: 768px) and (min-height: 512px) {
		font-size: 20px;
	}

	a {
        text-decoration: underline;
        color: #572c80;
	}
`

const FooterContainer = styled.div`
	padding: 3.2rem 2.4rem;
`

const Footer = () => {
	return (
		<Container>
			<FooterContainer>
				<p>
					Copyright © All Rights Reserved. Icons made by{' '}
					<a href='https://www.flaticon.com/'>Flaticon</a>
				</p>
			</FooterContainer>
		</Container>
	)
}

export default Footer
