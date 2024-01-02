import { NextPage } from 'next';
import Home from '@/components/sideMenu/SideMenu';
import styles from './styles.module.scss';

const Page: NextPage = () => {
  return (
    <main>
      <section className={styles.section}>
        <h1 className={styles.h1}>
          <span>I'm <strong className={styles.textStrong}>Dušan</strong> Todorović, a Web Developer.</span>
          <span className={styles.textBottom}>Based in <a className={styles.textLink}
                                                          href={'https://maps.app.goo.gl/DHTdsDU24RjWYhhV8'}
                                                          target={'_blank'}>Belgrade, Serbia.</a></span>
        </h1>
      </section>
      <Home />
    </main>
  );
};

export default Page;