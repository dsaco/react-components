import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Transition, Spring } from 'react-spring';

let progressInstance;

class ProgressUi extends Component {
    state = {
        percent:10,
        isTrans: false,
    }
    start = () => {
        this.work();
    }
    work = () => {
        this.timer = setTimeout(() => {
            const { percent } = this.state;
            if (percent > 95) {
                clearTimeout(this.timer);
                return;
            }
            this.inc();
            this.work();
        }, 500);
    }
    inc = () => {
        const { percent } = this.state;
        const mount = parseInt(Math.random() * 5);
        this.setState({
            percent: percent + mount
        })
    }
    done = () => {
        clearTimeout(this.timer);
        this.setState({
            percent: 100,
        }) 
    }
    render() {
        const { percent } = this.state;
        
        return (
            <div className="ds-progress">
                <Spring
                    from={{transform: `scaleX(0)`}}
                    to={{transform: `scaleX(${percent / 100})`}}
                    reset={true}
                >
                    {
                        props => 
                        <div style={props} className="ds-progress-inner"></div>
                    }
                </Spring>
               
            </div>
        );
    }
}
ProgressUi.instance = function(callback) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let called = false;

    function ref(progress) {
        if (called) {
            return;
        }
        called = true;
        callback({
            start() {
                progress.start();
            },
            inc() {
                progress.inc();
            },
            done() {
                progress.done();
            }
        })
    }
    ReactDOM.render(<ProgressUi ref={ref} />, div);
}

function getInstance(callback) {
    if (progressInstance) {
        callback(progressInstance);
        return;
    }
    ProgressUi.instance((progress) => {
        progressInstance = progress;
        callback(progress);
    })
}

export default class Progress {
    static start = () => {
        getInstance((instance) => {
            instance.start();
        })
    }
    static inc = () => {
        getInstance((instance) => {
            instance.inc();
        })
    }
    static done = () => {
        getInstance((instance) => {
            instance.done();
        })
    }
}