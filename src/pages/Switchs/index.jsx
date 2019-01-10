import React, { Component } from 'react';

import Switch from '../../components/Switch';



export const ThemeContext = React.createContext('light');






export default class extends Component {
    
    render() {
        return (
            <div>

                <ThemeContext.Provider value="dark">
                    <Switch />
                </ThemeContext.Provider>
            </div>
        );
    }
}
