import React, { FunctionComponent } from 'react';
import gStyles from '@/styles/global.module.scss';
import Link from 'next/link';

const styles: React.CSSProperties = {
  marginLeft: 0,
  marginTop: '1rem'
};

const NotFound: FunctionComponent = () => {
  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>Not found</h1>
        <h2>Sorry, there's nothing here!</h2>
        <Link href={'/'} className={gStyles.button} style={styles}>Home</Link>
      </section>
    </main>
  );
};

export default NotFound;