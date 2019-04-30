import React from 'react';

const Switch = ({value, onChange}) => {
    return (
        <div onClick={() => onChange(!value)} className={`ds-switch-1 ${value ? 'checked':''}`}>
            <div className="ds-switch">
                <div className="ds-switch-inner"></div>
            </div>
        </div>
    );
}

Switch.Basic = ({value, onChange}) => {
    return (
        <div onClick={() => onChange(!value)} className={`ds-switch-2 ${value ? 'checked':''}`}>
            <div className="ds-switch">
                <div className="ds-switch-inner"></div>
            </div>
        </div>
    );
}

Switch.Water = ({value, onChange}) => {
    return (
        <div onClick={() => onChange(!value)} className={`ds-switch-3 ${value ? 'checked':''}`}>
            <div className="ds-switch-inner"></div>
        </div>
    );
}

export default Switch