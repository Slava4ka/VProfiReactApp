import React from 'react'
import style from './MarkSetter.module.scss'
import effectStyle from './Effect.module.scss'

const MarkSetter = ({ Count = 5 }) => {
	const makeMarksMass = c => {
		const m = []
		for (let i = 0; i < c; i++) {
			m.push(i + 1)
		}
		return m
	}
	const marksCount = Count <= 3 ? makeMarksMass(Count) : makeMarksMass(5)
	const [active, setActive] = React.useState(0)
	return (
		<div className={style.markSetter}>
			{marksCount.map(mc => (
				<button
					key={`MaRk_setter_${mc}_key`}
					className={`${style.mark} ${effectStyle.hoverShadow} ${
						active === mc ? effectStyle.active : ''
					}`}
					onClick={() => setActive(mc)}
				>
					{mc}
				</button>
			))}
		</div>
	)
}

export default MarkSetter
