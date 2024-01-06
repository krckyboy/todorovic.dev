'use client';
import React, { FunctionComponent } from 'react';
import styles from '@/components/home/styles.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
                   transition={{ duration: 1, delay: 1 }}
        >
          I'm <Link href={'/about'} className={styles.accented}>Dušan Todorović</Link>, a Web Developer.
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
        <motion.p className={styles.paragraphBelow}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 1, delay: 2 }}>
          <span>Bacon ipsum dolor amet nulla corned beef occaecat do aliqua sausage. Bresaola velit commodo pork belly. Ad eiusmod sunt tenderloin officia cupidatat excepteur pork chop.</span>

          <span>Ex nostrud aute, meatball venison doner turkey sed fatback commodo qui ground round.</span>

          <span>Rump officia salami in deserunt non bresaola, short ribs ullamco pork belly t-bone ipsum fatback velit. Qui frankfurter swine sirloin cupim pariatur salami irure pig officia proident.</span>
        </motion.p>
      </section>
    </div>
  );
};

export default ImageAndText;