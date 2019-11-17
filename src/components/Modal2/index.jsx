import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ visible, children, onCancel }) {
    React.useEffect(() => {
        if (visible) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }
        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, [visible]);
    const className = React.useMemo(() => {
        return `ds-mask ${visible ? 'visible' : 'hidden'}`;
    }, [visible]);
    const stop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    return ReactDOM.createPortal(
        <div className={className} onClick={onCancel}>
            <div className="ds-mask-content" onClick={stop}>
                {children}
            </div>
        </div>,
        document.querySelector('body'),
    );
}
