import React from 'react';

import Button from '../../components/Button';

export default class extends React.Component {

    add = () => {
    }
    render() {
        return (
            <div>
                <hr />
                <Button style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
                <Button color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button color="secondary" onClick={() => console.log('secondary')}>secondary</Button>
                <hr />
                <Button variant="outline" style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
                <Button variant="outline" color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button variant="outline" color="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <hr />
                <Button variant="text" style={{marginRight: 10}} onClick={() => console.log('default')}>default</Button>
                <Button variant="text" color="primary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <Button variant="text" color="secondary" style={{marginRight: 10}} onClick={() => console.log('primary')}>primary</Button>
                <hr />

                <Button style={{width: 50, height: 50, borderRadius: '50%'}} color="primary" onClick={() => console.log('secondary')}>+</Button>
            </div>
        )
    }
}