import React, {useState} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration'
import Header from "./components/Header/Header";
import store from './redux/redux-store';
import {Provider} from "react-redux";
import SignIn from "./components/SignIn/SignIn";
import CarouselTest from "./forTesting/Carousel/CarouselTest";
import ToastsTesting from "./forTesting/Toasts/ToastsTesting";
import Halloween from "./forTesting/Halloween/Halloween";
import IndexPage from "./components/IndexPage/IndexPage";

function App() {

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    console.log(isHeaderVisible);

    const hideHeader = () => {
        setIsHeaderVisible(false)
    };


    const showHeader = () => {
        setIsHeaderVisible(true)
    };

    return (
        <HashRouter>
            <Provider store={store}>
                <div className="App">

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
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;