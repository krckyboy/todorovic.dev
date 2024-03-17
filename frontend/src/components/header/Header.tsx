import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';
import NavLink from '@/components/header/nav-link/NavLink';

const Header: FunctionComponent = () => {
  return (
    <header className={`${styles.container} ${gStyles.paddingInline} ${gStyles.text}`}>
      <nav className={styles.nav}>
        <ul>
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/skills'}>Skills</NavLink>
          <NavLink href={'/about'}>About</NavLink>
          <NavLink href={'/blog'}>Blog</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;