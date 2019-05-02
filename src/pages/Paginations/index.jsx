import React, { Component } from 'react';

import Pagination from '../../components/Pagination';

export default class extends Component {
    state = {
        total: undefined,
        pageSize: 100,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                total: 200,
                pageSize: 4
            })
        }, 5000)
    }
    render() {
        return (
            <div>
                <Pagination defaultCurrent={3} pageSize={this.state.pageSize} onChange={(current) => console.log(current)} total={this.state.total} />
        </div>
        );
    }
}
