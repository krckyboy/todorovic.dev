import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import React from 'react';
import Image from 'next/image';

const Page: NextPage = () => {
  return (
    <main className={styles.main}>
      <article className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>About me</h1>
        <section className={styles.imagesContainer}>
          <Image
            src={'/images/about/846FD215-D652-4225-9AC1-BDB43CCC56DF_1_105_c.jpeg'} alt={'Dušan in a gondola.'}
            width={300} height={250} />
          <Image src={'/images/about/E7FF333A-32F1-4E1A-B624-8FD917A8F194_1_105_c.jpeg'}
                 alt={'Dušan on near the river.'}
                 width={300} height={250} />
          <Image src={'/images/about/3D037048-F26D-464D-BB7E-13AA8696C6B9_1_105_c.jpeg'} alt={'Dušan on the beach.'}
                 width={300} height={250} />
        </section>
        <section className={`${gStyles.text} ${styles.mainContent}`}>
          <h2 className={styles.subheading}>Introduction</h2>
          <p>Hey there! I'm Dušan Todorović, a proud resident of Belgrade, Serbia. You might think I've been coding
            since I was in diapers, but nope! I come from a long line of musicians - my dad, granddad, and
            great-granddad were all accordion players.</p>

          <p>So, you can imagine music has always been a big part of my life. I picked up the accordion at the tender
            age of 8 and I was pretty good at it!</p>

          <h2 className={styles.subheading}>Musical Background</h2>
          <p>I wasn't just limited to the accordion though. I also played the keyboard and it became my main source of
            income for years. I even taught others how to play accordion and keyboard.</p>
          <p>Oh, really, I could share so much
            about this, but the main point is, my father was rooting for me to prolong our musical roots, but I guess I
            never really found myself going for it, especially because of the social side in folk music in Serbia. It
            was a bit too much toxic for me.</p>
          <p>But yes, I had to earn money and I was good at playing, so I kept going for
            it while exploring other options.</p>

          <h2 className={styles.subheading}>Transition to Programming</h2>
          <p>My transition into programming happened quite unexpectedly. During college, I had to take a web design
            class and that's where I fell in love with coding. After that, I started taking front-end courses on
            platforms like Udemy and FreeCodeCamp.</p>
          <p>Eventually, I landed my first job as a junior front-end developer through a friend of a friend. At that
            time, knowing HTML, CSS (with a bit of Bootstrap), and some JavaScript was enough to get by.</p>

          <h2 className={styles.subheading}>Early Career</h2>
          <p>Despite the lack of advanced tools, I made significant progress after leaving my first job. I spent a lot
            of time reading documentation and working on personal projects to build up my full-stack skills. I also
            continued to teach music to support myself financially.</p>

          <h2 className={styles.subheading}>Current Role</h2>
          <p>After building my portfolio and honing my skills, I landed a job that changed my life. I'm currently a
            front-end team lead at a reputable company. I love how I've grown not just in my tech skills, but also in my
            management and soft skills.</p>

          <h2 className={styles.subheading}>Interesting Habits and Interests</h2>
          <section className={styles.imagesContainer}>
            <Image
              src={'/images/about/2F6ACD0F-D23F-4006-97D8-5D062B0EB330_1_105_c.jpeg'} alt={'Dušan next to an elephant.'}
              width={300} height={250} />
            <Image
              src={'/images/about/EF46B464-0160-404D-B2B4-33224F118617_1_105_c.jpeg'} alt={'Lilly on a sofa.'}
              width={300} height={250} />
            <Image
              src={'/images/about/27318BF1-3FDE-4F44-99AB-301A371463F0_1_105_c.jpeg'} alt={'Lilly on my lap.'}
              width={300} height={250} />
          </section>

          <p>I have a few quirky habits that might surprise you. For instance, I used to watch streams of League of
            Legends, even though I don't play the game anymore. I also enjoy playing PlayStation 5 from time to time,
            but lately, I've been more inclined towards working on personal projects than playing video games.</p>

          <p>I absolutely love dogs and other animals, but dogs are my favorite, that's for sure. They are pure, and
            lovable and they are our best friends! I always get fascinated, over and over, by how much positive energy I
            get from Lilly. Lilly is my dog, Shi Tzuh!</p>

          <p>I'm a big fan of TV shows. Some of my favorites include... (list your favorite shows here).</p>

          <h2 className={styles.subheading}>Contact Information</h2>
          <p>Feel free to reach out to me if you want to chat about music, coding, or anything else. I'm always open to
            new connections and opportunities.</p>
        </section>
      </article>
    </main>
  );
};

export default Page;