import React from 'react';
import { NextPage } from 'next';
import ImageAndText from '@/components/home-components/image-and-text/ImageAndText';
import FeaturedPosts from '@/components/home-components/featured-posts/FeaturedPosts';

const Page: NextPage = async () => {
  return (
    <main>
      <ImageAndText />
      <FeaturedPosts />
    </main>
  );
};

export default Page;