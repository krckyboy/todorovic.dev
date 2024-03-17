import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const AuthorCard: FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <Image src={'/images/dusan.png'}
             priority
             alt={'Dušan Todorović in a formal white shirt'}
             width={80}
             height={80}
             className={styles.image}
      />
      <div className={styles.textContainer}>
        <Link href={'/'} className={styles.linkContainer}>
          <span className={styles.name}>Dušan Todorović</span>
        </Link>
        <p className={`${gStyles.tagsMini}`}>
          Developer <span>|</span> Team Leader <span>|</span> React Specialist
        </p>
        <ul className={`${gStyles.tagsMini} ${styles.links}`}>
          <li>
            <Link href="https://www.linkedin.com/in/dusan-todorovic-krcky/" target={'_blank'}>Linkedin</Link>
          </li>
          <li>
            <Link href="mailto:dusan.todorovic.dev@gmail.com" target={'_blank'}>Mail</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AuthorCard;