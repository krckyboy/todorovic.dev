'use client';
import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import gStyles from '@/styles/global.module.scss';
import Image from 'next/image';
import SocialIcons from '@/components/footer/social-icons/SocialIcons';

const ImageAndText: FunctionComponent = () => {
  return (
    <section className={`${gStyles.section}`}>
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
      <SocialIcons />
      <section className={`${styles.paragraphBelow} ${gStyles.text}`}>
        <ul className={styles.ul}>
          <li>Currently working as Frontend Lead @ <a href={'https://citrussys.com/'} target="_blank">Citrus Systems</a>.
          </li>
          <li>
            Check what I'm <Link href={'/skills'}>good at</Link>, download my
            <Link href={'/CV.pdf'} target="_blank" rel="noopener noreferrer"> CV</Link>,
            and let's <Link href="https://www.linkedin.com/in/dusan-todorovic-krcky/" target="_blank">chat</Link>!
          </li>
          <li>Also, feel free to read more <Link href={'/about'}>about me</Link>.</li>
        </ul>
      </section>
    </section>
  );
};

export default ImageAndText;