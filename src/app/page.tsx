import React from 'react';
import { NextPage } from 'next';
import styles from '@/components/home/styles.module.scss';
import Elements from '@/components/home/Elements';
import SocialIcons from '@/components/home/SocialIcons';
import ImageAndText from '@/components/home/ImageAndText';

const Page: NextPage = () => {
  return (
    <main>
      <section className={styles.section}>
        <Elements />
        <ImageAndText />
        <SocialIcons />
      </section>
    </main>
  );
};

export default Page;