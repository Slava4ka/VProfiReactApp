import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/main'} render={() => (<Main/>)}/>
                <Route path={'/registration'} render={() => (<Registration/>)}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
