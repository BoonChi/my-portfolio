import React from 'react';
import CustomTitle from './CustomTitle.module.scss';
type Props = {
  title: string | number;
  larger?: boolean;
};

const Title: React.FC<Props> = ({ title, larger }) => {
  return (
    <div>
      <h1
        className={`${CustomTitle['title']} ${
          larger ? CustomTitle['bolderAndLarger'] : null
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
