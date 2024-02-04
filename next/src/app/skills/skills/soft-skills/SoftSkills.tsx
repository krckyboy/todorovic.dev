import React, { FunctionComponent } from 'react';
import SkillItem from '@/app/skills/skills/skill-item/SkillItem';
import data from '@/app/skills/skills/soft-skills/data';

const SoftSkills: FunctionComponent = () => {
  return (
    <>
      <h2>Soft Skills</h2>
      <SkillItem skills={data} />
    </>
  );
};

export default SoftSkills;