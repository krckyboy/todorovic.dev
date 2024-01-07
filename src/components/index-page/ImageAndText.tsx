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
          <p>Hello, internet! I'm currently engaged in a rewarding role as a dedicated Front-End Team Lead.
            I thrive on diving deep into the code and have a proven track record in web development. While I'm deeply
            committed to my current project, I'm always open to learning about new opportunities that align with my
            skills and interests.</p>

          <p>I've spent the last few years honing my <Link href={'/skills'}>skills</Link> and working on some pretty
            cool projects. Additionally, I've had the privilege of leading a team of exceptional developers, overseeing
            project management, and ensuring seamless operations.</p>

          <p>But I'm not just about making things work. In addition to my professional experience, I also share insights
            on various aspects of web development on my <Link href={'/blog'}>blog</Link>. Whether you're interested in
            learning more about my technical expertise or improving your own soft skills, there's something for
            everyone.</p>

          <p>Whether you're a company seeking a dedicated, experienced developer who loves what they do or an individual
            client valuing quality, creativity, and dedication in their web solutions, I'd be thrilled to connect with
            you. <a href="https://www.linkedin.com/in/dusan-todorovic-krcky/">Let's chat</a> and see how we can make
            your project even better!</p>

          <p>If you would like to learn more about me, feel free to roam around or just head to the <Link
            href={'/about'}>about page</Link>.</p>
        </motion.section>
      </section>
    </div>
  );
};

export default ImageAndText;