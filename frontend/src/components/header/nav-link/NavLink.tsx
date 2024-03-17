'use client';
import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';

interface Props {
  children: string;
  href: string;
}

const NavLink: FunctionComponent<Props> = ({ children, href }) => {
  const pathname = usePathname();
  const activeClassName = `${pathname === href ? styles.active : ''}`;

  return (
    <li>
      <Link href={href} className={`${styles.link} ${activeClassName}`}>{children}</Link>
    </li>
  );
};

export default NavLink;