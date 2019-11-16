import React, { Component } from 'react';

import Button from '../../components/Button';

export default class extends Component {
    render() {
        return (
            <div>
                <hr />
                <Button style={{marginRight: 10}} onClick={() => console.log('default')}>中文怎么样</Button>
                <Button type="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button type="secondary" style={{marginRight: 10}} onClick={() => console.log('secondary')}>secondary</Button>
                <Button disabled style={{marginRight: 10}} type="secondary" onClick={() => console.log('disabled')}>disabled</Button>
                <hr />
                <Button outline style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
                <Button outline type="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button outline style={{marginRight: 10}} type="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button outline disabled type="secondary" style={{marginRight: 10}} onClick={() => console.log('disabled')}>disabled</Button>
                <hr />
                <Button link style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
                <Button link type="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button link type="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button link disabled type="secondary" style={{marginRight: 10}} onClick={() => console.log('disabled')}>disabled</Button>
                <hr />
                <Button style={{width: 50, height: 50, borderRadius: '50%'}} type="primary" onClick={() => console.log('secondary')}>+</Button>
            </div>
        )
    }
}