import React, { Component } from 'react';

import Switch from '../../components/Switch';

export default class extends Component {
    state = {
        value: true,
    }
    render() {
        return (
            <div>
                <Switch onChange={(value) => this.setState({value})} value={this.state.value} />
                <hr />
                <Switch.Basic onChange={(value) => this.setState({value})} value={this.state.value} />
                <hr />
                <Switch.Water onChange={(value) => this.setState({value})} value={this.state.value} />
            </div>
        );
    }
}
