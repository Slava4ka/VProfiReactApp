import React from 'react'
import style from './Revies.module.scss'
import './Rev.scss'
import { Modal } from 'react-bootstrap'
import MarkSetter from '../../MarkSetter/MarkSetter'
import Form from 'react-bootstrap/Form'
import RoundButton from '../../Buttons/RoundButton/RoundButton'

const ReviewsModal = ({ show, setShow }) => {
	return (
		<Modal
			show={show}
			onHide={() => setShow(false)}
			size='lg'
			aria-labelledby='reviews-custom-modal-styling-title'
		>
			<Modal.Header closeButton>
				<Modal.Title id='reviews-custom-modal-styling-title'>
					<h3 className={style.title}>Добавление отзыва</h3>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<div className={style.Text_line_m}>
						Оцените выполненную работу в целом
					</div>
					<MarkSetter />
					<div className={'comment'}>
						<Form>
							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Label>
									<span className={style.Text_line_m}>Комментарий</span>
								</Form.Label>
								<Form.Control as='textarea' rows='4' />
							</Form.Group>
						</Form>
					</div>
					<div className={style.buttons}>
						<RoundButton
							title={'Отправить'}
							size={'small'}
							onClick={() => setShow(false)}
							disabled={true}
						/>
						<RoundButton
							title={'Отмена'}
							size={'small'}
							onClick={() => setShow(false)}
						/>
					</div>
					<div></div>
				</div>
			</Modal.Body>
		</Modal>
	)
}

export default ReviewsModal
