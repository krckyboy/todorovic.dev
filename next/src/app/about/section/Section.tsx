import React, { FunctionComponent } from 'react';
import styles from '@/app/about/styles.module.scss';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Section: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <>
      <h2 className={styles.subheading}>{title}</h2>
      {children}
    </>
  );
};

export default Section;