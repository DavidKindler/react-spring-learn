import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Component2(props) {
  const { toggle } = props;
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1500, duration: 1000 }}>
      {props => {
        return (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p> Component 2 paragraph </p>
              <button onClick={toggle}>Toggle Component 3</button>
            </div>
          </div>
        );
      }}
    </Spring>
  );
}

const c2Style = {
  display: 'block',
  background: 'orange',
  color: 'white',
  padding: '1.5rem',
  zIndex: 100,
  position: 'relative'
};
