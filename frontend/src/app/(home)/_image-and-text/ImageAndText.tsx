'use client';
import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import gStyles from '@/styles/global.module.scss';
import Image from 'next/image';

const ImageAndText: FunctionComponent = () => {
  return (
    <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
      <div className={styles.container}>
        <Image src={'/images/dusan.png'}
               priority
               alt={'Dušan Todorović in a formal white shirt'}
               width={128}
               height={128}
               className={styles.image}
        />
        <section className={styles.textSection}>
          <h1 className={styles.title}
          >
            <Link href={'/about'} className={styles.accented}>Dušan Todorović</Link>
          </h1>
          <p className={gStyles.tags}>
            Software Engineer <span>|</span> Team Leader
          </p>
          <a
            className={styles.locationLink}
            href={'https://maps.app.goo.gl/DHTdsDU24RjWYhhV8'}
            target={'_blank'}>
            Belgrade, Serbia
          </a>
        </section>
      </div>
      <section className={`${styles.paragraphBelow} ${gStyles.text}`}>
        <ul className={styles.ul}>
          <li>
            Need my <Link href={'/skills'}>skills</Link>? Let's <Link
            href="https://www.linkedin.com/in/dusan-todorovic-krcky/" target="_blank">chat</Link>!
          </li>
          <li>Download my <Link href={'/CV.pdf'} target="_blank" rel="noopener noreferrer">CV</Link>.</li>
        </ul>
      </section>
    </section>
  );
};

export default ImageAndText;