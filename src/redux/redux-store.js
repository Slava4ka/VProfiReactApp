import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/auth-reducer';
import signUpAndInReducer from "./reducers/signUpAndIn-reducer";
import appReducer from "./reducers/app-reducer";

const reducers = combineReducers({
        auth: authReducer,
        registrationAndLogIn: signUpAndInReducer,
        app: appReducer,
        form: formReducer
    }
);

// Добавил composeEnhancers для работы приложения Redux dev tools. ПРИ СДАЧЕ ОБЯЗАТЕЛЬННО ВЫПИЛИТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// все данные из redux идут через Контекст

//  Для доступа к стору из консоли. ПРИ СДАЧЕ ОБЯЗАТЕЛЬННО ВЫПИЛИТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
window.__store__ = store;

export default store;