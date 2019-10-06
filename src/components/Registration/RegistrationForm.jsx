import React from 'react';
import style from "./Registration.module.css";
import {Field, reduxForm} from "redux-form";
import {validate} from "../../validators/validators";
import {renderCheckBoxField, renderInputField} from "../common/FormsControls/FormsControls";


const RegistrationForm = ({handleSubmit, error}) => {
    console.log("error:\n---------------------");
    console.log(error);
    console.log("---------------------");

    return (
        <form className={style.formSignIn} onSubmit={handleSubmit}>

            <Field type="email" name="email" component={renderInputField} id="inputEmail"
                   className={`form-control ${style.formControl}`}
                   label="Адрес электронной почты" autoFocus=""/>

            <Field type="password" name="password" component={renderInputField}
                   id="inputPassword" className={`form-control ${style.formControl}`}
                   label="Пароль" required=""/>


            <Field type="password" name="repeatPassword" component={renderInputField}
                   id="repeatPassword" className={`form-control ${style.formControl}`}
                   label="Повторите пароль" required=""/>


            <Field type="tel" name="tel" component={renderInputField}
                   id="telInput" className={`form-control ${style.formControl}`}
                   label="Номер телефона" required=""/>

            <div className="checkbox mb-3">

                <Field type="checkbox" name="agree" component={renderCheckBoxField} value="remember-me"/>

            </div>

            {error && <span>{error}</span>}

            <button className="btn btn-lg btn-success btn-block">Зарегистрироваться</button>

        </form>
    )
};

const ReduxRegistrationForm = reduxForm({
    form: 'registration', // уникальное строговое имя (для state)
    validate
})(RegistrationForm);

export default ReduxRegistrationForm;