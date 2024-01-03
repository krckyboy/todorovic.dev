import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Navigation: FunctionComponent = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/skills'}>Skills</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;