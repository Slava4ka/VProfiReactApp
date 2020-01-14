const initialState = {
	userId: 1,
	//About Section
	fullName: { name: 'name', surname: 'surname', patronymic: 'patronymic' },
	avatar: 'avatars/tomInLow.jpg',
	descriptionText: 'Some text. Hello VProfi',
	categories: { directions: [], speciality: [], specialization: [] },
	ratingValue: 1,
	commentsCounterValue: 1,
	photos: [
		'avatars/2Z9k75SIbYU.jpg',
		'avatars/1525374264_7f85e7b.jpeg',
		'avatars/ariana_grande.jpg',
		'avatars/avatar2700.jpg',
		'avatars/avatar-zabavnogo-malisha-v-ochkah.jpg',
		'avatars/avaTestMyPhoto.jpg',
		'avatars/boy.jpg',
	],
	//
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default profileReducer
