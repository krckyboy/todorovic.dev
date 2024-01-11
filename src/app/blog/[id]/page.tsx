import React from 'react';
import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = (props) => {
  const { id } = props.params;

  return (
    <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
      <>Blog {id} </>
    </section>
  );
};

export default Page;