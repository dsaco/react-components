import React from 'react';
import { Transition } from 'react-spring/renderprops';

let key = 1;
export default class Ripple extends React.PureComponent {
    static defaultProps = {
        color: 'rgba(0, 0, 0, 0.3)',
    }
    state = {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        ripples: [],
    }
    lastTouchTime = 0
    onMouseDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.lastTouchTime = Date.now();
        const { x, y, width, height } = e.target.getBoundingClientRect();
        const _x = e.clientX || e.pageX;
        const _y = e.clientY || e.pageY;
        const w = Math.abs(_x - x);
        const h = Math.abs(_y - y);
        const max_w = Math.max(width - w, w);
        const max_h = Math.max(height - h, h);
        const r = Math.sqrt(max_w ** 2 + max_h ** 2);
        const ripple = {
            key: `ripple-${Date.now()}-${++key}`,
            top: _y - y - r,
            left: _x - x - r,
            width: r * 2,
            height: r * 2,
        };
        const { ripples } = this.state;
        const _ripples = [...ripples];
        _ripples.push(ripple);
        this.setState({ripples: _ripples});
    }
    remove = () => {
        const now = Date.now();
        const cha = now - this.lastTouchTime;
        if (cha > 300) {
            this.setState({ripples: []});
        } else {
            setTimeout(() => {
                const { ripples } = this.state;
                const _ripples = [...ripples];
                _ripples.shift();
                this.setState({ripples: _ripples});
            }, 350 - cha);
        }
    }
    render() {
        const { ripples } = this.state;
        const { color } = this.props;
        return (
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden'}}
                onMouseDown={this.onMouseDown} 
                onMouseLeave={this.remove} 
                onMouseUp={this.remove}
            >
                <Transition
                    items={ripples}
                    keys={(item) => item.key}
                    from={{transform: `scale(0)`, opacity: 1}}
                    enter={{transform: `scale(1)`}}
                    leave={{opacity: 0}}
                    config={{duration: 300}}
                >
                    {
                        (item) => (props) => {
                            const { key, ...rest } = item;
                            return (
                                <div style={{...rest, ...props, backgroundColor: color, position: 'absolute', pointerEvents: 'none', borderRadius: '50%' }} />
                            );
                        }
                    }
                </Transition>
            </div>
        );
    }
}