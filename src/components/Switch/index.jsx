import React, { Component } from 'react';

export default class Switch extends Component {
    state = {
        checked: false
    }
    render() {
        return (
            <div>

                {/* <div onClick={() => this.setState({checked: !
                    this.state.checked})} className={`ds-switch ${this.state.checked ? 'checked':''}`}>
                    <div className="ds-switch-ball-box">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div> */}
                <div onClick={() => this.setState({checked: !this.state.checked})} className={`ds-switch-1 ${this.state.checked ? 'checked':''}`}>
                    <div className="ds-switch">
                        <div className="ds-switch-inner"></div>
                    </div>
                </div>
                <hr />
                <div onClick={() => this.setState({checked: !this.state.checked})} className={`ds-switch-2 ${this.state.checked ? 'checked':''}`}>
                    <div className="ds-switch">
                        <div className="ds-switch-inner"></div>
                    </div>
                </div>
                <hr />
                <div onClick={() => this.setState({checked: !this.state.checked})} className={`ds-switch-3 ${this.state.checked ? 'checked':''}`}>
                    <div className="ds-switch-inner"></div>
                </div>
                <hr />
                <div className="test"></div>

                <div className="zxx_text_overflow_4">
                    <div className="text_con">这是一段比较长的文字，用来测试是否文字溢出时会用省略号显示。</div>
                    <div className="text_dotted">…</div>
                </div>
                <div className="test2">薛宝钗-荣国府衔玉而诞的公子，前世真身为赤霞宫神瑛侍者，现世贾政与王夫人之次子。他作为荣国府的嫡派子孙，出身不凡，聪明灵秀，阖府捧为掌上明珠，对他寄予厚望，他却走上了叛逆之路，痛恨八股文，批判朱理学。</div>
            </div>
        );
    }
}
