import React, { Component } from 'react';

import Message from '../../components/Message';
import Progress from '../../components/Progress';

export default class extends Component {
    state = {
        visible: false,
    }
    open = () => {
        Message.open('普通信息', 3)
    }
    info = () => {
        Message.info('修改成功', 3)
    }
    success = () => {
        Message.success('修改成功', 2)
    }
    warn = () => {
        Message.warn('内部错误', 3)
    }
    error = () => {
        Message.error('内部错误 5s', 2)
    }
    dark = () => {
        Message.dark('黑暗系列', 3)
    }
    render() {
        return (
            <div>
                <h3>Message</h3>
                <button onClick={this.open}>open</button>
                <button onClick={this.success}>success</button>
                <button onClick={this.info}>info</button>
                <button onClick={this.warn}>warn</button>
                <button onClick={this.error}>error</button>
                <button onClick={this.dark}>dark</button>
                <h3>Progress</h3>
                <button onClick={Progress.start}>strat</button>
                <button onClick={Progress.done}>done</button>
                
            </div>
        )
    }
}
