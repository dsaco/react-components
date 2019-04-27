import React, { Component } from 'react';
import { Transition } from 'react-spring';
import PropTypes from 'prop-types';

export default class Modal extends Component {
    static defaultProps = {
        title: 'untitle',
        maskClosable: true,
        closeable: true,
        width: 768,
    }
    close = (e) => {
        this.props.onCancel();
    }
    stop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    render() {
        const { visible, title, closeable, footer, width } = this.props;
        if (visible) {
            return (
                <div className="ds-modal" onClick={this.close}>
                    <div style={{width}} className="ds-dialog" onClick={this.stop}>
                        <header className="ds-dialog-header">
                            <span>{title}</span>
                            {
                                closeable ? <span onClick={this.close} className="ds-dialog-closeable">x</span> : null
                            }
                        </header>
                        <div className="ds-dialog-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string,
    maskClosable: PropTypes.bool,
    closeable: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
