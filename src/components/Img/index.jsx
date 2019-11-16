import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Spring, Transition } from 'react-spring/renderprops';

export default class Img extends PureComponent {
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
            getInst().open({
                left: x,
                top: y,
                width,
                height,
                src: this.img.src,
            })
        }
    }
    render() {
        return (
            <img ref={img => this.img = img} onClick={this.preview} {...this.props} />
        );
    }
}

class Modal extends PureComponent {
    state = {
        show: false,
        src: '',
        newStyle: {},
        style: {},
    }
    open = ({src, ...other}) => {
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;

        document.body.classList.add('body-no-scroll');

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
                show: true,
                src,
                style: {...other},
                newStyle: { 
                    offsetX,
                    offsetY,
                    scaleW,
                    scaleH,
                    opacity: 1,
                },
            });
        }
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
            show: false,
        });
        document.body.classList.remove('body-no-scroll');
    }
    render() {
        const { show, src, newStyle, style } = this.state;
        const { offsetX, offsetY, scaleW, scaleH, opacity } = newStyle;

        return (
            <Transition
                items={show}
                from={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                enter={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                leave={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
            >
                {
                    show =>
                    show && (
                        props1 => (
                            <div style={{
                                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                                ...props1,
                                }} onClick={this.close}>
                                <Spring
                                    from={{
                                        transform: `translate(${0}px, ${0}px) scale(${1}, ${1})`, opacity: 1,
                                    }}
                                    to={{
                                        transform: `translate(${offsetX}px, ${offsetY}px) scale(${scaleW}, ${scaleH})`, opacity,
                                    }}
                                >
                                    {
                                        props => (
                                            <img style={{position: 'absolute', ...style, ...props}} src={src} />
                                        )
                                    }
                                </Spring>
                            </div>
                        )
                    )
                }
            </Transition>
        )
    }
}

let modalInstance;

function getInst() {
    if (modalInstance) {
        return modalInstance;
    } else {
        const div = document.createElement('div');
        document.body.appendChild(div);
        return modalInstance = ReactDOM.render(<Modal />, div);
    }
}
