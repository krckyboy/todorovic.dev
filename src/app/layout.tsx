import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import React from 'react';
import 'reset-css';
import Navigation from '@/components/sideMenu/SideMenu';
import '@/styles/global.scss';

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
    <Navigation />
    {children}
    </body>
    </html>
  );
};

export default RootLayout;