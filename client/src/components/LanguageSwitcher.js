import React, { useContext } from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import { languageStore } from './../contexts/LanguageContext'
import { withRouter, Redirect } from 'react-router'

const Container = styled.div`
	display: flex;

	div {
		cursor: pointer;
		color: ${preferences.colors.main};
		border: 2px solid ${preferences.colors.main};
		font-size: 18px;
		font-weight: 600;
		padding: 8px 16px;
		background-color: transparent;
		transition: 0.2s background-color;

		&:first-child {
			margin-right: 8px;
		}
	}

	div.active {
		background-color: ${preferences.colors.main};
		color: white;
	}
`

export default withRouter((props) => {
	const language = useContext(languageStore)
	const { dispatch, state } = language

	function setSerbian() {
		dispatch({ type: 'Switch to Serbian' })
		// If we have more than one page, this wouldn't work
		props.history.push('/')
	}

	function setEnglish() {
		dispatch({ type: 'Switch to English' })
		// If we have more than one page, this wouldn't work
		props.history.push('/')
	}

	return (
		<Container>
			<div className={`${state === 'en' ? 'active' : ''}`} onClick={setEnglish}>
				EN
			</div>
			<div className={`${state === 'en' ? '' : 'active'}`} onClick={setSerbian}>
				RS
			</div>
		</Container>
	)
})
