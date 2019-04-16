import React from 'react';
// import styles from '../MobileMenu.module.css';
import { Transition } from 'react-spring/renderprops';

const SlidePanel = props => {
  const { active, children } = props;
  return (
    <Transition
      items={active}
      from={{ opacity: 0, transform: 'translateX(110%)' }}
      enter={{
        opacity: 1,
        transform: 'translateX(0%)',
        position: 'fixed',
        top: '0px',
        height: '100%',
        width: '100%',
        backgroundColor: '#eee',
        left: '0px'
      }}
      leave={{ opacity: 0, transform: 'translateX(110%)' }}
    >
      {active =>
        active &&
        (props =>
          active && (
            <div style={props}>
              <ul style={{ listStyle: 'none' }}>{children}</ul>
            </div>
          ))
      }
    </Transition>
  );
};

export default SlidePanel;
