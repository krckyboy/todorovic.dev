import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import React from 'react';
import AuthorCard from '@/components/author-card/AuthorCard';
import ImageSection from './_image-section/ImageSection';
import Content from './_content/Content';

const Page: NextPage = () => {
  return (
    <main className={styles.main}>
      <article className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>About Me</h1>
        <ImageSection />
        <Content />
        <AuthorCard />
      </article>
    </main>
  );
};

export default Page;