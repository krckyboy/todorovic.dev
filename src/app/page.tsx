import React from 'react';
import { NextPage } from 'next';
import styles from './styles.module.scss';
import ImageAndText from '@/components/image-and-text/ImageAndText';

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