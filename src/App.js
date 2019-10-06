import React, {useState} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration'
import Header from "./components/Header/Header";
import store from './redux/redux-store';
import {Provider} from "react-redux";
import Test from "./components/Test/Test";

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
                    <Route exact path={'/test'} render={() => (<Test/>)}/>
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;