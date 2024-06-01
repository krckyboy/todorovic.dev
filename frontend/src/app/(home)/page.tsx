import React from 'react';
import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import ImageAndText from '@/app/(home)/_image-and-text/ImageAndText';
import FeaturedPosts from '@/app/(home)/_featured-posts/FeaturedPosts';

const Page: NextPage = async () => {
  return (
    <main className={gStyles.mainContainer}>
      <ImageAndText />
      <FeaturedPosts />
    </main>
  );
};

export default Page;