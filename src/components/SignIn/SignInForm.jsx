import React from 'react';
import styles from './SignIn.module.css';
import {Field, reduxForm} from "redux-form";
import {signInValidate} from "../../validators/validators";
import reduxRenderInputField from "../common/FormsControls/reduxRenderInputField";

const SignInForm = ({handleSubmit, error}) => {
    console.log("error:\n---------------------");
    console.log(error);
    console.log("---------------------");

    return(
        <form className={styles.formSignIn} onSubmit={handleSubmit}>

            <Field type="email" name="email" component={reduxRenderInputField} id="inputEmail"
                   className={`form-control ${styles.formControl}`}
                   label="Адрес электронной почты" autoFocus=""/>

            <Field type="password" name="password" component={reduxRenderInputField}
                   id="inputPassword" className={`form-control ${styles.formControl}`}
                   label="Пароль" required=""/>

            {error && <span>{error}</span>}

            <button className="btn btn-lg btn-success btn-block">Авторизоваться</button>

        </form>
    )
};

const ReduxSignInForm = reduxForm({
    form: 'signIn',
    validate: signInValidate
})(SignInForm);

export default ReduxSignInForm;