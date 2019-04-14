import React from 'react';
import styles from '../MobileMenu.css';
import classNames from 'classnames/bind';
var cx = classNames.bind(styles);

const SlidePanel = props => {
  var slidePanelClasses = cx({
    'mobile-slide-panel': true,
    ['mobile-slide-panel-active']: props.active
  });
  return (
    <div
      className={slidePanelClasses}
      // className={
      //   props.active
      //     ? styles['mobile-slide-panel open']
      //     : styles['mobile-slide-panel']
      // }
      // style={{ display: props.active ? 'block' : 'none' }}
    >
      <ul>{props.children}</ul>
    </div>
  );
};

export default SlidePanel;
