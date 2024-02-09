import React, { FunctionComponent } from 'react';
import { techSkillsData, softSkillsData } from './data';
import SkillItems from './(skill-items)/SkillItem';

const Skills: FunctionComponent = () => {
  return (
    <>
      <section>
        <h2>Technical Skills</h2>
        <SkillItems skills={techSkillsData} />
      </section>
      <section>
        <h2>Soft Skills</h2>
        <SkillItems skills={softSkillsData} />
      </section>
    </>
  );
};

export default Skills;