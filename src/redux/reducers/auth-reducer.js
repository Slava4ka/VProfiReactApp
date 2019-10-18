import {authApi} from "../../api/api";

const SET_USER_DATA = 'vprofiapp/auth-reduser/SET-USER-DATA';
const TOGGLE_IS_FETCHING = "vprofiapp/auth-reduser/TOGGLE-IS-FETCHING";

let initialState = {
    isAuth: false,
    isFetching: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state

    }
};

// const setAuthUserData = (isAuth) => ({type: SET_USER_DATA, data: {isAuth}});
const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const registration = (login, email, password) => {
    console.log("in registration");

    return (dispatch) => {
        console.log("in registration dispatch");
        dispatch(setToggleFetching(true));

        authApi.registration(login, email, password).then(response => {
            console.log("data from request");
            console.log(response)
        });

        dispatch(setToggleFetching(false));
    }
};

export const login = (email, password) => {
    console.log("in login");
    return (dispatch) => {
        console.log("in login dispatch");
        dispatch(setToggleFetching(true));

        authApi.login(email, password).then(response => {
            console.log("data from request");
            console.log(response)
        }).catch(function (error) {
            console.log(Object.keys(error));
            console.log(error.message);
            console.log(error.config);
            console.log(error.request);
        });

        dispatch(setToggleFetching(false));
    }
};

export default authReducer;