import React, { Component } from 'react';
import { Trail, animated, Transition } from 'react-spring/renderprops';

export default class DropDown extends Component {
    state = {
        show: false,
        data: [
            {
                key: 100,
                value:1,
            },
            {
                key: 200,
                value:2,
            },
            {
                key: 300,
                value:3,
            },
            {
                key: 400,
                value:4,
            },
        ],
    }
    render() {
        const { data, show } = this.state;
        return (
            <div className="ds-dropdown">
                <div className="ds-dropdown-item" onClick={() => this.setState(prevState => ({show: !prevState.show}))}>select</div>
                <ul className="ds-dropdown-items">

                    <Trail
                        native
                        keys={item => item.key}
                        reverse={show}
                        initial={null}
                        items={data}
                        to={{y: show ? 100 : 0}}
                        >
                        {
                            (item, index) => ({y}) => {

                                let x = show ? (3 - parseInt(Math.random() * 6)) : 0   ;
                                return (
                                    <animated.div className="ds-dropdown-item" style={{
                                            transform: y.interpolate(y => `translateY(${y*(index+1)}%) rotate(${x}deg)`),
                                            zIndex: 100 - index,
                                            top: index * 4 + 4,

                                        }}>
                                        {item.value}
                                    </animated.div>
                                )
                            }
                        }
                    </Trail>
                    {/*
                        <Transition
                            items={data} keys={item => item.key}
                            from={{top: '0%'}}
                            enter={(item) => ({top: item.key + '%'}) }
                            leave={{top: '0%'}}
                            trail={100}
                        >
                            {
                                item => props => {
                                    return (
                                        <div style={{transform: `translateY(${props.top})`}} className="ds-dropdown-item">
                                            {item.value}
                                        </div>
                                    )
                                }
                            }
                        </Transition>
                        */}
                </ul>
            </div>
        );
    }
}
