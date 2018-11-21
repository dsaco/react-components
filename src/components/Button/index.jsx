import React, { Component } from 'react';
import { Transition } from 'react-spring';
import PropTypes from 'prop-types';

let key = 1;
export default class Button extends Component {
    static defaultProps = {
        style: {},
        className: '',
        color: '',
        variant: '',
    }
    state = {
        ripples: [],
        isActive: false,
    }
    firstTouch = 0
    onMouseDown = (e) => {
        this.firstTouch = Date.now();
        const { x, y, width } = e.target.getBoundingClientRect();
        const _x = e.clientX || e.pageX;
        const _y = e.clientY || e.pageY;
        const r = {
            key: `ds-btn-${++key}`,
            top: _y - y - width / 2,
            left: _x - x - width / 2,
        }
        const { ripples } = this.state;
        ripples.push(r);
        this.setState({ripples, isActive: true});
    }
    remove = () => {
        const now = Date.now();
        const cha = now - this.firstTouch;
        if (cha > 500) {
            this.setState({ripples: [], isActive: false});
        } else {
            setTimeout(() => {
                const { ripples } = this.state;
                ripples.shift();
                this.setState({ripples, isActive: false});
            }, 550 - cha);
        }
    }
    render() {
        const { ripples, isActive } = this.state;
        const { style, className, color, variant } = this.props;
        return (
            <button 
                style={style} 
                className={`${className} ds-button ${variant} ${color} ${isActive ? 'active': ''}`} 
                onClick={this.props.onClick} 
                onMouseDown={this.onMouseDown} 
                onMouseLeave={this.remove} 
                onMouseUp={this.remove}
            >
                {this.props.children}
                <span className="ds-button-cover">
                    <Transition
                        items={ripples} keys={item => item.key}
                        from={{transform: `scale(0)`, opacity: 1}}
                        enter={{transform: `scale(2)`}}
                        leave={{opacity: 0}}
                        config={{duration: 500}}
                    >
                        {
                            item => props => (
                                <div style={{top: item.top, left: item.left, ...props}}></div>
                            )
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
    variant: PropTypes.oneOf(['outline', 'text', '']),
}