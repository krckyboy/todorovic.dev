import React from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import SubHeading from '../components/SubHeading'
import SecondaryButton from '../components/SecondaryButton'

const Container = styled.div`
	max-width: 100%;
	background-color: white;
`

// Styles for positioning control dots
const Content = styled.div``

const Ul = styled.ul`
	@media (min-width: 960px) {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
	}
`

const Text = styled.p`
	color: ${preferences.colors.neutral};
	margin-bottom: 32px;
`

const FormEl = styled.form`
	label {
		color: ${preferences.colors.neutral};
		font-size: 18px;
		display: block;
		margin-bottom: 8px;
		font-weight: 600;
	}

	input,
	textarea {
		border: 1px solid #bdbcc0;
		background-color: transparent;
		padding: 16px;
		display: block;
		width: 100%;
		color: ${preferences.colors.neutral};
		font-family: Rajdhani;
		transition: all 0.1s;
		max-width: 100%;
		resize: none;
		font-size: 18px;

		&:focus {
			outline-color: ${preferences.colors.main};
		}

		&:hover {
			border-color: ${preferences.colors.main};
		}
	}

	fieldset {
		:not(:last-child) {
			margin-bottom: 24px;
		}

		:last-of-type {
			margin-bottom: 32px;
		}
	}
`

const FlexContainer = styled.div`
	@media (min-width: 1260px) {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
`

const FormContent = styled.div`
	flex: 1 1 auto;
	align-self: stretch;
	max-width: 600px;
`

const Img = styled.img`
	display: none;

	@media (min-width: 1260px) {
		align-self: flex-end;
		height: 100%;
		width: 70%;
		max-width: 50%;
		display: initial;
	}
`

const ButtonContainer = styled.div`
	text-align: center;
`

const Form = () => {
	return (
		<Container className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>REACH OUT TO US</SubHeading>
				<FlexContainer>
					<FormContent>
						<Text className='commonText'>
							You have a project in mind that we can build for you? Great! Send
							a message to us with details and we’ll get back to you!
						</Text>
						<FormEl>
							<fieldset>
								<label htmlFor='name'>Name</label>
								<input type='text' id='name' />
							</fieldset>
							<fieldset>
								<label htmlFor='email'>Email</label>
								<input type='email' id='email' />
							</fieldset>
							<fieldset>
								<label htmlFor='message'>Message</label>
								<textarea
									name='message'
									id='message'
									cols='30'
									rows='10'
								></textarea>
							</fieldset>
							<ButtonContainer>
								<SecondaryButton>SEND</SecondaryButton>
							</ButtonContainer>
						</FormEl>
					</FormContent>
					<Img src='illustration2.svg' alt='Illustration' />
				</FlexContainer>
			</Content>
		</Container>
	)
}

export default Form
