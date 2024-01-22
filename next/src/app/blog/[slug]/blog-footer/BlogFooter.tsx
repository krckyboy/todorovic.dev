import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const BlogFooter: FunctionComponent = () => {
  return (
    <footer className={styles.container}>
      <Link href={'/'} className={styles.linkContainer}>
        <Image src={'/images/dusan.png'}
               priority
               alt={'Dušan Todorović in a formal white shirt'}
               width={80}
               height={80}
               className={styles.image}
        />
        <section className={styles.textContainer}>
          <h4 className={styles.writtenBy}>written by</h4>
          <span className={styles.name}>Dušan Todorović</span>
          <p className={gStyles.tagsMini}>
            Developer <span>|</span> Team Leader <span>|</span> React Specialist
          </p>
        </section>
      </Link>
    </footer>
  );
};

export default BlogFooter;