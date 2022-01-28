import React from "react";
import CustomTitle from "./CustomTitle.module.scss";
type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1 className={CustomTitle["title"]}>{title}</h1>
    </div>
  );
};

export default Title;
