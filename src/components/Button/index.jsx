import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../Ripple';

export default class Button extends PureComponent {
    static defaultProps = {
        className: '',
        type: '',
        link: false,
        outline: false,
        disabled: false,
    }
    render() {
        const { link, outline, className, type, disabled, ...rest } = this.props;
        let rippleColor = 'rgba(0, 0, 0, 0.25)';
        if (link || outline) {
            if (type === 'primary') {
                rippleColor = 'rgba(33, 150, 243, 0.25)';
            } else if (type === 'secondary') {
                rippleColor = 'rgba(225, 0, 80, 0.25)';
            }
        } else {
            if (type) {
                rippleColor = 'rgba(255, 255, 255, 0.3)';
            }
        }
        return (
            <button 
                className={`${className} ds-button${outline ? '-outline' : (link ? '-link' : '')} ${type} ${disabled ? 'disabled' : ''}`} 
                {...rest}
            >
                {this.props.children}
                <Ripple color={rippleColor} />
            </button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string,
    outline: PropTypes.bool,
    link: PropTypes.bool,
    disabled: PropTypes.bool,
}