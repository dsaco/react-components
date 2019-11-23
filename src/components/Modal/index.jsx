import React from 'react';
import ReactDOM from 'react-dom';
import { Transition, animated } from 'react-spring/renderprops';

export default class Modal extends React.PureComponent {
    static defaultProps = {
        visible: false,
        maskColor: 'rgba(0, 0, 0, 0.65)',
        maskClosable: true,
        closable: true,
        top: 100,
        width: 768,
        title: '',
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.visible && this.props.visible) {
            document.body.classList.add('ds-body-no-scroll');
        }
        if (prevProps.visible && !this.props.visible) {
            document.body.classList.remove('ds-body-no-scroll');
        }
    }
    stop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    close = () => {
        this.props.maskClosable && this.props.onCancel();
    }
    render() {
        const { visible, onCancel, maskColor, width, top, closable, title, children } = this.props;
        return ReactDOM.createPortal(
            <div>
                <Transition
                    items={visible}
                    from={{opacity: 0, y: '-100%'}}
                    enter={{opacity: 1, y: '0%'}}
                    leave={{opacity: 0, y: '-100%'}}
                    config={{duration: 300}}
                >
                    {
                        (visible) => visible && ((props) => (
                            <animated.div
                                className="ds-modal"
                                style={{opacity: props.opacity, backgroundColor: maskColor}}
                                onClick={this.close}
                            >
                                <div 
                                    className="ds-modal-content"
                                    style={{
                                        margin: '0 auto 24px', 
                                        opacity: props.opacity,
                                        transform: `translate3d(0, ${props.y}, 0)`,
                                        width, 
                                        top,
                                    }}
                                    onClick={this.stop}    
                                >
                                    {
                                        closable && 
                                        <span onClick={onCancel} className="ds-modal-closable">
                                            <svg viewBox="64 64 896 896" width="1em" height="1em" fill="#333" aria-hidden="true" focusable="false"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                                        </span> 
                                    }
                                    {
                                        title ?
                                        <header className="ds-modal-header">
                                            <span>{title}</span>
                                        </header>
                                        : null
                                    }
                                    {children}
                                </div>
                            </animated.div>
                        ))
                    }
                </Transition>
            </div>,
            document.querySelector('body'),
        );
    }
}
