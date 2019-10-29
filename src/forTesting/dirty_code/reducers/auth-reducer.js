import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'vprofiapp/auth-reduser/SET-USER-DATA';
const SET_IS_AUTH = 'vprofiapp/auth-reduser/SET-IS-AUTH';
const TOGGLE_IS_FETCHING = "vprofiapp/auth-reduser/TOGGLE-IS-FETCHING";

let initialState = {
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }

        case SET_IS_AUTH: {
            return {...state, isAuth: action.isAuth}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state

    }
};

const setAuthUserInfo = () => ({type: SET_IS_AUTH, isAuth: true});
const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const registration = (telephone, email, password) => {
    console.log("registration");
    const legalTelephoneNumber = telephone.replace(/[^\d]/g, '');
    return (dispatch) => {
        dispatch(setToggleFetching(true));

        authApi.registration(legalTelephoneNumber, email, password).then(response => {

            if (response.status === 204) {
                console.log("Регистрация прошла успешно");
            } else {
                console.log(response)
            }
        }).catch(error => {

            console.log(error.response);
            console.log("status is " + error.response.status);

            const message = error.response.data ? `code ${error.response.data.code} - ${error.response.data.message}` : 'Some error';
            dispatch(stopSubmit('registration', {_error: message}));

        }).finally(() => dispatch(setToggleFetching(false)));
    }
};

export const getAuthUserInfo = () => {
    console.log("getAuthUserInfo");
    return (dispatch) => {
        authApi.checkAuth().then(response => {
            console.log(response);
            dispatch(setAuthUserInfo())
        }).catch(error => {
            console.log("error in getAuthUserInfo");
            console.log(JSON.stringify(error));
            console.log(error.response.status);
        })
    }
};

export default authReducer;