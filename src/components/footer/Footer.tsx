import React, { FunctionComponent } from 'react';
import SocialIcons from '@/components/footer/socialIcons/SocialIcons';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className={`${styles.container} ${gStyles.paddingInline}`}>
      <div className={styles.horizontalLine}></div>
      <SocialIcons />
    </footer>
  );
};

export default Footer;