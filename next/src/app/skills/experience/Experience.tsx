import React, { FunctionComponent } from 'react';
import data from './data';
import ExperienceItems from './experience-items/ExperienceItems';
import gStyles from '@/styles/global.module.scss';

const Experience: FunctionComponent = () => {
  return (
    <section className={gStyles.text}>
      <h2>Work Experience</h2>
      <ExperienceItems experienceItems={data} />
    </section>
  );
};

export default Experience;