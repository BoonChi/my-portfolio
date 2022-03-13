import React from 'react';

type Props = {
  description: string;
};

const Description: React.FC<Props> = ({ description }) => {
  const array = description.split(' ');
  return (
    <div>
      {array.map((desc, index) => (
        <span key={index}>{desc + '  '}</span>
      ))}
    </div>
  );
};

export default Description;
