import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Buttons from './Buttons';
import Imgs from './Imgs';
import Paginations from './Paginations';
import Switchs from './Switchs';
import Modals from './Modals';
import DropDowns from './DropDowns';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 20}}>
                    <Link to="/" >API</Link>
                    <Link to="/buttons" >按钮</Link>
                    <Link to="/imgs" >图片预览</Link>
                    <Link to="/paginations" >分页器</Link>
                    <Link to="/switchs" >Switch</Link>
                    <Link to="/modals" >Modal</Link>
                    <Link to="/dropdowns" >DropDown</Link>
                </div>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/buttons" component={Buttons} />
                    <Route path="/imgs" component={Imgs} />
                    <Route path="/paginations" component={Paginations} />
                    <Route path="/switchs" component={Switchs} />
                    <Route path="/modals" component={Modals} />
                    <Route path="/dropdowns" component={DropDowns} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default hot(module)(App);
