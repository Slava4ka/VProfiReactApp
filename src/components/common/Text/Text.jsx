import React from 'react'
import style from './Text.module.scss'
import { generateText } from '../../../validators/linkValidator'

const Text = ({ textState, setTextState, _text }) => (
	<span className={style.text}>
		{textState.map((word, id) => {
			switch (true) {
				case word.type === 'String':
					return word.data + ' '
				case word.type === 'Link':
					return (
						<span key={id}>
							{word.border.head ? word.border.head : ''}
							<a href={word.data} target={'_blank'}>
								{word.data}
							</a>
							{word.border.tail ? word.border.tail + ' ' : ' '}
						</span>
					)
				case word.type === 'ShowMore':
					console.log('!!!!')
					return (
						<span
							className={style.linkInText}
							key={id}
							onClick={() => setTextState(generateText(_text))}
						>
							Читать еще
						</span>
					)
			}
		})}
	</span>
)
export default Text
