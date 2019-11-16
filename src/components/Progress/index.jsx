import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { Transition } from 'react-spring/renderprops';

class ProgressUi extends PureComponent {
    state = {
        percent: 0,
        visible: false,
    }
    start = () => {
        if (!this.state.visible) {
            this.setState({visible: true});
            this.work();
        }
    }
    work = () => {
        this.timer = setInterval(() => {
            if (this.state.percent > 98) {
                clearInterval(this.timer);
            } else {
                this.inc();
            }
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
        this.setState({ percent: percent + mount });
    }
    done = () => {
        if (this.state.visible) {
            clearInterval(this.timer);
            this.setState({ percent: 100 }, () => {
                setTimeout(() => {
                    this.setState({visible: false}, () => {
                        setTimeout(() => {
                            this.setState({percent: 0});
                        }, 300);
                    });
                }, 300);
            });
        }
    }
    render() {
        const { percent, visible } = this.state;
        return (
            <Transition
                items={visible}
                from={{opacity: 0}}
                enter={{opacity: 1}}
                leave={{opacity: 0}}
            >
                {
                    (visible) => (visible) && (
                        (props) => (
                            <div style={props} className="ds-progress">
                                <div style={{transform: `translate3d(${percent}%, 0, 0)`}} className="ds-progress-inner"></div>
                            </div>
                        )
                    )
                }
            </Transition>
        );
    }
}

let progressInstance;

function getInst() {
    if (progressInstance) {
        return progressInstance;
    } else {
        const div = document.createElement('div');
        document.body.appendChild(div);
        return progressInstance = ReactDOM.render(<ProgressUi />, div);
    }
}

export default class Progress {
    static start = getInst().start;
    static done = getInst().done;
}