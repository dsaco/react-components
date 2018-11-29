import React, { Component } from 'react';

import Message from '../../components/Message';

export default class extends Component {
  
    add = () => {
        Message.open('普通信息')
    }
    info = () => {
        Message.info('修改成功')
    }
    success = () => {
        Message.success('修改成功')
    }
    warn = () => {
        Message.warn('内部错误')
    }
    error = () => {
        Message.error('内部错误 5s', { duration: 5 })
    }
    dark = () => {
        Message.dark('黑暗系列')
    }
    turn = () => {
        Message.config({
            duration: 10,
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.add}>add</button>
                <button onClick={this.success}>success</button>
                <button onClick={this.info}>info</button>
                <button onClick={this.warn}>warn</button>
                <button onClick={this.error}>error</button>
                <button onClick={this.dark}>dark</button>
                <button onClick={this.turn}>config 5s</button>
            </div>
        )
    }
}
