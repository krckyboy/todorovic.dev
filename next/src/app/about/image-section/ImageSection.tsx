import React, { FunctionComponent } from 'react';
import styles from '@/app/about/styles.module.scss';
import Image from 'next/image';
import data from './data';

const ImageSection: FunctionComponent = () => {
  return (
    <section className={styles.imagesContainer}>
      {data.map((item) => (
        <Image
          src={item.src} alt={item.alt} key={item.alt} width={250} height={250}
        />
      ))}
    </section>
  );
};

export default ImageSection;