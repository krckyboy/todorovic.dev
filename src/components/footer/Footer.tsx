import React, { FunctionComponent } from 'react';
import SocialIcons from '@/components/footer/socialIcons/SocialIcons';
import styles from './styles.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.horizontalLine}></div>
      <SocialIcons />
    </footer>
  );
};

export default Footer;