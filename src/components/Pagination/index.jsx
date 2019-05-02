import React, { useState, useEffect } from 'react';

const BEFORE = 'BEFORE';
const AFTER = 'AFTER';

export default ({total, pageSize, onChange}) => {
    total = total || 1;
    pageSize = pageSize || 15;
    const [current, setCurrent] = useState(1);
    const [pages, setPages] = useState([]);
    const counts = Math.ceil(total / pageSize);
    const step = 3;
    useEffect(() => {
        const pages = [];
        for (let i = 1; i <= counts; i++) {
            if (i === 1) {
                pages.push(i);
            } else if (i >= current - step && i <= current) {
                if (i === current - step && i >= 3) {
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
        setPages(pages);
    }, [total, pageSize, current]);
    function _setCurrent(_current) {
        setCurrent(_current);
        onChange && onChange(_current);
    }
    return (
        <ul className="ds-pagination">
            <li onClick={() => {
                if (current !== 1) {
                    _setCurrent(current - 1);
                }
            }} className={`ds-pagination-item ${current === 1 ? 'disabled' : ''}`}>&lt;</li>
            {
                pages.map((page) => {
                    if (page === BEFORE) {
                        return <li onClick={() => {
                            _setCurrent(Math.max(current - 5, 0));
                        }} data-place="«" className={`ds-pagination-before-after`} key={page}></li>
                    } else if (page === AFTER) {
                        return <li onClick={() => {
                            _setCurrent(Math.min(current + 5, counts));
                        }} data-place="»" className={`ds-pagination-before-after`} key={page}></li>
                    } else {
                        return <li onClick={() => _setCurrent(page)} className={`ds-pagination-item ${current === page ? 'ds-pagination-item-active' : ''}`} key={page}>{page}</li>
                    }
                })
            }
            <li onClick={() => {
                if (current !== counts) {
                    _setCurrent(current + 1);
                }
            }} className={`ds-pagination-item ${current === counts ? 'disabled' : ''}`}>&gt;</li>
        </ul>
    )
}
