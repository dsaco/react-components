import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BEFORE = 'BEFORE';
const AFTER = 'AFTER';

export default class Pagination extends Component {
    static defaultProps = {
        defaultCurrent: 1,
        pageSize: 15,
        step: 3,
        counts: 0,
    }
    state = {
        pages: [],
        current: this.props.defaultCurrent,
    }
    componentDidMount() {
        this.calcPages();
    }
    before = () => {
        const { current } = this.state;
        const _current = Math.max(current - 5, 0);
        this.goPage(_current);
    }
    after = () => {
        const { current, counts } = this.state;
        const _current = Math.min(current + 5, counts);
        this.goPage(_current);
    }
    next = () => {
        const { current, counts } = this.state;
        if (current === counts) {
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
            this.calcPages();
            this.props.onChange && this.props.onChange(current);
        })
    }
    calcPages = () => {
        const { total, pageSize, step } = this.props;
        const { current } = this.state;

        const counts = Math.ceil(total / pageSize);
        const pages = [];

        for (let i = 1; i <= counts; i++) {
            if ( i === 1) {
                pages.push(i);
            } else if (i >= current - step && i <= current) {
                if (i == current - step && i >= 3) {
                    pages.push(BEFORE);
                } else {
                    pages.push(i);
                }
            } else if (i <= current + step && i > current) {
                if (i == current + step && i <= counts - 2) {
                    pages.push(AFTER);
                } else {
                    pages.push(i);
                }
            } else if (i === counts) {
                pages.push(i);
            }
        }

        this.setState({
            pages, counts,
        });
    }
    render() {
        const { pages, current, counts } = this.state;
        return (
            <ul className="ds-pagination">
                <li onClick={this.prev} className={`ds-pagination-item ${current === 1 ? 'disabled' : ''}`}>&lt;</li>
                {
                    pages.map((page) => {
                        if (page === BEFORE) {
                            return <li onClick={this.before} data-place="«" className={`ds-pagination-before-after`} key={page}></li>
                        } else if (page === AFTER) {
                            return <li onClick={this.after} data-place="»" className={`ds-pagination-before-after`} key={page}></li>
                        } else {
                            return <li onClick={() => this.goPage(page)} className={`ds-pagination-item ${current === page ? 'ds-pagination-item-active' : ''}`} key={page}>{page}</li>
                        }
                    })
                }
                <li onClick={this.next} className={`ds-pagination-item ${current === counts ? 'disabled' : ''}`}>&gt;</li>
            </ul>
        );
    }
}

Pagination.propTypes = {
    total: PropTypes.number.isRequired,
    defaultCurrent: PropTypes.number,
    pageSize: PropTypes.number,
    onChange: PropTypes.func,
    step: PropTypes.number,
}
