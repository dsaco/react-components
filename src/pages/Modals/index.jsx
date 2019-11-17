import React, { Component } from 'react';

import Modal from '../../components/Modal';
import Modal2 from '../../components/Modal2';

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
                <Modal visible={false} onCancel={() => {
                        console.log('hehe');
                        this.setState({visible: false})
                    }} />
                <Modal2 visible={visible} onCancel={() => this.setState({visible: false})}>
                    <h1>111</h1>
                    <h1>111</h1>
                    <textarea></textarea>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                    <h1>111</h1>
                </Modal2>
                <button onClick={this.toggle}>open</button>
                
            </div>
        );
    }
}
