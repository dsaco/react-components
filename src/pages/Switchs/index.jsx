import React, { Component } from 'react';

import Switch from '../../components/Switch';

export default class extends Component {
    state = {
        value: true,
    }
    render() {
        return (
            <div>
                <Switch color="red" onChange={(value) => this.setState({value})} value={this.state.value} />
                <hr />
                <Switch.Move color="rgb(87, 231, 128)" onChange={(value) => this.setState({value})} value={this.state.value} />
            </div>
        );
    }
}
