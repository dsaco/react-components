import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" >home</Link>
                <Link to="/about" >about</Link>
                <h1>app</h1>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/about" component={About} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default hot(module)(App);