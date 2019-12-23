import React from 'react'
import style from './TabsPanel.module.css'
import style2 from './_column.module.scss'

const AllSpecializations = ({
	showAllSpecializations,
	getCurrentSpecializations,
}) => {
	const specializations = getCurrentSpecializations(
		showAllSpecializations.state.id
	).map(specialization => specialization.name)

	return (
		<div className={`${style.allSpecializations} ${style2.allSpecializations}`}>
			{specializations.map((specialization, id) => (
				<div key={id} className={style.oneLine}>
					<a href='#' className={style.specialization}>
						{specialization}
					</a>
				</div>
			))}
		</div>
	)
}
export default AllSpecializations
