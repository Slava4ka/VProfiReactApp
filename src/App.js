import React, {useState} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration'
import Header from "./components/Header/Header";

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
        <div className="App">
            <HashRouter>
                <Header isHeaderVisible={isHeaderVisible}/>
                <Route exact path={'/'} render={() => (<Main/>)}/>
                <Route path={'/registration'}
                       render={() => (<Registration hideHeader={hideHeader} showHeader={showHeader}/>)}/>
            </HashRouter>
        </div>
    );
}

export default App;