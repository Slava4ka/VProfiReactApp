import React from 'react';
import './App.css';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration'

function App() {
    return (
        <div className="App">
            <HashRouter >

                <div className={"navbar"}>
                    <nav>
                        <NavLink to={'/main'}>Main</NavLink>
                        <br/>
                        <NavLink to={'/registration'}>Registration</NavLink>
                    </nav>
                </div>

                <Route path={'/main'} render={() => (<Main/>)}/>
                <Route path={'/registration'} render={() => (<Registration/>)}/>

            </HashRouter >
        </div>
    );
}

export default App;
