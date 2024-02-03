import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import React from 'react';
import JobItem from '@/app/skills/job-item/JobItem';
import jobsData from './job-item/data';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <main className={styles.main}>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>Skills</h1>
        <div className={gStyles.text}>
          <h2 className={styles.subheading}>Technical Skills</h2>
          <ul>
            <li>
              <p>
                <Link href="https://react.dev/" target="_blank">React</Link> - Developed reusable UI components and
                state management solutions using hooks and context API.
              </p>
            </li>
            <li>
              <p>
                <Link href="https://nextjs.org/" target="_blank">Next.js</Link> - Built server-rendered applications
                with static site generation and API routes for improved performance and SEO.
              </p>
            </li>
            <li>
              <p>
                <Link href="https://redux.js.org/" target="_blank">Redux</Link> - Managed global state with actions and
                reducers for predictable state updates across complex applications.
              </p>
            </li>
            <li>
              <p>
                <Link href="https://sass-lang.com/" target="_blank">SASS</Link> - Authored modular stylesheets and used
                mixins and functions to enhance maintainability and scalability of CSS.
              </p>
            </li>
          </ul>
          <h2 className={styles.subheading}>Soft Skills</h2>
          <p>In addition to my technical skills, I place a high value on clear communication and effective
            collaboration. I believe that these soft skills are crucial in any team setting, contributing significantly
            to the overall success of the project. One of my strengths lies in delegating tasks efficiently, considering
            the priorities, capabilities, and work styles of my team members. This approach ensures that everyone feels
            valued and motivated, leading to higher productivity and job satisfaction.</p>
          <p>I also champion initiative and proactivity within my team. I believe in giving others the opportunity to
            showcase their ideas and abilities, fostering a culture of innovation and growth. At the same time, I'm not
            afraid to provide constructive feedback when necessary, helping individuals improve and succeed.</p>
          <p>My leadership journey includes successfully navigating the hiring process, from interviewing candidates to
            making the final decision. I take pride in maintaining a stable team with no quitters over three years, a
            testament to my ability to build and nurture a positive work environment.</p>
          <p>I thrive on challenges and the thrill of solving complex problems. The feeling of successfully implementing
            a major feature is something I truly cherish.</p>
        </div>
        <h2 className={styles.subheading}>Work Experience</h2>
        <section className={styles.jobs}>
          {jobsData.map((item, index) => (
            <JobItem key={index}
                     jobTitle={item.jobTitle}
                     companyName={item.companyName}
                     location={item.location}
                     startDate={item.startDate}
                     endDate={item.endDate}
                     achievements={item.achievements}
            />
          ))}
        </section>
        <h2 className={styles.subheading}>Contact Information</h2>
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
      </section>
    </main>
  );
};

export default Page;