import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { Transition } from 'react-spring';


const now = Date.now();
let key = 1;
let messageInstance;

class Notice extends PureComponent {
    static defaultProps = {
        duration: 2,
    }
    componentDidMount() {
        this.startCloseTimer();
    }
    close = () => {
        this.props.onClose();
    }
    startCloseTimer = () => {
        const { duration } = this.props;
        if (duration) {
            this.closeTimer = setTimeout(this.close, duration * 1000);
        }
    }
    render() {
        const { type, ...other } = this.props;
        return (
            <div className={`ds-message-item ${type}`} {...other}>
                {this.props.children}
            </div>
        )
    }
}

export class Notification extends PureComponent {
    state = {
        notices: [],
    }
    add(msg, type = ''){
        this.setState(prevState => {
            return {
                notices: prevState.notices.concat({
                    key: `ds-msg-${now}-${key++}`,
                    msg,
                    type,
                })
            }
        })
    }
    remove = (key) => {
        this.setState(prevState => ({notices: prevState.notices.filter(l => l.key !== key)}))
    }
    render() {
        const { notices } = this.state;
        return (
            <Transition
                items={notices} keys={item => item.key}
                from={{opacity: 0, height: 0, marginBottom: 12}}
                enter={{opacity: 1, height: 30, marginBottom: 12}}
                leave={{opacity: 0, height: 0, marginBottom: 0}}
            >
                {
                    item => props => <Notice style={props} type={item.type} onClose={() => this.remove(item.key)} >{item.msg}</Notice>
                }
            </Transition>
        );
    }
}

Notification.instance = function(callback) {
    const div = document.createElement('div');
    div.className = 'ds-message';
    document.body.appendChild(div);
    let called = false;

    function ref(notification) {
        if (called) {
            return;
        }
        called = true;
        callback({
            add(msg, type) {
                notification.add(msg, type);
            }
        })
    }
    ReactDOM.render(<Notification ref={ref} />, div);
}

function getMessageInstance(callback) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    Notification.instance((notification) => {
        messageInstance = notification;
        callback(notification);
    })
}

export default class Message {
    static open = (msg) => {
        getMessageInstance((instance) => {
            instance.add(msg);
        })
    }
    static dark = (msg) => {
        getMessageInstance((instance) => {
            instance.add(msg, 'dark');
        })
    }
    static info = (msg) => {
        getMessageInstance((instance) => {
            instance.add(msg, 'info');
        })
    }
    static warn = (msg) => {
        getMessageInstance((instance) => {
            instance.add(msg, 'warn');
        })
    }
    static error = (msg) => {
        getMessageInstance((instance) => {
            instance.add(msg, 'error');
        })
    }
    static success = (msg) => {
        getMessageInstance((instance) => {
            instance.add(msg, 'success');
        })
    }
    static config = (options = {}) => {
        Object.assign(Notice.defaultProps, options);
    }
}


