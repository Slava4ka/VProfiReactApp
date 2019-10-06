import React from "react";
import {authApi} from "../../api/api";


const SET_USER_DATA = '/auth-reduser/SET-USER-DATA';

let initialState = {
    userId: null,

    isAuth: false,
    isFetching: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }

        default:
            return state

    }
};

const setAuthUserData = (userId, isAuth) => ({type: SET_USER_DATA, data: {userId, isAuth}});

export const authorization = () => {
    return (dispatch) => {
        authApi.authMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.login, true));
            } else {
                console.log("Error of authentication\nresultCode " + data.resultCode);
            }
        });
    }
};
