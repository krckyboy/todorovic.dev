'use client';
import React, { FunctionComponent } from 'react';
import styles from '@/components/home/styles.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageAndText: FunctionComponent = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 }, // start off-screen to the left
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className={styles.containerImageText}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <Image src={'/images/home/dusan.png'}
               priority
               alt={'Dušan Todorović in a formal white shirt'}
               width={400}
               height={500}
               className={styles.image}
        />
      </motion.div>
      <section className={styles.textSection}>
        <motion.h1 className={styles.title}
                   initial="hidden"
                   animate="visible"
                   variants={variants}
                   transition={{ duration: 1, delay: 1 }}
        >
          I'm <strong className={styles.name}>Dušan Todorović</strong>, a Web Developer.
        </motion.h1>
        <motion.p className={styles.location}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 1, delay: 1.5 }}
        >
          Based in {' '}
          <a className={styles.locationLink} href={'https://maps.app.goo.gl/DHTdsDU24RjWYhhV8'} target={'_blank'}>
            Belgrade, Serbia.
          </a>
        </motion.p>
      </section>
    </div>
  );
};

export default ImageAndText;