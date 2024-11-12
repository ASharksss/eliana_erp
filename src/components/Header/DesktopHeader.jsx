import React from 'react';
import styles from './header.module.css'

const DesktopHeader = () => {
  return (
    <div>
      <span className={styles.logo}>ELIANA</span>
      <span className={styles.span}>work</span>
    </div>
  );
};

export default DesktopHeader;