'use client';
import React, { FunctionComponent, useState } from 'react';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';
import { JobItem } from '../data';
import { convertToString, formatDuration } from './scripts';

const JobItems: FunctionComponent<JobItem> = ({
                                                jobTitle,
                                                companyName,
                                                location,
                                                achievements,
                                                startDate,
                                                endDate
                                              }) => {
  // const [activeJob, setActiveJob] = useState(jobs[0].title);

  return (
    <div className={`${styles.container} ${gStyles.text}`}>
      <div>
        <p className={styles.companyName}>{companyName}</p>
        <p
          className={styles.duration}>{convertToString(startDate, endDate)} | {formatDuration(startDate, endDate)}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <h3 className={styles.title}>{jobTitle}</h3>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobItems;