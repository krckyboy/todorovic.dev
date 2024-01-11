import { NextPage } from 'next';
import styles from '@/app/styles.module.scss';
import gStyles from '@/styles/global.module.scss';

const Page: NextPage = () => {
  return (
    <main>
      <section className={`${styles.section} ${gStyles.paddingInline}`}>
        <h1>Skills</h1>
      </section>
    </main>
  );
};

export default Page;