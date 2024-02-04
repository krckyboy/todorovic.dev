import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import data from './data';
import JobItems from '@/app/skills/jobs/job-items/JobItems';

const Jobs: FunctionComponent = () => {
  return (
    <>
      <h2>Work Experience</h2>
      {data.map((item, index) => (
        <JobItems key={index}
                 jobTitle={item.jobTitle}
                 companyName={item.companyName}
                 location={item.location}
                 startDate={item.startDate}
                 endDate={item.endDate}
                 achievements={item.achievements}
        />
      ))}
    </>
  );
};

export default Jobs;