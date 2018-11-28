import React, { Component } from 'react';

import Pagination from '../../components/Pagination';

export default class extends Component {
    render() {
        return (
            <div>
                <Pagination defaultCurrent={3} pageSize={10} onChange={(current) => console.log(current)} total={200} />
            </div>
        );
    }
}
