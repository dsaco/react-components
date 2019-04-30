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
                <Modal visible={visible} onCancel={() => {
                        console.log('hehe');
                        this.setState({visible: false})
                    }} />
                <button onClick={this.toggle}>open</button>
            </div>
        );
    }
}
