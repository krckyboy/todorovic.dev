import React from 'react';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import 'reset-css';
import '@/styles/global.scss';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

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
    <body className={leagueSpartan.className}>
    <Navigation />
    {children}
    </body>
    </html>
  );
};

export default RootLayout;