import { NextPage } from 'next';
import gStyles from '../../styles/global.module.scss';
import React from 'react';

const Page: NextPage = () => {
  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>My skills</h1>
      </section>
    </main>
  );
};

export default Page;