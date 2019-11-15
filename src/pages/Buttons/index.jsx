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
                <hr />
                <button className="ds-button" onClick={this.dark}>dark</button>
                <button className="ds-button primary" onClick={this.dark}>dark</button>
                <button className="ds-button secondary" onClick={this.dark}>dark</button>
                <hr />
                <button className="ds-button outline" onClick={this.dark}>dark</button>
                <button className="ds-button outline primary" onClick={this.dark}>dark</button>
                <button className="ds-button outline secondary" onClick={this.dark}>dark</button>
                <hr />
                <button className="ds-button text" onClick={this.dark}>dark</button>
                <button className="ds-button text primary" onClick={this.dark}>dark</button>
                <button className="ds-button text secondary" onClick={this.dark}>dark</button>
            </div>
        )
    }
}