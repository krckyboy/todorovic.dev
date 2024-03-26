import React from 'react';
import { NextPage } from 'next';
import ImageAndText from '@/app/(home)/_image-and-text/ImageAndText';
import FeaturedPosts from '@/app/(home)/_featured-posts/FeaturedPosts';

const Page: NextPage = async () => {
  return (
    <main>
      <ImageAndText />
      <FeaturedPosts />
    </main>
  );
};

export default Page;