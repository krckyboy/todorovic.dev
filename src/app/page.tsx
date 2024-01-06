import React from 'react';
import { NextPage } from 'next';
import styles from '@/components/home/styles.module.scss';
import SocialIcons from '@/components/home/SocialIcons';
import ImageAndText from '@/components/home/ImageAndText';

const Page: NextPage = () => {
  return (
    <main>
      <section className={styles.section}>
        <ImageAndText />
        <SocialIcons />
      </section>
    </main>
  );
};

export default Page;