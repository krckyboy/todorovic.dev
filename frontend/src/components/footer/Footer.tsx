import React, { FunctionComponent } from 'react';
import SocialIcons from './social-icons/SocialIcons';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className={`${styles.container}`}>
      <div className={styles.horizontalLine}></div>
      <div className={gStyles.mainContainer}>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;