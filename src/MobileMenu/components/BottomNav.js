import React from 'react';
import classNames from 'classnames/bind';

import styles from '../MobileMenu.css';
let cx = classNames.bind(styles);

export default function BottomNav() {
  return (
      
    <div className={cx({'mobile-bottom-nav': true})}>
    <div ><a href="link1">Link 1</a></div>
    <div ><a href="link2">Link 2</a></div>
    <div ><a href="link3">Link 3</a></div>
     </div>
  )
}
