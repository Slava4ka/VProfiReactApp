import React from 'react'
import style from './RatingAndCommentCounter.module.scss'

const RatingAndCommentCounter = ({ rating, commentsCounter }) => {
	return (
		<div className={style.RatingAndCommentCounter}>
			<div className={style.rating}>
				<span className={style.count}>{rating}</span>
				<span className={style.label}>Рейтинг</span>
			</div>
			<div className={style.commentsCounter}>
				<span className={style.count}>{commentsCounter}</span>
				<span className={style.label}>Отзывов</span>
			</div>
		</div>
	)
}
export default RatingAndCommentCounter
