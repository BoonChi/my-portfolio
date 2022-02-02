import React from 'react';
import Image from 'next/image';

type Prop = {
  src: string;
  style: string;
};
const CommonImage: React.FC<Prop> = ({ src, style }) => {
  return (
    <div>
      {/* <img src={src} alt="" className={style} /> */}
      <Image src={src} alt="Picture of the author" width={500} height={500} />
    </div>
  );
};

export default CommonImage;
