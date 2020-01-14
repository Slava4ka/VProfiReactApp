import React, { useState } from 'react'
import style from '../Profile.module.scss'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import RatingAndCommentCounter from '../../common/RatingAndCommentCounter/RatingAndCommentCounter'
import { generateText } from '../../../validators/linkValidator'
import Text from '../../common/Text/Text'
import ImageSlider from '../../common/ImageSlider/ImageSlider'
import RoundButton from '../../common/Buttons/RoundButton/RoundButton'
import TelephoneButton from '../../common/Buttons/TelephoneButton/TelephoneButton'
import { GoUnverified, GoVerified } from 'react-icons/go'

const AboutSection = ({
	verified = true,
	showPhoneModal,
	showReviewsModal,
	avatar,
	fullName,
	descriptionText,
	categories,
	rating,
	commentsCounter,
	photos,
}) => {
	return (
		<div className={`${style.aboutSection} ${style.Card}`}>
			<div className={`${style.header} ${style.header_margin}`}>
				<div className={style.title}>Обшая информация</div>
				<div className={style.verifiedData}>
					{verified ? (
						<span>
							<GoVerified size={'1.2em'} color={'green'} />
							Данные анкеты проверены администрацией
						</span>
					) : (
						<span>
							<GoUnverified size={'1.2em'} />
							Данные анкеты еще не проверены администрацией
						</span>
					)}
				</div>
			</div>
			<Container>
				<Row>
					<Col sm={12} md={6} lg={4} xl={3}>
						<div className={style.avatar}>
							<img src='avatars/avaTestMyPhoto.jpg' alt='' />
						</div>
					</Col>

					<Col sm={12} md={6} lg={4} xl={4}>
						<div className={style.info}>
							<div className={style.fullName}>
								<span className={style.surname}>Фамилия</span>
								<span className={style.namePatronymic}>Имя Отчество</span>
							</div>

							<div className={style.specialization}>
								Специализация (3-глубина)
							</div>

							<div className={style.experience}>Стаж:</div>

							<div className={style.ratingAndCommentCounterBox}>
								<RatingAndCommentCounter
									rating={'5,0'}
									commentsCounter={'98'}
								/>
							</div>
						</div>
					</Col>

					<Col sm={12} md={12} lg={4} xl={5}>
						<div className={style.about}>
							<div className={style.about__writeReview}>
								<RoundButton
									title={'Написать отзыв'}
									size={'medium'}
									onClick={() => showReviewsModal(true)}
								/>
							</div>
							<div className={style.about__organizationName}>
								ООО "ВайнахПрофи Инкорпорейтед"
							</div>
							<div className={style.about__address}>
								<span className={style.address__region}>
									Ростовская область
								</span>
								<span className={style.address__street}>
									г. Ростов-на-Дону, ул. Красноармейская 112а
								</span>
							</div>
							<div className={style.about__telephoneNumber}>
								<TelephoneButton
									title={'Записаться по телефону'}
									action={() => showPhoneModal(true)}
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default AboutSection
