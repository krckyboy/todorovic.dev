import React, { FunctionComponent } from 'react';
import Image from 'next/image';

interface Props {
  src: string | undefined;
  alt: string | undefined;
}

const MarkdownImage: FunctionComponent<Props> = ({ src, alt }) => {
  if (!src) {
    return null;
  }

  return (
    <Image
      src={src.replace('localhost', 'cms')}
      alt={alt || ''}
      width={700}
      height={300}
    />
  );
};

export default MarkdownImage;