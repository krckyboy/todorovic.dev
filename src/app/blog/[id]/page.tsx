import React from 'react';
import { NextPage } from 'next';

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = (props) => {
  const { id } = props.params;

  return (
    <>Blog {id} </>
  );
};

export default Page;