import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from '../Profile.module.scss'
import ImageSlider from '../../common/ImageSlider/ImageSlider'

const PhotoPortfolio = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col sm={12} md={12} lg={12}>
						<div className={style.sliderSection}>
							<ImageSlider
								photos={[
									'avatars/2Z9k75SIbYU.jpg',
									'avatars/1525374264_7f85e7b.jpeg',
									'avatars/ariana_grande.jpg',
									'avatars/avatar2700.jpg',
									'avatars/avatar-zabavnogo-malisha-v-ochkah.jpg',
									'avatars/avaTestMyPhoto.jpg',
									'avatars/boy.jpg',
								]}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default PhotoPortfolio
