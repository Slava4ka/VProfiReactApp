const linkTemplate = /(?<scheme>(http[s]|ftp)?):\/\/(?<domain>[\w\.-]+)(?<path>[^?$]+)?(?<query>[^#$]+)?[#]?(?<fragment>[^$]+)?/
const garbageTemplate = /([^(]|[^']).+([$)]|[$'])/
/**
 *
 * @param text
 * @param fullContent
 * @param length
 * @returns {[Link | String |  ShowMore]}
 */
export const generateText = (text, fullContent = true, length = 1000) => {
	const wordsArr = text.split(' ').map(word => {
		if (linkTemplate.test(word.toString())) {
			let temp = word
			if (garbageTemplate.test(temp)) {
				return {
					type: 'Link',
					data: word.slice(1, word.length - 1),
					border: { head: word[0], tail: word[word.length - 1] },
				}
			}
		} else return { type: 'String', data: word }
	})
	if (wordsArr.length > length && fullContent === false) {
		return wordsArr.slice(0, length).concat({ type: 'ShowMore' })
	} else return wordsArr
}
