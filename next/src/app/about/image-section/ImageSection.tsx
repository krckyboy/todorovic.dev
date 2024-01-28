import React, { FunctionComponent } from 'react';
import styles from '@/app/about/styles.module.scss';
import Image from 'next/image';

const ImageSection: FunctionComponent = () => {
  return (
    <section className={styles.imagesContainer}>
      <Image
        src={'/images/about/846FD215-D652-4225-9AC1-BDB43CCC56DF_1_105_c.jpeg'} alt={'Dušan in a gondola.'}
        width={250} height={250} />
      <Image src={'/images/about/E7FF333A-32F1-4E1A-B624-8FD917A8F194_1_105_c.jpeg'}
             alt={'Dušan on near the river.'}
             width={250} height={250} />
      <Image src={'/images/about/3D037048-F26D-464D-BB7E-13AA8696C6B9_1_105_c.jpeg'} alt={'Dušan on the beach.'}
             width={250} height={250} />
      <Image
        src={'/images/about/2F6ACD0F-D23F-4006-97D8-5D062B0EB330_1_105_c.jpeg'} alt={'Dušan next to an elephant.'}
        width={250} height={250} />
      <Image
        src={'/images/about/EF46B464-0160-404D-B2B4-33224F118617_1_105_c.jpeg'} alt={'Lilly on a sofa.'}
        width={250} height={250} />
      <Image
        src={'/images/about/27318BF1-3FDE-4F44-99AB-301A371463F0_1_105_c.jpeg'} alt={'Lilly on my lap.'}
        width={250} height={250} />
    </section>
  );
};

export default ImageSection;