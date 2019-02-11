import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
  return (
    <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }}>
      {props => {
        return (
          <div style={props}>
            <div style={c1Style}>
              <h1>Component 1</h1>
              <p> Component 1 paragraph </p>
              <Spring from={{ number: 0 }} to={{ number: 10 }} config={{ delay: 1000, duration: 5000 }}>
                {props => (
                  <div style={props}>
                    <h1>{props.number.toFixed()}</h1>
                  </div>
                )}
              </Spring>
            </div>
          </div>
        );
      }}
    </Spring>
  );
}

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
};
