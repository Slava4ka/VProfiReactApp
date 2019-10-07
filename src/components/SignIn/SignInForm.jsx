import React from 'react';
import styles from './SignIn.module.css';
import {Field, reduxForm} from "redux-form";
import {renderInputField} from "../common/FormsControls/FormsControls";
import {signInValidate} from "../../validators/validators";

const SignInForm = ({handleSubmit, error}) => {
    console.log("error:\n---------------------");
    console.log(error);
    console.log("---------------------");

    return(
        <form className={styles.formSignIn} onSubmit={handleSubmit}>

            <Field type="email" name="email" component={renderInputField} id="inputEmail"
                   className={`form-control ${styles.formControl}`}
                   label="Адрес электронной почты" autoFocus=""/>

            <Field type="password" name="password" component={renderInputField}
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