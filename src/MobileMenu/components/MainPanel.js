import React from 'react';
import styles from '../MobileMenu.module.css';

const MainPanel = props => {
  return (
    <div style={{ overflow: 'scroll', height: '100%' }}>
      <ul className={styles['mobile-main']}>{props.children}</ul>
    </div>
  );
};

export default MainPanel;
