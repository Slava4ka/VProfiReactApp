import React from 'react'
import style from '../Profile.module.scss'
import { ListGroup } from 'react-bootstrap'

const EducationSection = () => (
	<div className={`${style.contactsSection} ${style.Card}`}>
		<div className={`${style.header} ${style.header_margin}`}>
			Образование
		</div>
		<ListGroup>
			<ListGroup.Item>Образование</ListGroup.Item>
			<ListGroup.Item>Ученая степерь</ListGroup.Item>
			<ListGroup.Item>Звание/Категория/Ранг</ListGroup.Item>
		</ListGroup>
	</div>
)

export default EducationSection
