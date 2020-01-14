import React from 'react'
import style from '../Profile.module.scss'
import { ListGroup } from 'react-bootstrap'

const ContactsSection = () => (
	<div className={`${style.contactsSection} ${style.Card}`}>
		<div className={`${style.header} ${style.header_margin}`}>
			Контактная информация
		</div>

		<ListGroup>
			<ListGroup.Item>Номера телефонов</ListGroup.Item>
			<ListGroup.Item>Электронная почта</ListGroup.Item>
			<ListGroup.Item>СоцСети</ListGroup.Item>
		</ListGroup>
	</div>
)

export default ContactsSection
