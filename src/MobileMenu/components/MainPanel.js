import React from 'react';
import styles from '../MobileMenu.css';
import classNames from 'classnames/bind';
var cx = classNames.bind(styles);

const MainPanel = props => {
  return <ul className={cx(['mobile-main'])}>{props.children}</ul>;
};

export default MainPanel;
