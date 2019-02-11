import React, { Component } from 'react';
import './App.css';
import Component1 from './components/component1';
import Component2 from './components/component2';
import Component3 from './components/component3';
import { Transition, animated } from 'react-spring/renderprops';

class App extends Component {
  state = { showComponent3: false };
  toggle = e => {
    this.setState({ showComponent3: !this.state.showComponent3 });
  };
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          reset
          items={this.state.showComponent3}
          from={{ transform: 'translateY(-110%)', opacity: 0 }}
          enter={{ transform: 'translateY(0%)', opacity: 1 }}
          leave={{ transform: 'translateY(-110%)', opacity: 0 }}
          config={{ duration: 300 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default App;
