import React from 'react'
import style from './TelephoneButton.module.scss'
import { FiPhone } from 'react-icons/fi'

const TelephoneButton = ({ title, action }) => {
	return (
		<button className={style.TelephoneButton} onClick={action}>
			<FiPhone size={'1.2em'} />
			<span className={style.text}>{title}</span>
		</button>
	)
}

export default TelephoneButton
