import React, { FunctionComponent } from 'react';
import SkillItems from '@/app/skills/skills/skill-items/SkillItem';
import data from '@/app/skills/skills/soft-skills/data';

const SoftSkills: FunctionComponent = () => {
  return (
    <>
      <h2>Soft Skills</h2>
      <SkillItems skills={data} />
    </>
  );
};

export default SoftSkills;