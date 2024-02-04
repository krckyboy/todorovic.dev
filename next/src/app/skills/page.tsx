import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import React from 'react';
import Link from 'next/link';
import SoftSkills from '@/app/skills/skills/soft-skills/SoftSkills';
import TechSkills from '@/app/skills/skills/tech-skills/TechSkills';
import Jobs from '@/app/skills/jobs/Jobs';

const Page: NextPage = () => {
  return (
    <main className={`${styles.main} ${gStyles.section} ${gStyles.paddingInline}`}>
      <h1 className={gStyles.pageHeading}>Skills</h1>
      <section className={gStyles.text}>
        <TechSkills />
        <SoftSkills />
      </section>
      <Jobs />
      <h2>Contact Information</h2>
      <p className={gStyles.text}>Feel free to reach out to me if you want to chat about coding, or anything else. I'm
        always open to new
        connections and opportunities:</p>
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/dusan-todorovic-krcky/">Linkedin</Link>
        </li>
        <li>
          <Link href="mailto:dusan.todorovic.dev@gmail.com">Mail</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;