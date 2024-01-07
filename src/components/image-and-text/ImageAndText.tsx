'use client';
import React, { FunctionComponent } from 'react';
import styles from '@/components/image-and-text/styles.module.scss';
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
        <Image src={'/images/dusan.png'}
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
          I'm <Link href={'/about'} className={styles.accented}>Dušan Todorović</Link>.
        </motion.h1>
        <motion.p className={styles.tags}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.5, delay: 0.8 }}
        >
          Web Developer | Team Leader | Specializing in React
        </motion.p>
        <motion.p className={styles.location}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.5, delay: 1 }}
        >Based in {' '}
          <a className={styles.locationLink} href={'https://maps.app.goo.gl/DHTdsDU24RjWYhhV8'} target={'_blank'}>
            Belgrade, Serbia.
          </a>
        </motion.p>
        <motion.section className={styles.paragraphBelow}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.5, delay: 1.2 }}>
          <p>Hello, internet! I'm Dušan Todorović, a dedicated Web Developer. I specialize in diving deep into the code
            and leading teams to ensure smooth project execution.</p>

          <ul className={styles.ul}>
            <li>Interested in my skills and professional experience? <Link href={'/skills'}>Go here</Link>.</li>
            {/*<li>Want to know more about me? Visit my <Link href={'/about'}>About Me</Link> page.</li>*/}
            {/*<li>Curious about my journey or picking my brain? <Link href={'/blog'}>Visit my blog.</Link></li>*/}
            <li>You can also <Link href={'/cv'}>download my CV</Link>.</li>
            <li>If you're a company or individual client looking for a dedicated, experienced developer, <Link
              href="https://www.linkedin.com/in/dusan-todorovic-krcky/">let's chat</Link>! Let's make your project
              better... or at least, less buggy!
            </li>
          </ul>
        </motion.section>
      </section>
    </div>
  );
};

export default ImageAndText;