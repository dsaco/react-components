import React, { Component } from 'react';

import Modal from '../../components/Modal';

export default class extends Component {
    state = {
        visible: false,
    }
    toggle = () => {
        this.setState(prevState => ({visible: !prevState.visible}))
    }
    render() {
        const { visible } = this.state;
        return (
            <div>
                <Modal visible={visible} onCancel={() => {
                        console.log('hehe');
                        this.toggle();
                    }} />
                <button onClick={this.toggle}>open</button>
            </div>
        );
    }
}
