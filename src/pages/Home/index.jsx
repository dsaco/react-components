import React, { Component } from 'react';

import Message from '../../components/Message';
import Img from '../../components/Img';

export default class extends Component {
  
    add = () => {
        Message.open(Date.now())
    }
    info = () => {
        Message.info(Date.now())
    }
    warn = () => {
        Message.warn(Date.now())
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
                <button onClick={this.info}>info</button>
                <button onClick={this.warn}>warn</button>
                <button onClick={this.turn}>turn</button>
                <hr />
                <Img src="//www.baidu.com/img/baidu_jgylogo3.gif" />
                <Img style={{width: 300, height: 50}} src="https://cdn.ds-or.com/article/cover/1502977845_w_720_h_474_bvpqz.jpg" />


            </div>
        )
    }
}
