'use client';
import React, { FunctionComponent, useState } from 'react';
import parentStyles from '../../styles.module.scss';
import type { Skill } from '../data';

interface Props {
  skills: Skill[];
}

const SkillItems: FunctionComponent<Props> = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState(skills[0].title);

  return (
    <>
      <ul className={parentStyles.list}>
        {skills.map((skill) => (
            <li onClick={() => setActiveSkill(skill.title)} key={skill.title}
                className={`${activeSkill === skill.title ? parentStyles.active : ''}`}>
              <span>{skill.title}</span>
            </li>
          )
        )}
      </ul>
      <div className={parentStyles.content}>
        {skills.map((skill) => (
            <p key={skill.title}
               className={`${activeSkill === skill.title ? parentStyles.active : ''} ${parentStyles.item}`}>
              {skill.content}
            </p>
          )
        )}
      </div>
    </>
  );
};

export default SkillItems;