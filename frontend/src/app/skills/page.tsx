import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import React from 'react';
import Experience from '@/app/skills/_experience/Experience';
import Skills from '@/app/skills/_skills/Skills';
import sharedStyles from '@/styles/about-and-blog-content.module.scss';

const Page: NextPage = () => {
  return (
    <main className={`${styles.main} ${gStyles.section} ${gStyles.text} ${gStyles.mainContainer} ${sharedStyles.shared}`}>
      <h1 className={gStyles.pageHeading}>Skills</h1>
      <Skills />
      <Experience />
    </main>
  );
};

export default Page;