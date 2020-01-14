import React from 'react'
import style from './TelephoneNumberModal.module.scss'

import { Button, Modal } from 'react-bootstrap'
import RoundButton from '../../Buttons/RoundButton/RoundButton'

const TelephoneNumberModal = ({
	show,
	onHide,
	userName,
	phoneNumber,
	timeFrom,
	timeUntil,
}) => {
	const stringNumber = `tel:${phoneNumber.toString()}`
	return (
		<Modal
			show={show}
			onHide={onHide}
			size='sm'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			dialogClassName={style.modalWindow}
		>
			<Modal.Body>
				<div className={style.modalWindowBody}>
					<h6 className={style.name}>{userName}</h6>
					<h3 className={style.phoneNumber}>
						<a href={stringNumber}>{phoneNumber}</a>
					</h3>
					<h6 className={style.time}>
						звонить с {timeFrom} до {timeUntil}
					</h6>
				</div>
				<div className={style.close}>
					<RoundButton title={<h5>Закрыть</h5>} size={'big'} onClick={onHide} />
				</div>
			</Modal.Body>
		</Modal>
	)
}

export default TelephoneNumberModal
