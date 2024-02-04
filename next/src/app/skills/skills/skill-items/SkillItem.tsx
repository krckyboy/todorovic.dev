'use client';
import React, { FunctionComponent, useState } from 'react';
import styles from './styles.module.scss';
import type { Skill } from '../data';

interface Props {
  skills: Skill[];
}

const SkillItems: FunctionComponent<Props> = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState(skills[0].title);

  return (
    <>
      <ul className={styles.list}>
        {skills.map((skill) => (
            <li onClick={() => setActiveSkill(skill.title)} key={skill.title}
                className={`${activeSkill === skill.title ? styles.active : ''}`}>
              <span>{skill.title}</span>
            </li>
          )
        )}
      </ul>
      <div className={styles.content}>
        {skills.map((skill) => (
            <p key={skill.title}
               className={`${activeSkill === skill.title ? styles.active : ''} ${styles.item}`}>
              {skill.content}
            </p>
          )
        )}
      </div>
    </>
  );
};

export default SkillItems;