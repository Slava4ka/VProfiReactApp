import React, {useEffect} from 'react';
import styles from './SignIn.module.css';
import ReduxSignInForm from "./SignInForm";
import {NavLink} from "react-router-dom";


const SignIn = ({hideHeader, showHeader}) => {


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
                <img className="mb-5" src="5551.png" alt="" width="300px" height="100px"/>
            </NavLink>

            <ReduxSignInForm onSubmit={onSubmit}/>
            <p className="mt-5 mb-3 text-muted">@VPROFI.RU 2019 All rights reserved </p>

        </div>
    )
};

export default SignIn;