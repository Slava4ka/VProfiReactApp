import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from './ImageSlider.module.scss'

const ImageSlider = ({ photos }) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					swipeToSlide: true,
				},
			},
		],
	}

	return (
		<div className={style.slider}>
			<Slider {...settings}>
				{photos.map((a, index) => (
					<div key={index} className={style.photo}>
						<img src={a} alt='s' />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default ImageSlider
