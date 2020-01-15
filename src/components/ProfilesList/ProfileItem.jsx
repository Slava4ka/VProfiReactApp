import React from 'react'
import style from './ProfileItem.module.scss'
import { FiUser } from 'react-icons/fi'
import { Col, Container, Row } from 'react-bootstrap'
import RatingAndCommentCounter from '../common/RatingAndCommentCounter/RatingAndCommentCounter'

const ProfileItem = ({ isLoaded }) => {
	return (
		<div className={style.profile}>
			<Container fluid={true} style={{ marginTop: '10px' }}>
				<Row noGutters={true}>
					<Col md={12} lg={3}>
						<div className={style.mediaData}>
							<div className={style.avatar}>
								<img src='avatars/avaTestMyPhoto.jpg' alt='' />
								{/*<FiUser />*/}
							</div>
						</div>
					</Col>

					<Col md={6} lg={4}>
						<div className={style.infoData}>
							<div className={style.fullName}>
								<span className={style.surname}>Фамилия</span>
								<span className={style.namePatronymic}>Имя Отчество</span>
							</div>

							<div className={style.directionSpecialitySpecialization}>
								<span>Направление</span>
								<span>Специальность</span>
								<span>Специалтзация</span>
							</div>

							<div className={style.ratingAndCommentCounterBox}>
								<RatingAndCommentCounter
									rating={'5,0'}
									commentsCounter={'98'}
								/>
							</div>
						</div>
					</Col>

					<Col md={6} lg={5}>
						<div className={style.contactData}>
							<div className={style.organization}>
								<span>Название организации</span>
							</div>
							<div className={style.address}>
								Адрес организации, к примеру: 344025 г. Назрань, пропект мира
								48/7
							</div>

							<div className={style.contacts}>
								<span>Контакты</span>
								<span className={style.label}>
									Телефон: <a href='tel:+71234567890'>+7(123)-456-78-90</a>
								</span>
								<span className={style.label}>
									Эл. почта:{' '}
									<a href='mailto:kakayatoPachta@yandex.ru?subject=Vprofi'>
										kakayatoPachta@yandex.ru
									</a>
								</span>
							</div>

							<div className={style.lastMonthReviews}>
								<span className={style.label}>
									За последний месяц опубликовано 5 отзывов
								</span>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ProfileItem
