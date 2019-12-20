import React, { useState } from 'react'
import style from './MyButtonsGroup.module.scss'

const MyButtonsGroup = ({ name, buttonsData, onClickAction }) => {
	const [myButtonsGroupState, setMyButtonsGroupState] = useState(buttonsData)

	//замыкание
	const changeActive = (state, setState) => {
		return active => {
			setState(
				state.map(current => {
					if (current.value === active && current.flag) return { ...current }
					else if (current.value === active) {
						onClickAction()
						return { ...current, flag: true }
					} else return { ...current, flag: false }
				})
			)
		}
	}

	const changeActiveButton = changeActive(
		myButtonsGroupState,
		setMyButtonsGroupState
	)

	return (
		<div className={style.buttonsGroup}>
			<span>{`${name}:`}</span>

			<div className={style.buttonsGroup__box}>
				{myButtonsGroupState.map((filter, id) => (
					<MyButton
						key={id}
						value={filter.value}
						label={filter.label}
						flag={filter.flag}
						setFunction={changeActiveButton}
					/>
				))}
			</div>
		</div>
	)
}

const MyButton = ({ value, label, flag, setFunction }) => {
	return (
		<span
			id={value}
			onClick={() => setFunction(value)}
			className={
				flag
					? `${style.buttonsGroup__button} ${style.buttonsGroup__button_active}`
					: `${style.buttonsGroup__button}`
			}
		>
			{label}
		</span>
	)
}

export default MyButtonsGroup
