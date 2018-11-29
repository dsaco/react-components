import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { Transition } from 'react-spring';

const now = Date.now();
let key = 1;

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
    add(msg, type = '', config = {}){
        this.setState(prevState => {
            return {
                notices: prevState.notices.concat({
                    key: `ds-msg-${now}-${key++}`,
                    msg,
                    type,
                    duration: config.duration,
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
                    item => props => <Notice style={props} type={item.type} duration={item.duration} onClose={() => this.remove(item.key)} >{item.msg}</Notice>
                }
            </Transition>
        );
    }
}

let messageInstance;

function getInst() {
    if (messageInstance) {
        return messageInstance;
    } else {
        const div = document.createElement('div');
        div.className = 'ds-message';
        document.body.appendChild(div);
        return messageInstance = ReactDOM.render(<Notification />, div);
    }
}

export default class Message {
    static open = (msg, config) => {
        getInst().add(msg, '', config);
    }
    static dark = (msg, config) => {
        getInst().add(msg, 'dark', config);
    }
    static info = (msg, config) => {
        getInst().add(msg, 'info', config);
    }
    static warn = (msg, config) => {
        getInst().add(msg, 'warn', config);
    }
    static error = (msg, config) => {
        getInst().add(msg, 'error', config);
    }
    static success = (msg, config) => {
        getInst().add(msg, 'success', config);
    }
    static config = (options = {}) => {
        Object.assign(Notice.defaultProps, options);
    }
}
