import React, {useState, useEffect} from 'react';
import './App.css';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration'
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

function App({initializeApp, initialized}) {

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {
        initializeApp()
    }, []);

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

                    <Route exact path={'/'} render={() => (<Main/>)}/>

                    <Route path={'/registration'}
                           render={() => (<Registration hideHeader={hideHeader} showHeader={showHeader}/>)}/>

                    <Route path={'/signIn'}
                           render={() => (<SignIn hideHeader={hideHeader} showHeader={showHeader}/>)}/>

                    {/*тестирование*/}
                    <Route path={'/carousel'} render={() => (<CarouselTest/>)}/>
                    <Route path={'/toasts'} render={() => (<ToastsTesting/>)}/>
                    <Route path={'/halloween'} render={() => (<Halloween/>)}/>
                    <Route path={'/index'} render={() => (<IndexPage/>)}/>
                    <Route path={'/scroll'} render={() => (<ScrollPage/>)}/>
                </>
                :
                <InitialPreloader/>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(withRouter,
    (connect(mapStateToProps, {initializeApp})))(App);


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
