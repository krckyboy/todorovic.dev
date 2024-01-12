import React from 'react';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import '@/styles/global.scss';
import 'reset-css';
import LoadingIndicator from '@/components/loading-indicator/LoadingIndicator';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'dtodorovic.com',
  description: 'Created by Dušan Todorović'
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
    <Header />
    {children}
    <Footer />
    <LoadingIndicator />
    </body>
    </html>
  );
};

export default RootLayout;