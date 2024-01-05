import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import SingleSocialIcon from '@/components/home/SingleSocialIcon';

const SocialIcons: FunctionComponent = () => {
  return (
    <ul className={styles.socialIcons}>
      <SingleSocialIcon
        url={'https://www.linkedin.com/in/dusan-todorovic-krcky/'}
        imgSrc={'/images/home/icon-linkedin.svg'}
        imgAlt={'LinkedIn'}
      />
      <SingleSocialIcon
        url={'https://github.com/krckyboy/'}
        imgSrc={'/images/home/icon-github.svg'}
        imgAlt={'Github'}
      />
      <SingleSocialIcon
        url={'mailto:dusan.todorovic.dev@gmail.com'}
        imgSrc={'/images/home/icon-gmail.svg'}
        imgAlt={'Mail'}
      />
    </ul>
  );
};

export default SocialIcons;
