import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import React from 'react';
import Link from 'next/link';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'krcky.dev',
  description: 'Created by Dušan Todorović Krcky'
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({
                      children
                    }: Props) => {
  return (
    <html lang="en">
    <body className={quicksand.className}>
    <nav>
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
    {children}
    </body>
    </html>
  );
};

export default RootLayout;