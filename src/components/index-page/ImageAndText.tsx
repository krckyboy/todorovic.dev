'use client';
import React, { FunctionComponent } from 'react';
import styles from '@/components/index-page/styles.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ImageAndText: FunctionComponent = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 }, // start off-screen to the left
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Image src={'/images/index-page/dusan.png'}
               priority
               alt={'Dušan Todorović in a formal white shirt'}
               width={200}
               height={200}
               className={styles.image}
        />
      </motion.div>
      <section className={styles.textSection}>
        <motion.h1 className={styles.title}
                   initial="hidden"
                   animate="visible"
                   variants={variants}
                   transition={{ duration: 0.5, delay: 0.5 }}
        >
          I'm <Link href={'/about'} className={styles.accented}>Dušan Todorović</Link>, a Web Developer.
        </motion.h1>
        <motion.p className={styles.location}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.5, delay: 0.8 }}
        >
          Based in {' '}
          <a className={styles.locationLink} href={'https://maps.app.goo.gl/DHTdsDU24RjWYhhV8'} target={'_blank'}>
            Belgrade, Serbia.
          </a>
        </motion.p>
        <motion.section className={styles.paragraphBelow}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.5, delay: 1 }}>
          <p>Bacon ipsum dolor amet nulla corned beef occaecat do aliqua sausage. Bresaola velit commodo pork belly. Ad eiusmod sunt tenderloin officia cupidatat excepteur pork chop.</p>

          <p>Ex nostrud aute, meatball venison doner turkey sed fatback commodo qui ground round.</p>

          <p>Rump officia salami in deserunt non bresaola, short ribs ullamco pork belly t-bone ipsum fatback velit. Qui frankfurter swine sirloin cupim pariatur salami irure pig officia proident.</p>
        </motion.section>
      </section>
    </div>
  );
};

export default ImageAndText;