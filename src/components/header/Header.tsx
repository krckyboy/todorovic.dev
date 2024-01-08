import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';

const Header: FunctionComponent = () => {
  return (
    <header className={`${styles.container} ${gStyles.paddingInline}`}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/skills'}>Skills</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;