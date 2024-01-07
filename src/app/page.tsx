import React from 'react';
import { NextPage } from 'next';
import ImageAndText from '@/components/image-and-text/ImageAndText';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';

const Page: NextPage = () => {
  return (
    <main>
      <section className={`${styles.section} ${gStyles.paddingInline}`}>
        <ImageAndText />
      </section>
    </main>
  );
};

export default Page;