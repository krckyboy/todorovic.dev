import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import React from 'react';

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
    <body className={quicksand.className}>{children}</body>
    </html>
  );
};

export default RootLayout;