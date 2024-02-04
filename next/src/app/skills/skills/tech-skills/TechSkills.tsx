import React, { FunctionComponent } from 'react';
import SkillItems from '@/app/skills/skills/skill-items/SkillItem';
import data from '@/app/skills/skills/tech-skills/data';

const TechSkills: FunctionComponent = () => {
  return (
    <>
      <h2>Technical Skills</h2>
      <SkillItems skills={data} />
    </>
  );
};

export default TechSkills;