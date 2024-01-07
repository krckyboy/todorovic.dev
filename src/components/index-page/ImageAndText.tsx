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
          <p>Hello, internet! I'm a dedicated Web Developer with a knack for diving deep into the
            code. Over the past few years, I've honed my skills and worked on some truly impressive projects. I've also
            led (still am) a team of awesome developers, managing projects and ensuring everything runs smoothly.</p>

          <p>But I'm not just about making things work - I'm all about coding, solving problems, and creating digital
            experiences that are not only functional but also enjoyable. My leadership role has allowed me to develop
            strong communication and collaboration skills, which I believe are crucial in today's fast-paced tech
            industry.</p>

          <p>Interested in my skills? Check out my projects. Curious about my journey? Visit my blog. Or if you're a
            company or individual client looking for a dedicated, experienced developer, let's chat! I'd love to hear
            about your project and see how we can make it even better.</p>
        </motion.section>
      </section>
    </div>
  );
};

export default ImageAndText;