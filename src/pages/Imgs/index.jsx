import React, { Component } from 'react';

import Img from '../../components/Img';

export default class extends Component {
    render() {
        return (
            <div>
                <div style={{width: 200, maxHeight: 200}}>
                    <Img 
                        maxWidth={200} 
                        maxHeight={200} 
                        width={1080}
                        height={1920}
                        style={{maxWidth: 200, maxHeight: 200}}
                        placeholder preview onClick={() => console.log('click')} src="https://cdn.ds-or.com/article/image/1530024245_w_1080_h_1920_cz22e.png"/>
                </div>
                {/* <Img placeholder preview onClick={() => console.log('click')} src="https://cdn.ds-or.com/article/cover/1529576400_w_2916_h_1810_jchaq.png" className="img" />
                <Img onClick={() => console.log('click')} src="https://cdn.ds-or.com/article/cover/1502977845_w_720_h_474_bvpqz.jpg" className="img" />
                <Img style={{width: 300, height: 200}} preview onClick={() => console.log('click')} src="https://cdn.ds-or.com/article/cover/1502977987_w_392_h_443_vpc4t.jpg" className="img" /> */}
            </div>
        );
    }
}