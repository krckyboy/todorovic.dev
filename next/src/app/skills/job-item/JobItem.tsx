import React, { FunctionComponent } from 'react';
import styles from '@/app/skills/styles.module.scss';
import gStyles from '@/styles/global.module.scss';
import { JobItem } from '@/app/skills/job-item/data';

const JobItem: FunctionComponent<JobItem> = ({
                                               jobTitle,
                                               companyName,
                                               location,
                                               responsibilities,
                                               achievements,
                                               duration
                                             }) => {
  return (
    <div className={`${styles.jobItem} ${gStyles.text}`}>
      <h3 className={styles.jobTitle}>{jobTitle}</h3>
      <p className={styles.companyName}>{companyName}</p>
      <p className={styles.location}>{location}</p>
      <p className={styles.duration}>{duration}</p> {/* use that library, colors from featured posts, tags for skills? */}
      <ul className={styles.responsibilitiesList}>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <ul className={styles.achievementsList}>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobItem;