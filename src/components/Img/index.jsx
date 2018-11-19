import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';

let modalInstance;

export default class Img extends Component {
    state = {
        loaded: false,
    }
    componentDidMount() {
        const { src } = this.props;
        const img = new Image();
        img.src = src;
        img.onload = () => {
            this.setState({ loaded: true });
        }
    }
    preview = (e) => {
        const { loaded } = this.state;
        if (loaded) {
            const { x, y, width, height } = this.img.getBoundingClientRect();
            getInstance(instance => {
                instance.open({
                    left: x,
                    top: y,
                    width,
                    height,
                    src: this.img.src,
                });
            })
        }
    }
    render() {
        return (
            <img ref={img => this.img = img} onClick={this.preview} {...this.props} />
        );
    }
}

class Modal extends Component {
    state = {
        show: false,
        src: '',
        newStyle: {},
        style: {},
        rgbOpacity: 1,
    }
    open = ({src, ...other}) => {
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;

        this.setState({
            show: true,
            src,
            style: Object.assign({}, other),
            newStyle: {
                offsetX: 0,
                offsetY: 0,
                scaleW: 1,
                scaleH: 1,
                opacity: 1,
            },
        }, () => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                const { left, top, width, height } = other;

                let offsetX = (clientWidth - width) / 2 - left;
                let offsetY = (clientHeight - height) / 2 - top;
                let scaleW = img.width / width;
                let scaleH = img.height / height;

                if (img.width > clientWidth && img.height > clientHeight) {
                    if (img.width / img.height > clientWidth / clientHeight) {
                        scaleW = clientWidth / width;
                        scaleH = img.height / img.width * clientWidth / height;  
                    }else {
                        scaleH = clientHeight / height;
                        scaleW = img.width / img.height * clientHeight / width;  
                    }
                } else if (img.width > clientWidth) {
                    scaleW = clientWidth / width;
                    scaleH = img.height / img.width * clientWidth / height;  
                } else if (img.height > clientHeight) {
                    scaleH = clientHeight / height;
                    scaleW = img.width / img.height * clientHeight / width;  
                }

                this.setState({
                    newStyle: { 
                        offsetX,
                        offsetY,
                        scaleW,
                        scaleH,
                        opacity: 1,
                    },
                    rgbOpacity: 30,
                });
            }
        })
    }
    close = () => {
        this.setState({
            newStyle: {
                offsetX: 0,
                offsetY: 0,
                scaleW: 1,
                scaleH: 1,
                opacity: 0,
            },
            rgbOpacity: 0,
        }, () => {
            setTimeout(() => {
                this.setState({show: false})
            }, 300);
        })
    }
    render() {
        const { show, src, newStyle, style, rgbOpacity } = this.state;
        const { offsetX, offsetY, scaleW, scaleH, opacity } = newStyle;
        if (show) {
            return (
                <div className="ds-modal" style={{backgroundColor: `rgba(0, 0, 0, 0.${rgbOpacity})`}} onClick={this.close}>
                    <Motion style={{
                        offsetX: spring(offsetX),
                        offsetY: spring(offsetY),
                        scaleW: spring(scaleW),
                        scaleH: spring(scaleH),
                        opacity: spring(opacity),
                    }} >
                        {
                            ({ offsetX, offsetY, scaleW, scaleH, opacity }) =>
                            <img style={Object.assign({}, style, {
                                transform: `translate(${offsetX}px, ${offsetY}px) scale(${scaleW}, ${scaleH})`,
                                opacity,
                            })} className="ds-modal-img" src={src} />
                        }
                    </Motion>
                </div>
            );
        } else {
            return null;
        }
    }
}

Modal.instance = function(callback) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let called = false;
    function ref(modal) {
        if (called) {
            return;
        }
        called = true;
        callback({
            open(options) {
                modal.open(options);
            }
        })
    }
    ReactDOM.render(<Modal ref={ref} />, div);
}

function getInstance(callback) {
    if (modalInstance) {
        callback(modalInstance);
        return;
    }
    Modal.instance((modal) => {
        modalInstance = modal;
        callback(modal);
    })
}