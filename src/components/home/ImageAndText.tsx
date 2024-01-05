import React, { FunctionComponent } from 'react';
import styles from '@/components/home/styles.module.scss';
import Image from 'next/image';

const ImageAndText: FunctionComponent = () => {
  return (
    <div className={styles.containerImageText}>
      <Image src={'/images/home/dusan.png'}
             priority
             alt={'Dušan Todorović in a formal white shirt'}
             width={400}
             height={500}
             className={styles.image}
      />
      <section className={styles.textSection}>
        <h1 className={styles.title}>
          I'm <strong className={styles.name}>Dušan Todorović</strong>, a Web Developer.
        </h1>
        <p className={styles.location}>
          Based in {' '}
          <a className={styles.locationLink} href={'https://maps.app.goo.gl/DHTdsDU24RjWYhhV8'} target={'_blank'}>
            Belgrade, Serbia.
          </a>
        </p>
      </section>
    </div>
  );
};

export default ImageAndText;