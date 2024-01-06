import React from 'react';
import { NextPage } from 'next';
import styles from '@/components/home/styles.module.scss';
import ImageAndText from '@/components/home/ImageAndText';

const Page: NextPage = () => {
  return (
    <main>
      <section className={styles.section}>
        <ImageAndText />
      </section>
    </main>
  );
};

export default Page;