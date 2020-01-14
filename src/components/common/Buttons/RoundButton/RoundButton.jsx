import React from 'react'
import style from './RoundButton.module.scss'

const RoundButton = ({ title, size = 'medium', onClick, disabled = false }) => {
	const roundButtonSize =
		size === 'big'
			? style.big
			: size === 'medium'
			? style.medium
			: size === 'small'
			? style.small
			: style.medium
	return (
		<button
			disabled={disabled}
			type='button'
			className={`${style.RoundButton} ${roundButtonSize}`}
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default RoundButton
