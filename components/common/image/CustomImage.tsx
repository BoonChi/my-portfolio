import Image from 'next/image';

type Prop = {
  src: string;
};
const CommonImage = ({ src }: Prop) => {
  return (
    <div>
      <Image src={src} alt="Picture of the author" width={500} height={500} />
    </div>
  );
};

export default CommonImage;
