import React from 'react'
import style from '../Profile.module.scss'
import { Container, ListGroup } from 'react-bootstrap'

const AddressesSection = () => (
	<div className={`${style.addressesSection} ${style.Card}`}>
		<div className={`${style.header} ${style.header_margin}`}>Адреса</div>

		<ListGroup>
			<ListGroup.Item>Адреса</ListGroup.Item>
			<ListGroup.Item>На карте</ListGroup.Item>
		</ListGroup>
	</div>
)

export default AddressesSection
