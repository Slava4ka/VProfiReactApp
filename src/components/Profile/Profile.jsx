import React from 'react'
import style from './Profile.module.scss'
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { Button, Col, Container, ListGroup, Modal, Row } from 'react-bootstrap'
import AboutSection from './Sections/AboutSection'
import ContactsSection from './Sections/ContactsSection'
import AddressesSection from './Sections/AddressesSection'
import PricesAndServices from './Sections/PricesAndServices'
import CommentsSection from './Sections/CommentsSection'
import DragAndDrop from './DragAndDrop'
import EducationSection from './Sections/EducationSection'
import TelephoneNumberModal from '../common/Modals/PhoneNumber/TelephoneNumberModal'

const Profile = props => {
	const [modalShow, setModalShow] = React.useState(true)

	const showModal = () => {
		console.log('click')
		setModalShow(true)
	}

	console.log('входные параметры', props)

	const userId = props.match.params.userId ? props.match.params.userId : 1

	const itemsObject = [
		{ id: 'section_1', content: <AboutSection showModal={showModal} /> },
		{ id: 'section_2', content: <ContactsSection /> },
		{ id: 'section_3', content: <EducationSection /> },
		{ id: 'section_4', content: <AddressesSection /> },
		{ id: 'section_5', content: <PricesAndServices /> },
		{ id: 'section_6', content: <CommentsSection /> },
	]

	return (
		<div className={style.profile}>
			<TelephoneNumberModal
				userName={'Имя пользователя'}
				phoneNumber={'+7-928-888-88-88'}
				timeFrom={'8:00'}
				timeUntil={'19:00'}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<Container>
				<Row>
					<Col>
						<div className={style.Breadcrumbs}>
							<Link to={`/profiles/`}>Назад к результатам поиска</Link>
						</div>
						<DragAndDrop components={itemsObject} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default compose(withRouter)(Profile)
