import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import data from './data';
import JobItem from './job-item/JobItem';

const Jobs: FunctionComponent = () => {
  return (
    <>
      <h2>Work Experience</h2>
      <section className={styles.container}>
        {data.map((item, index) => (
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
    </>
  );
};

export default Jobs;