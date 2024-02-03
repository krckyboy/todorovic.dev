import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import React from 'react';
import Link from 'next/link';
import ImageSection from '@/app/about/image-section/ImageSection';

const Page: NextPage = () => {
  return (
    <main className={styles.main}>
      <article className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>About Me</h1>
        <ImageSection />
        <section className={`${gStyles.text} ${styles.mainContent}`}>
          <h2 className={styles.subheading}>Introduction</h2>
          <p>Hello! I'm Dušan Todorović, a resident of Belgrade, Serbia. You might think I've been coding since
            I was in diapers, but nope!</p>
          <p>I come from a long line of musicians - my dad, granddad, and great-granddad were
            all accordion players.</p>
          <p>So, you can imagine music has always been a big part of my life. I picked up the accordion at the tender
            age of 8 and I was pretty good at it!</p>
          <h2 className={styles.subheading}>Musical Background</h2>
          <p>I wasn't just limited to the accordion. I also played the keyboard and it became my main source of
            income for years. I even taught others how to play accordion and keyboard.</p>
          <p>Oh, really, I could share so much about this. The main point is, my father was rooting for me to
            prolong our musical roots, but I guess I never really found myself going for it commercially, especially
            because of the social side in folk music in Serbia.</p>
          <p>But yes, I had to earn money and I was good at playing, so I kept going for it while exploring other
            options.</p>
          <h2 className={styles.subheading}>Transition to Programming</h2>
          <p>My transition into programming happened quite unexpectedly. During college, I had to take a web design
            class and that's where I fell in love with coding. After that, I started taking front-end courses on
            platforms like Udemy and FreeCodeCamp.</p>
          <p>Eventually, I landed my first job as a junior front-end developer through a friend of a friend. At that
            time, knowing HTML, CSS (with a bit of Bootstrap), and some JavaScript was enough to get by.</p>
          <h2 className={styles.subheading}>Early Career</h2>
          <p>Despite the lack of advanced tools, I made significant progress after leaving my first job. I spent a lot
            of time reading documentation and working on personal projects to build up my full-stack skills. I also
            continued to teach music and play on parties to support myself financially.</p>
          <p>I was pretty disciplined. I worked on my projects every day, as if it was my job. I have to
            say, the key to pushing me forward was that I was always working on challenging projects. It started off
            from ideas, designing them myself in Figma, and then handling the front-end and/or back-end if it required
            it, and then deployment.</p>
          <h2 className={styles.subheading}>Current Role</h2>
          <p>After building my portfolio and honing my skills, I landed a job that changed my life. I'm currently a
            front-end team lead at a reputable company. I love how I've grown not just in my tech skills, but also in
            my management and soft skills.</p>
          <p>I enjoy both the operational side of work, and also managing people.</p>
          <h2 className={styles.subheading}>Interests</h2>
          <p>I have a few quirky habits that might surprise you. For instance, I used to watch streams of League of
            Legends, even though I don't play the game anymore. I also enjoy playing PlayStation 5 from time to time,
            but lately, I've been more inclined towards working on personal projects than playing video games.</p>
          <p>I absolutely love dogs and other animals, but dogs are my favorite, that's for sure. They are pure, and
            lovable and they are our best friends! I always get fascinated, over and over, by how much positive energy
            I get from Lilly. Lilly is my dog, Shi Tzuh!</p>
          <p>I also like TV shows and movies. Some of my favorites include The Sopranos, Dexter, Mad Men.</p>
          <h2 className={styles.subheading}>Contact Information</h2>
          <p>Feel free to reach out to me if you want to chat about coding, or anything else. I'm always open to new
            connections and opportunities:</p>
          <ul>
            <li>
              <Link href="https://www.linkedin.com/in/dusan-todorovic-krcky/">Linkedin</Link>
            </li>
            <li>
              <Link href="mailto:dusan.todorovic.dev@gmail.com">Mail</Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default Page;