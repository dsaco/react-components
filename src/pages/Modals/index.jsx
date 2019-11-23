import React, { Component } from 'react';

import Modal from '../../components/Modal';

export default class extends Component {
    state = {
        visible: false,
        visible2: false,
    }
    toggle = () => {
        this.setState(prevState => ({visible: !prevState.visible, visible2: !prevState.visible}))
    }
    render() {
        const { visible } = this.state;
        return (
            <div>
                <Modal
                    closable={true} title="添加好友" visible={visible} onCancel={this.toggle} 
                    // maskColor="red"
                    maskClosable={false}
                />
                
                
                <button onClick={this.toggle}>open</button>
                <h1>111</h1>
            </div>
        );
    }
}
