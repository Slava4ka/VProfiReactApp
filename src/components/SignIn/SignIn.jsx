import React, {useEffect} from 'react';
import styles from './SignIn.module.css';
import ReduxSignInForm from "./SignInForm";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {ErrorAlert} from "../common/Alerts/Alerts";
import {cleanErrorStack} from "../../redux/reducers/signUpAndIn-reducer";

const SignIn = ({hideHeader, showHeader, errorsFromInput, isAuth, isFetching, login, cleanErrorStack}) => {

// если пользователь авторизован, то сюда он никак не дожен попасть!!!!!

    useEffect(() => {
        hideHeader();
        cleanErrorStack();
        return () => {
            showHeader();
        };
    }, []);

    const onSubmit = (formData) => {
        console.log("Submit");
        console.log(formData);
        login(formData.emailOrTelephoneNumber, formData.password)
    };


    if (isAuth) {
        return <Redirect to={'/'}/>
    } else {
        return (<div className={`text-center ${styles.signInPage}`}>
                <NavLink to={'/'}>
                    <img className="mt-5 mb-3" src="5551.png" alt="" width="300px" height="100px"/>
                </NavLink>

                <ReduxSignInForm onSubmit={onSubmit} disabled={isFetching}/>
                <p className="mt-5 mb-3 text-muted">@VPROFI.RU 2019 All rights reserved </p>

                {
                    errorsFromInput &&
                    <ErrorAlert data={errorsFromInput}/>
                }
            </div>
        )
    }
};

const mapStateToProps = state => ({
    errorsFromInput: state.registrationAndLogIn.errors,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, cleanErrorStack})(SignIn)
