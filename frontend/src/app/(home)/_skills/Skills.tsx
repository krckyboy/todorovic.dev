import React, { FunctionComponent } from 'react';
import hStyles from '@/app/(home)/styles.module.scss';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';
import Link from 'next/link';

const Skills: FunctionComponent = () => {
  return (
    <section className={`${hStyles.sectionContainer}`}>
      <h2 className={`${hStyles.subHeading}`}>Experience</h2>
      <div className={`${styles.text} ${gStyles.text}`}>
        <p>With over half a decade of experience under my belt, I've been diving deep into the tech world, experimenting
          with various technologies and leading teams through successful projects.</p>
        <p>A true enthusiast of React, I've found it to be a powerful tool for crafting innovative solutions. However, I remain open to any technology that proves effective and efficient for the task at hand.</p>
        <p>For a comprehensive view of my skills and experiences, please check out my <Link href={'/skills'}>skills page</Link>.</p>
      </div>
    </section>
  );
};

export default Skills;