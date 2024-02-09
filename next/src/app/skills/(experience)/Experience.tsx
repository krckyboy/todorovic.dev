import React, { FunctionComponent } from 'react';
import data from './data';
import ExperienceItems from './(experience-items)/ExperienceItems';

const Experience: FunctionComponent = () => {
  return (
    <section>
      <h2>Work Experience</h2>
      <ExperienceItems experienceItems={data} />
    </section>
  );
};

export default Experience;