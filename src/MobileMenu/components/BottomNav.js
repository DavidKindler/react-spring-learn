import React from 'react';
import styles from '../MobileMenu.module.css';

export default function BottomNav() {
  return (
    <div className={styles['mobile-bottom-nav']}>
      <div>
        <a href="link1">Link 1</a>
      </div>
      <div>
        <a href="link2">Link 2</a>
      </div>
      <div>
        <a href="link3">Link 3</a>
      </div>
    </div>
  );
}
