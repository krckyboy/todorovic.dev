'use client';
import React, { FunctionComponent, useState } from 'react';
import parentStyles from '../../styles.module.scss';
import styles from './styles.module.scss';
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
            <ul key={skill.title}
                className={`${activeSkill === skill.title ? parentStyles.active : ''} ${parentStyles.item} ${parentStyles.listContent} ${styles.skillList}`}>
              {skill.content.map((item) => (
                <li key={item} className={parentStyles.listContentItem}>
                  {item}
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </>
  );
};

export default SkillItems;