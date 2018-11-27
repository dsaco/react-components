import React from 'react';

import Progress from '../../components/Progress';

export default class extends React.Component {

    start = () => {
        Progress.start();
    }
    inc = () => {
        Progress.inc();
    }
    done = () => {
        Progress.done();
    }
    render() {
        return (
            <div>
                <button onClick={this.start}>strat</button>
                <button onClick={this.inc}>inc</button>
                <button onClick={this.done}>done</button>
            </div>
        )
    }
}