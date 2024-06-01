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
        <p>Half a decade in tech, mastering React and leading teams to success. Always ready to embrace new technologies that deliver.</p>
        <p>Discover more on <Link href={'/skills'}>skills page</Link>.</p>
      </div>
    </section>
  );
};

export default Skills;