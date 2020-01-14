import React from 'react'
import styles from './Main.module.css'

const Main = () => {
	return (
		<div className={`${styles.greeting}`}>
			<div className={`${styles.text}`}>
				<span>Добро пожаловать на VPROFI!</span>
			</div>
		</div>
	)
}

export default Main
