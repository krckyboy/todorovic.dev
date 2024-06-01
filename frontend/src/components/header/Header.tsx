import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';
import NavLink from '@/components/header/nav-link/NavLink';
import { db } from '@/scripts/fetch';

const Header: FunctionComponent = async () => {
  const posts = await db.getPosts(0);
  const hasAnyPosts = posts?.data.length;

  return (
    <header className={`${styles.container} ${gStyles.text} ${gStyles.mainContainer}`}>
      <nav className={styles.nav}>
        <ul>
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/skills'}>Skills</NavLink>
          <NavLink href={'/about'}>About</NavLink>
          {Boolean(hasAnyPosts) && (
            <NavLink href={'/blog'}>Blog</NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;