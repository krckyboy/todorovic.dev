import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import '@/styles/global.scss';
import 'reset-css';
import LoadingIndicator from '@/components/loading-indicator/LoadingIndicator';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dušan Todorović | Senior Software Engineer & Team Leader',
  description: 'Discover Dušan Todorović, a seasoned Software Engineer and Team Leader specializing in React. Explore his expertise, leadership, and contributions to the tech industry.',
  twitter: {
    title: 'Dušan Todorović | Senior Software Engineer & Team Leader',
    description: 'Join Dušan Todorović on his journey as a Software Engineer and Team Leader, specializing in React. Learn about his insights and impact on the tech world.',
    images: 'https://www.todorovic.dev/images/dusan.png',
    card: 'summary_large_image'
  },
  openGraph: {
    title: 'Dušan Todorović | Senior Software Engineer & Team Leader',
    description: 'Dive into the professional journey of Dušan Todorović, a Software Engineer and Team Leader with a focus on React. Discover his expertise and leadership in the tech industry.',
    images: 'https://www.todorovic.dev/images/dusan.png',
    type: 'website',
    url: 'https://todorovic.dev'
  }
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
    <Suspense>
      <LoadingIndicator />
    </Suspense>
    </body>
    </html>
  );
};

export default RootLayout;