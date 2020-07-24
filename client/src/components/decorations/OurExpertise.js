import React from 'react'
import styled from 'styled-components'

const TopRight = styled.img`
	left: 80%;
	top: -400px;
	animation-name: MoveAround;
	animation-iteration-count: infinite;
	animation-duration: 3s;
`
const BottomLeft = styled.img`
	top: 500px;
	left: -20%;
	animation-name: MoveAround;
	animation-iteration-count: infinite;
	animation-duration: 4s;
`

const Container = styled.div`
	display: none;
	img {
		position: absolute;
	}

	@media (min-width: 960px) {
		display: block;
	}
`

const OurExpertise = () => {
	return (
		<Container>
			<TopRight src='/decorative/ellipseTopRight.svg' alt='Ellipse' />
			<BottomLeft src='/decorative/ellipseBottomLeft.svg' alt='Ellipse' />
		</Container>
	)
}

export default OurExpertise
