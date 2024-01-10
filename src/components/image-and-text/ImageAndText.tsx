'use client';
import React, { FunctionComponent } from 'react';
import styles from '@/components/image-and-text/styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ImageAndText: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Image src={'/images/dusan.png'}
             priority
             alt={'Dušan Todorović in a formal white shirt'}
             width={200}
             height={200}
             className={styles.image}
      />
      <section className={styles.textSection}>
        <h1 className={styles.title}
        >
          <Link href={'/about'} className={styles.accented}>Dušan Todorović</Link>
        </h1>
        <p className={styles.tags}>
          Developer <span>|</span> Team Leader <span>|</span> React Specialist
        </p>
        <section className={styles.paragraphBelow}>
          <p>Hello, internet! I'm Dušan Todorović, a dedicated Web Developer based in <a className={styles.locationLink}
                                                                                         href={'https://maps.app.goo.gl/DHTdsDU24RjWYhhV8'}
                                                                                         target={'_blank'}>
            Belgrade, Serbia
          </a>. I specialize in diving deep into the code
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
        </section>
      </section>
    </div>
  );
};

export default ImageAndText;