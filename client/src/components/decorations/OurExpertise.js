import React from 'react'
import styled from 'styled-components'

const TopRight = styled.img`
	left: 75%;
    top: -20%;
    animation-name: MoveAround;
    animation-iteration-count: infinite;
    animation-duration: 3s;
`
const BottomLeft = styled.img`
	top: 60%;
    left: -5%;
    animation-name: MoveAround;
    animation-iteration-count: infinite;
    animation-duration: 4s;
`

const Container = styled.div`
	img {
		position: absolute;
	}
`

const OurExpertise = () => {
	return (
		<Container>
			<TopRight src='decorative/ellipseTopRight.svg' alt='Ellipse' />
			<BottomLeft src='decorative/ellipseBottomLeft.svg' alt='Ellipse' />
		</Container>
	)
}

export default OurExpertise
