import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops';
import PropTypes from 'prop-types';

let key = 1;
export default class Button extends Component {
    static defaultProps = {
        style: {},
        className: '',
        color: '',
        variant: 'default',
        disabled: false,
    }
    state = {
        ripples: [],
    }
    firstTouch = 0
    onMouseDown = (e) => {
        this.firstTouch = Date.now();
        const { x, y, width, height } = e.target.getBoundingClientRect();
        const _x = e.clientX || e.pageX;
        const _y = e.clientY || e.pageY;

        const w = Math.abs(_x - x);
        const h = Math.abs(_y - y);
        const max_w = Math.max(width - w, w);
        const max_h = Math.max(height - h, h);
        const r = Math.sqrt(max_w ** 2 + max_h ** 2);

        const ripple = {
            key: `ds-btn-${++key}`,
            top: _y - y - r,
            left: _x - x - r,
            width: r * 2,
            height: r * 2,
        }
        const { ripples } = this.state;
        ripples.push(ripple);
        this.setState({ripples});
    }
    remove = () => {
        const now = Date.now();
        const cha = now - this.firstTouch;
        if (cha > 300) {
            this.setState({ripples: []});
        } else {
            setTimeout(() => {
                const { ripples } = this.state;
                ripples.shift();
                this.setState({ripples});
            }, 350 - cha);
        }
    }
    render() {
        const { ripples } = this.state;
        const { style, className, color, variant, disabled } = this.props;
        return (
            <button 
                style={style} 
                className={`${className} ds-btn-${variant} ${color} ${disabled ? 'disabled' : ''}`} 
                onClick={this.props.onClick} 
                onMouseDown={this.onMouseDown} 
                onMouseLeave={this.remove} 
                onMouseUp={this.remove}
            >
                {this.props.children}
                <span className="ds-btn-cover">
                    <Transition
                        items={ripples} keys={(item) => item.key}
                        from={{transform: `scale(0)`, opacity: 1}}
                        enter={{transform: `scale(1)`}}
                        leave={{opacity: 0}}
                        config={{duration: 300}}
                    >
                        {
                            (item) => (props) => {
                                const { key, ...others } = item;
                                return <div style={{...others, ...props}}></div>;
                            }
                        }
                    </Transition>
                </span>
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', '']),
    variant: PropTypes.oneOf(['outline', 'text', 'default']),
    disabled: PropTypes.bool,
}