import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Buttons from './Buttons';
import Imgs from './Imgs';
import Progresses from './Progresses';
import Paginations from './Paginations';
import Switchs from './Switchs';
import Modals from './Modals';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 20}}>
                    <Link to="/" >home</Link>
                    <Link to="/buttons" >按钮</Link>
                    <Link to="/imgs" >图片预览</Link>
                    <Link to="/progresses" >进度条</Link>
                    <Link to="/paginations" >分页器</Link>
                    <Link to="/switchs" >Switch</Link>
                    <Link to="/modals" >Modal</Link>
                </div>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/buttons" component={Buttons} />
                    <Route path="/imgs" component={Imgs} />
                    <Route path="/progresses" component={Progresses} />
                    <Route path="/paginations" component={Paginations} />
                    <Route path="/switchs" component={Switchs} />
                    <Route path="/modals" component={Modals} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default hot(module)(App);
