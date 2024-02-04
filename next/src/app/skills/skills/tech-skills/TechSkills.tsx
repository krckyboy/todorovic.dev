import React, { FunctionComponent } from 'react';
import SkillItem from '@/app/skills/skills/skill-item/SkillItem';
import data from '@/app/skills/skills/tech-skills/data';

const TechSkills: FunctionComponent = () => {
  return (
    <>
      <h2>Technical Skills</h2>
      <SkillItem skills={data} />
    </>
  );
};

export default TechSkills;