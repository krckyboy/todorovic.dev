import React, { FunctionComponent } from 'react';
import { techSkillsData } from './data';
import { softSkillsData } from './data';
import SkillItems from '@/app/skills/skills/skill-items/SkillItem';
import gStyles from '@/styles/global.module.scss';

const Skills: FunctionComponent = () => {
  return (
    <>
      <section className={gStyles.text}>
        <h2>Technical Skills</h2>
        <SkillItems skills={techSkillsData} />
      </section>
      <section className={gStyles.text}>
        <h2>Soft Skills</h2>
        <SkillItems skills={softSkillsData} />
      </section>
    </>
  );
};

export default Skills;