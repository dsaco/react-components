import React, { Component } from 'react';

import Progress from '../../components/Progress';

export default class extends Component {
    start = () => {
        Progress.start();
    }
    done = () => {
        Progress.done();
    }
    render() {
        return (
            <div>
                <button onClick={this.start}>strat</button>
                <button onClick={this.done}>done</button>
            </div>
        );
    }
}