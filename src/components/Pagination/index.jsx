import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
    static defaultProps = {
        current: 1,
        pageSize: 15,
    }
    state = {
        pages: [],
        current: this.props.current,
    }
    // static getDerivedStateFromProps(props, state) {
    //     if(props.current !== state.current) {
    //         return {
    //             current: props.current,
    //         }
    //     }
    //     return null
    // }
    componentDidMount() {
        const { total, pageSize } = this.props;

        const counts = Math.ceil(total / pageSize);
        const pages = [];
        for (let i = 1; i <= counts; i++) {
            pages.push(i);
        }


        this.setState({
            pages,
        });
    }
    next = () => {
        const { current, pages } = this.state;
        if (current === pages.length) {
            return;
        }
        this.goPage(current + 1);
    }
    prev = () => {
        const { current } = this.state;
        if (current === 1) {
            return;
        }
        this.goPage(current - 1);
    }
    goPage = (current) => {
        this.setState({current}, () => {
            this.props.onChange && this.props.onChange(current);
        })
    }
    render() {
        const { pages, current } = this.state;
        return (
            <ul className="ds-pagination">
                <li onClick={this.prev} className={`ds-pagination-item ${current === 1 ? 'disabled' : ''}`}>prev</li>
                {
                    pages.map((page) => {
                        return <li onClick={() => this.goPage(page)} className={`ds-pagination-item ${current === page ? 'ds-pagination-item-active' : ''}`} key={page}>{page}</li>
                    })
                }
                <li onClick={this.next} className={`ds-pagination-item ${current === pages.length ? 'disabled' : ''}`}>next</li>
            </ul>
        );
    }
}

Pagination.propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    onChange: PropTypes.func,
}