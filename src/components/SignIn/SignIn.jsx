import React, {useEffect} from 'react';
import styles from './SignIn.module.css';
import ReduxSignInForm from "./SignInForm";
import {NavLink} from "react-router-dom";
import {Alert} from "react-bootstrap";
import style from "../Registration/Registration.module.css";
import {connect} from "react-redux";

const SignIn = ({hideHeader, showHeader, errorsFromInput}) => {

// если пользователь авторизован, то сюда он никак не дожен попасть!!!!!

    useEffect(() => {
        hideHeader();
        return () => {
            showHeader();
        };
    },);

    const onSubmit = (formData) => {
        console.log("Submit");
        console.log(formData);
    };

    return (<div className={`text-center ${styles.signInPage}`}>
            <NavLink to={'/'}>
                <img className="mt-5 mb-3" src="5551.png" alt="" width="300px" height="100px"/>
            </NavLink>

            <ReduxSignInForm onSubmit={onSubmit}/>
            <p className="mt-5 mb-3 text-muted">@VPROFI.RU 2019 All rights reserved </p>

            {
                errorsFromInput &&
                <Alert className={style.alert} variant={'danger'}>
                    {errorsFromInput}
                </Alert>

            }
        </div>
    )
};

const mapStateToProps = state => ({
    errorsFromInput: state.registrationAndLogIn.errors
});

export default connect(mapStateToProps, {})(SignIn)
