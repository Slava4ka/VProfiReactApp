import React from 'react'
import styles from './SignIn.module.css'
import { Field, reduxForm } from 'redux-form'
import { signInValidate } from '../../validators/validators'
import reduxRenderInputField from '../common/FormsControls/reduxRenderInputField'
import { connect } from 'react-redux'
import {
	addErrorToStack,
	removeErrorFromStack,
} from '../../redux/reducers/signUpAndIn-reducer'

const SignInForm = ({
	handleSubmit,
	error,
	disabled,
	addErrorToStack,
	removeErrorFromStack,
}) => {
	if (error) {
		console.log('error:\n---------------------')
		console.log(error)
		console.log('---------------------')

		addErrorToStack({ server_error: error })
	} else {
		removeErrorFromStack({ server_error: error })
	}

	return (
		<form className={styles.formSignIn} onSubmit={handleSubmit}>
			<Field
				type='emailOrTelephoneNumber'
				name='emailOrTelephoneNumber'
				component={reduxRenderInputField}
				id='inputEmail'
				className={`form-control ${styles.formControl}`}
				label='Номер телефона / эл. почта'
				disabled={disabled}
				autoFocus=''
			/>

			<Field
				type='password'
				name='password'
				component={reduxRenderInputField}
				id='inputPassword'
				className={`form-control ${styles.formControl}`}
				label='Пароль'
				disabled={disabled}
				required=''
			/>

			<button className='btn btn-lg btn-success btn-block' disabled={disabled}>
				{disabled ? (
					<img src={'preloaders/30.svg'} alt={'preloader'} />
				) : (
					'Авторизоваться'
				)}
			</button>
		</form>
	)
}

const ReduxSignInForm = reduxForm({
	form: 'signIn',
	validate: signInValidate,
})(SignInForm)

export default connect(null, { addErrorToStack, removeErrorFromStack })(
	ReduxSignInForm
)
