import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops';
import PropTypes from 'prop-types';

export default class Modal extends Component {
    static defaultProps = {
        title: '',
        maskClosable: true,
        closeable: true,
        width: 768,
    }
    close = () => {
        const { maskClosable, onCancel } = this.props;
        maskClosable && onCancel && onCancel();
    }
    stop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    render() {
        const { visible, title, closeable, width } = this.props;
        return (
            <Transition 
                items={visible}
                from={{opacity: 0, y: '-100%'}}
                enter={{opacity: 1, y: '0%'}}
                leave={{opacity: 0, y: '-100%'}}
            >
                {
                    visible => visible && (props => (
                        <div className="ds-modal" onClick={this.close} style={{opacity: props.opacity}}>
                            <div style={{width, opacity: props.opacity , transform: `translateY(${props.y})`}} className="ds-dialog" onClick={this.stop}>
                                {
                                    title &&
                                    <header className="ds-dialog-header">
                                        <span>{title}</span>
                                    </header>
                                }
                                {
                                    closeable &&
                                    <span onClick={this.close} className="ds-dialog-closeable">
                                        <svg viewBox="64 64 896 896" width="1em" height="1em" fill="#333" aria-hidden="true" focusable="false"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                                    </span> 
                                }
                                <div className="ds-dialog-content">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Transition>
        )
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
