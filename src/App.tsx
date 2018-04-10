import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/main.styl';

const logo = require('./assets/logo.svg') as string;

class App extends Component<{}> {
    render(): Object {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <div>
                    <Link to="/">index</Link>
                    <Link to="/a">go to pageA</Link>
                    <Link to="/b">go to pageB</Link>
                </div>
            </div>
        );
    }
}

export default App;
