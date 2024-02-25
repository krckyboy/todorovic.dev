import React from 'react';
import { NextPage } from 'next';
import ImageAndText from '@/app/(home)/(image-and-text)/ImageAndText';
import FeaturedPosts from '@/app/(home)/(featured-posts)/FeaturedPosts';

const Page: NextPage = async () => {
  return (
    <main>
      <ImageAndText />
      <FeaturedPosts />
    </main>
  );
};

export default Page;