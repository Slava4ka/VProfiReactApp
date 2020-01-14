import React from 'react'
import style from '../Profile.module.scss'
import {Container, ListGroup} from 'react-bootstrap'

const PricesAndServices = () => (
	<div className={`${style.pricesAndServices} ${style.Card}`}>
		<div className={`${style.header} ${style.header_margin}`}>
			Услуги и цены
		</div>

		<ListGroup>
			<ListGroup.Item>Табица с услугами и ценами</ListGroup.Item>
		</ListGroup>
	</div>
)

export default PricesAndServices
