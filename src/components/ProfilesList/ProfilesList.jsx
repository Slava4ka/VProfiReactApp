import React from 'react'
import styles from './ProfilesList.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import ProfileItem from './ProfileItem'
import MyButtonsGroup from '../common/Buttons/MyButtonsGroup/MyButtonsGroup'
import Breadcrumbs from '../common/Breadcrumbs/Breadcrumbs'

const ProfilesList = () => {
	const filters = [
		{ label: 'Дате', value: 'Date', flag: true },
		{ label: 'Рейтингу', value: 'Rating', flag: false },
		{ label: 'Стажу', value: 'Experience', flag: false },
		{ label: 'Стоимости', value: 'Cost', flag: false },
	]

	return (
		<Container>
			<Row>
				<Col>
					<div className={styles.profilesMainBlock}>
						<div className={styles.headers}>
							<Breadcrumbs
								crumbs={[
									{ name: 'Медицина', link: 'www' },
									{ name: 'Врачи', link: 'www' },
								]}
								goToCategory={a => console.log(a)}
							/>
						</div>

						<div className={styles.sorts}>
							<div className={styles.profilesMainBlock__filters_margin}>
								<MyButtonsGroup
									name={'Сортировка по'}
									buttonsData={filters}
									onClickAction={() =>
										console.log('Some side effect in future will be here')
									}
								/>
							</div>
						</div>

						<div className={styles.profilesMainBlock__profilesList_margin}>
							<ProfileItem />
							<ProfileItem />
							<ProfileItem />
							<ProfileItem />
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}
export default ProfilesList
