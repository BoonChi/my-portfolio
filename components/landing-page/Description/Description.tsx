import DescriptionStyle from './Description.module.scss';

type Props = {
  description: string[];
};

const Description = ({ description }: Props) => {
  return (
    <div className={DescriptionStyle['main']}>
      {description.map((desc, index) => (
        <p
          key={index}
          className={index % 2 === 1 ? '' : DescriptionStyle['bold-text']}
        >
          {desc}
        </p>
      ))}
    </div>
  );
};

export default Description;
