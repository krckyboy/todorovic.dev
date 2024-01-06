import React from 'react';
import { NextPage } from 'next';
import styles from './styles.module.scss';
import ImageAndText from '@/components/index-page/ImageAndText';

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