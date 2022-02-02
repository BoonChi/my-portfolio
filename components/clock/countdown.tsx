import React from 'react';

type Props = {
  minute: number;
  second: number;
  title: string;
};
const Countdown: React.FC<Props> = ({ minute, second, title }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <p>{title}</p>
      {minute} : {second < 10 ? <span>0{second}</span> : <span>{second}</span>}
    </div>
  );
};

export default Countdown;
