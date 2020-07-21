import React, { useContext } from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import SubHeading from '../components/SubHeading'
import SecondaryButton from '../components/SecondaryButton'
import { languageStore } from './../contexts/LanguageContext'
import content from '../content'

const Container = styled.div`
	max-width: 100%;
	background-color: white;
`

// Styles for positioning control dots
const Content = styled.div``

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

		@media (min-width: 960px) {
			font-size: 20px;
		}

		@media (min-width: 1600px) {
			font-size: 22px;
		}
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
		transition: all 0.2s;
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
	const { state: language } = useContext(languageStore)
	const { reachOutToUs } = content[language]
	return (
		<Container className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>{reachOutToUs.heading}</SubHeading>
				<FlexContainer>
					<FormContent>
						<Text className='commonText'>{reachOutToUs.paragraph}</Text>
						<FormEl>
							<fieldset>
								<label htmlFor='name'>{reachOutToUs.name}</label>
								<input type='text' id='name' />
							</fieldset>
							<fieldset>
								<label htmlFor='email'>{reachOutToUs.email}</label>
								<input type='email' id='email' />
							</fieldset>
							<fieldset>
								<label htmlFor='message'>{reachOutToUs.message}</label>
								<textarea
									name='message'
									id='message'
									cols='30'
									rows='10'
								></textarea>
							</fieldset>
							<ButtonContainer>
								<SecondaryButton>{reachOutToUs.button}</SecondaryButton>
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
