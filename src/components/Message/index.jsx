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
        console.log(duration)
        this.closeTimer = setTimeout(this.close, duration * 1000);
    }
    render() {
        const { type, ...other } = this.props;
        return (
            <div className="ds-message-item" {...other}>
                {
                    type === 'success' && <svg style={{marginRight: 10}} viewBox="64 64 896 896" data-icon="check-circle" width="1em" height="1em" fill="#74c140" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                }
                {
                    type === 'error' && <svg style={{marginRight: 10}} viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="#df3c38" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
                }
                {
                    type === 'warn' && <svg style={{marginRight: 10}} viewBox="64 64 896 896" data-icon="exclamation-circle" width="1em" height="1em" fill="#faad14" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>
                }
                {
                    type === 'info' && <svg style={{marginRight: 10}} viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="#1890ff" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>
                }
                <span>{this.props.children}</span>
            </div>
        )
    }
}

export class Notification extends PureComponent {
    state = {
        notices: [],
    }
    add(msg, type = '', duration = 2){
        this.setState(prevState => {
            return {
                notices: prevState.notices.concat({
                    key: `ds-msg-${now}-${key++}`,
                    msg,
                    type,
                    duration,
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
    static open = (msg, duration) => {
        getInst().add(msg, '', duration);
    }
    static dark = (msg, duration) => {
        getInst().add(msg, 'dark', duration);
    }
    static info = (msg, duration) => {
        getInst().add(msg, 'info', duration);
    }
    static warn = (msg, duration) => {
        getInst().add(msg, 'warn', duration);
    }
    static error = (msg, duration) => {
        getInst().add(msg, 'error', duration);
    }
    static success = (msg, duration) => {
        getInst().add(msg, 'success', duration);
    }
    static config = (options = {}) => {
        Object.assign(Notice.defaultProps, options);
    }
}
