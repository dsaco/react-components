import React, { Component } from 'react';

import Button from '../../components/Button';

export default class extends Component {
    render() {
        return (
            <div>
                <hr />
                <Button style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
                <Button color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button color="secondary" style={{marginRight: 10}} onClick={() => console.log('secondary')}>secondary</Button>
                <Button disabled={true} style={{marginRight: 10}} color="secondary" onClick={() => console.log('disabled')}>disabled</Button>
                <hr />
                <Button variant="outline" style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
                <Button variant="outline" color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button variant="outline" style={{marginRight: 10}} color="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button disabled={true} variant="outline" color="secondary" style={{marginRight: 10}} onClick={() => console.log('disabled')}>disabled</Button>
                <hr />
                <Button variant="text" style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
                <Button variant="text" color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button variant="text" color="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button disabled={true} variant="text" color="secondary" style={{marginRight: 10}} onClick={() => console.log('disabled')}>disabled</Button>
                <hr />
                <Button style={{width: 50, height: 50, borderRadius: '50%'}} color="primary" onClick={() => console.log('secondary')}>+</Button>
            </div>
        )
    }
}