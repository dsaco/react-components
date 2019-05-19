import React, { Component } from 'react';

import DropDown from '../../components/DropDown';


export default class extends Component {
    render() {
        return (
            <div style={{padding: 100, backgroundColor: '#ebebeb'}}>
                <h3>DropDown</h3>
                <DropDown />
            </div>
        )
    }
}
