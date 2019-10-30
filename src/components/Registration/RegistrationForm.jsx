import React from 'react';
import style from "./Registration.module.css";
import {Field, reduxForm} from "redux-form";
import {validateRegistration} from "../../validators/validators";
import reduxRenderInputField from "../common/FormsControls/reduxRenderInputField";
import reduxRenderCheckBoxField from "../common/FormsControls/reduxRenderCheckBoxField";
import {connect} from "react-redux";
import {addErrorToStack, removeErrorFromStack} from "../../redux/reducers/registration-reducer";


const RegistrationForm = ({handleSubmit, error, disabled, addErrorToStack, removeErrorFromStack}) => {

    if (error) {
        console.log("error:\n---------------------");
        console.log(error);
        console.log("---------------------");

        addErrorToStack({server_error: error})
    } else {
        removeErrorFromStack({server_error: error})
    }

    return (
        <form className={style.formSignIn} onSubmit={handleSubmit}>

            <Field type="email" name="email" component={reduxRenderInputField} id="inputEmail"
                   className={`form-control ${style.formControl}`}
                   label="Адрес электронной почты" disabled={disabled} autoFocus=""/>

            <Field type="password" name="password" component={reduxRenderInputField}
                   id="inputPassword" className={`form-control ${style.formControl}`}
                   label="Пароль" disabled={disabled} required=""/>


            <Field type="password" name="repeatPassword" component={reduxRenderInputField}
                   id="repeatPassword" className={`form-control ${style.formControl}`}
                   label="Повторите пароль" disabled={disabled} required=""/>


            <Field type="tel" name="tel" component={reduxRenderInputField}
                   normalize={normalizePhone}
                   id="telInput" className={`form-control ${style.formControl}`}
                   label="Номер телефона" disabled={disabled} required=""/>

            <div className="checkbox mt-3 mb-3">

                <Field type="checkbox" name="agree" component={reduxRenderCheckBoxField}
                       disabled={disabled} value="remember-me"/>

            </div>

            <button className="btn btn-lg btn-success btn-block" disabled={disabled}>
                {disabled ? <img src={'preloaders/30.svg'} alt={'preloader'}/> : 'Зарегистрироваться'}
            </button>

        </form>
    )
};

const normalizePhone = (value, previousValue) => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '');

    if (!previousValue || value.length > previousValue.length) {
        // typing forward
        if (onlyNums.length === 2) {
            return '+' + onlyNums.slice(0, 1) + '(' + onlyNums.slice(1)
        }
        if (onlyNums.length === 4) {
            return '+' + onlyNums.slice(0, 1) + '(' + onlyNums.slice(1, 4) + ')'
        }

        if (onlyNums.length === 8) {
            return '+' + onlyNums.slice(0, 1) + '(' + onlyNums.slice(1, 4) + ')' + onlyNums.slice(4, 7) + '-' + onlyNums.slice(7)
        }

        if (onlyNums.length === 10) {
            return '+' + onlyNums.slice(0, 1) + '(' + onlyNums.slice(1, 4) + ')' + onlyNums.slice(4, 7) + '-' +
                onlyNums.slice(7, 9) + '-' + onlyNums.slice(9)
        }
    }
    if (onlyNums.length <= 2) {
        return '+' + onlyNums
    }
    if (onlyNums.length <= 4) {
        return '+' + onlyNums.slice(0, 1) + '(' + onlyNums.slice(1)
    }
    if (onlyNums.length <= 8) {
        return '+' + onlyNums.slice(0, 1) + '(' + onlyNums.slice(1, 4) + ')' + onlyNums.slice(4)
    }
    if (onlyNums.length <= 10) {
        return '+' + onlyNums.slice(0, 1) + '(' + onlyNums.slice(1, 4) + ')' + onlyNums.slice(4, 7) + '-' + onlyNums.slice(7)
    }
    return '+' + onlyNums.slice(0, 1) + '(' + onlyNums.slice(1, 4) + ')' + onlyNums.slice(4, 7) + '-' +
        onlyNums.slice(7, 9) + '-' + onlyNums.slice(9, 11)

};

const ReduxRegistrationForm = reduxForm({
    form: 'registration', // уникальное строговое имя (для state)
    validate: validateRegistration,
    initialValues: {telNumber: normalizePhone}
})(RegistrationForm);

export default connect(null, {addErrorToStack, removeErrorFromStack})(ReduxRegistrationForm)
