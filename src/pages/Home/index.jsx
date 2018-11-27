import React, { Component } from 'react';

import Message from '../../components/Message';

export default class extends Component {
  
    add = () => {
        Message.open(Date.now())
    }
    info = () => {
        Message.info(Date.now())
    }
    success = () => {
        Message.success(Date.now())
    }
    warn = () => {
        Message.warn(Date.now())
    }
    dark = () => {
        Message.dark(Date.now())
    }
    turn = () => {
        Message.config({
            duration: 5,
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.add}>add</button>
                <button onClick={this.success}>success</button>
                <button onClick={this.info}>info</button>
                <button onClick={this.warn}>warn</button>
                <button onClick={this.dark}>dark</button>
                <button onClick={this.turn}>config 5s</button>
            </div>
        )
    }
}
