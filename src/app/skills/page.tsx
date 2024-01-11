import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';

const Page: NextPage = () => {
  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1>Skills</h1>
      </section>
    </main>
  );
};

export default Page;