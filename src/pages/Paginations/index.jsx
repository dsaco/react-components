import React, { Component } from 'react';

import Pagination from '../../components/Pagination';

export default class extends Component {
    state = {
        current: 3,
    }
    render() {
        return (
            <div>
                <Pagination pageSize={20} onChange={(page) => console.log(page)} current={this.state.current} total={200} />
            </div>
        );
    }
}
