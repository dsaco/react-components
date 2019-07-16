import React from 'react';

const Switch = ({value, onChange, color}) => {
    color = color || 'rgb(24, 144, 255)';
    return (
        <div onClick={() => onChange(!value)} className={`ds-switch-basic ${value ? 'checked':''}`}>
            <div className="ds-switch-content" style={{backgroundColor: color}}>
                <div className="ds-switch-inner"></div>
            </div>
        </div>
    );
}

Switch.Move = ({value, onChange, color}) => {
    color = color || 'rgb(24, 144, 255)';
    return (
        <div onClick={() => onChange(!value)} className={`ds-switch-move ${value ? 'checked':''}`}>
            <div className="ds-switch-content" style={{backgroundColor: color}}>
                <div className="ds-switch-inner"></div>
            </div>
        </div>
    );
}

// Switch.Water = ({value, onChange}) => {
//     return (
//         <div onClick={() => onChange(!value)} className={`ds-switch-3 ${value ? 'checked':''}`}>
//             <div className="ds-switch-inner"></div>
//         </div>
//     );
// }

export default Switch