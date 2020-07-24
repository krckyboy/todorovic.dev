import React, { useContext } from 'react'
import styled from 'styled-components'
import preferences from '../preferences'
import { languageStore } from './../contexts/LanguageContext'
import { withRouter, generatePath } from 'react-router'

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
		console.log(props)
		dispatch({ type: 'Switch to Serbian' })
		props.history.push('/')
	}

	function setEnglish() {
		console.log(props)
		dispatch({ type: 'Switch to English' })
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
