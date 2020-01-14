import React from 'react'
import style from '../Profile.module.scss'
import { Container, ListGroup } from 'react-bootstrap'

const CommentsSection = () => (
	<div className={`${style.commentsSection} ${style.Card}`}>
		<div className={`${style.header} ${style.header_margin}`}>
			Комментарии
		</div>

		<ListGroup>
			<ListGroup.Item>Адреса</ListGroup.Item>
			<ListGroup.Item>На карте</ListGroup.Item>
		</ListGroup>
	</div>
)

export default CommentsSection
