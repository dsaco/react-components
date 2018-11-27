import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Buttons from './Buttons';
import Imgs from './Imgs';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 20}}>
                    <Link to="/" >home</Link>
                    <Link to="/buttons" >按钮</Link>
                    <Link to="/imgs" >图片预览</Link>
                </div>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/buttons" component={Buttons} />
                    <Route path="/imgs" component={Imgs} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default hot(module)(App);