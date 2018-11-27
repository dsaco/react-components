import React, { Component } from 'react';

import Img from '../../components/Img';

export default class extends Component {
    render() {
        return (
            <div>
                <hr />
                <Img style={{width: 300, height: 400}} src="https://cdn.ds-or.com/article/image/1530024245_w_1080_h_1920_cz22e.png" />
                <Img style={{width: 300, height: 50}} src="https://cdn.ds-or.com/article/cover/1502977845_w_720_h_474_bvpqz.jpg" />
            </div>
        );
    }
}