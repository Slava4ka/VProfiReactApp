import React, {useState, useEffect} from 'react';
import './App.css';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/SignUp/SignUp'
import Header from "./components/Header/Header";
import store from './redux/redux-store';
import {connect, Provider} from "react-redux";
import SignIn from "./components/SignIn/SignIn";
import CarouselTest from "./forTesting/Carousel/CarouselTest";
import ToastsTesting from "./forTesting/Toasts/ToastsTesting";
import Halloween from "./forTesting/Halloween/Halloween";
import IndexPage from "./components/IndexPage/IndexPage";
import ScrollPage from "./forTesting/Scroll/ScrollPage";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import InitialPreloader from "./components/common/Preloader/InitialPreloader";
import {SuccessAlert} from "./components/common/Alerts/Alerts";
import {setStatusToNewUserAlert} from "./redux/reducers/signUpAndIn-reducer";

function App({initialized, newUserAlert, setStatusToNewUserAlert}) {

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {
        console.log("newUserAlert " + newUserAlert);
        if (newUserAlert) {
            setTimeout(setStatusToNewUserAlert, 6000, false);
        }
    }, [newUserAlert]);

    // console.log("isHeaderVisible "+ isHeaderVisible);

    const hideHeader = () => {
        setIsHeaderVisible(false)
    };

    const showHeader = () => {
        setIsHeaderVisible(true)
    };

    return (
        <div className="App">
            {initialized ?
                <>
                    <Header isHeaderVisible={isHeaderVisible}/>

                    <Route exact path={'/'} render={() => (<IndexPage/>)}/>

                    <Route path={'/registration'}
                           render={() => (<Registration hideHeader={hideHeader}
                                                        showHeader={showHeader}/>)
                           }/>

                    <Route path={'/signIn'}
                           render={() => (<SignIn hideHeader={hideHeader} showHeader={showHeader}/>)}/>

                    {/*тестирование*/}
                    <Route path={'/carousel'} render={() => (<CarouselTest/>)}/>
                    <Route path={'/toasts'} render={() => (<ToastsTesting/>)}/>
                    <Route path={'/halloween'} render={() => (<Halloween/>)}/>
                    <Route path={'/index'} render={() => (<Main/>)}/>
                    <Route path={'/scroll'} render={() => (<ScrollPage/>)}/>

                    {
                        newUserAlert &&
                        <SuccessAlert data={'Поздравляем! Вы успешно прошли регистрацию в сервисе VPROFI.RU'}/>
                    }
                </>
                :
                <InitialPreloader/>
            }
        </div>
    );

}

function AppShell({initializeApp, initialized, newUserAlert, setStatusToNewUserAlert}) {
    useEffect(() => {
        console.log("initialized");
        initializeApp();
    }, []);

    return (<App initialized={initialized} newUserAlert={newUserAlert} setStatusToNewUserAlert={setStatusToNewUserAlert}/>)
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    newUserAlert: state.registrationAndLogIn.newUserAlert
});

const AppContainer = compose(withRouter,
    (connect(mapStateToProps, {initializeApp, setStatusToNewUserAlert})))(AppShell);


const AppDone = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};

export default AppDone
