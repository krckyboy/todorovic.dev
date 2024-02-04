'use client';
import React, { FunctionComponent, useState } from 'react';
import styles from './styles.module.scss';
import { Experience } from '../data';
import { convertToString, formatDuration } from './scripts';

interface Props {
  experienceItems: Experience[];
}

const ExperienceItems: FunctionComponent<Props> = ({ experienceItems }) => {
  const [activeExperience, setActiveExperience] = useState(experienceItems[0].companyName);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {experienceItems.map((experience) => (
          <li onClick={() => setActiveExperience(experience.companyName)} key={experience.companyName}
              className={`${activeExperience === experience.companyName ? styles.active : ''}`}>
            <span>{experience.companyName}</span>
          </li>
        ))}
      </ul>
      <ul className={styles.content}>
        {experienceItems.map((experience) => (
          <li key={experience.companyName}
              className={`${activeExperience === experience.companyName ? styles.active : ''}`}>
            {experience.position.map(({ title, endDate, startDate, location, achievements }) => (
              <div key={title} className={styles.position}>
                <h3 className={styles.title}>{title}</h3>
                <p
                  className={styles.duration}>{convertToString(startDate, endDate)} | {formatDuration(startDate, endDate)}</p>
                <p className={styles.location}>{location}</p>
                <div className={styles.achievements}>
                  {achievements.map((achievement, index) => (
                    <p className={styles.achievement} key={index}>{achievement}</p>
                  ))}
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceItems;