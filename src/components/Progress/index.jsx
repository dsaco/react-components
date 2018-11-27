import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Transition, Spring } from 'react-spring';

let progressInstance;

class ProgressUi extends Component {
    state = {
        percent: 0,
        show: false,
    }
    start = () => {
        this.setState({show: true});
        this.work();
    }
    work = () => {
        this.timer = setTimeout(() => {
            const { percent } = this.state;
            if (percent > 98) {
                clearTimeout(this.timer);
                return;
            }
            this.inc();
            this.work();
        }, 500);
    }
    inc = () => {
        const { percent } = this.state;
        let mount = 0;
        if (percent < 20) {
            mount = parseInt(Math.random() * 20);
        } else if (percent < 50) {
            mount = parseInt(Math.random() * 10);
        } else if (percent < 80) {
            mount = parseInt(Math.random() * 5);
        } else {
            mount = parseInt(Math.random() * 2);
        }
        this.setState({
            percent: percent + mount
        })
    }
    done = () => {
        clearTimeout(this.timer);
        this.setState({
            percent: 100,
        }, () => {
            setTimeout(() => {
                this.setState({show: false}, () => {
                    setTimeout(() => {
                        this.setState({percent: 0});
                    }, 300);
                });
            }, 300);
        }) 
    }
    render() {
        const { percent, show } = this.state;
        return (
            <Transition
                items={show}
                from={{opacity: 0}}
                enter={{opacity: 1}}
                leave={{opacity: 0}}
            >
                {
                    show =>
                    show && (
                        props => (
                            <div style={props} className="ds-progress">
                                <div style={{transform: `scaleX(${percent / 100})`}} className="ds-progress-inner"></div>
                            </div>
                        )
                    )
                }
            </Transition>
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