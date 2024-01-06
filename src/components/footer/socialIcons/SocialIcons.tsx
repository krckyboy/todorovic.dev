import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import SingleSocialIcon from '@/components/footer/socialIcons/SingleSocialIcon';

const SocialIcons: FunctionComponent = () => {
  return (
    <ul className={styles.socialIcons}>
      <SingleSocialIcon
        url={'https://www.linkedin.com/in/dusan-todorovic-krcky/'}
        imgSrc={'/images/social-icons/icon-linkedin.svg'}
        imgAlt={'LinkedIn'}
      />
      <SingleSocialIcon
        url={'https://github.com/krckyboy/'}
        imgSrc={'/images/social-icons/icon-github.svg'}
        imgAlt={'Github'}
      />
      <SingleSocialIcon
        url={'mailto:dusan.todorovic.dev@gmail.com'}
        imgSrc={'/images/social-icons/icon-mail.svg'}
        imgAlt={'Mail'}
      />
    </ul>
  );
};

export default SocialIcons;
