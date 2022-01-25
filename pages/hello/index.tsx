import React from "react";
interface IProps {
  name?: string;
}
const Hello: React.FunctionComponent<IProps> = ({ name }) => {
  return (
    <div>
      <div>
        <h1>Hi</h1>
        <p>
          {name} ? {name} : stranger
        </p>
      </div>
    </div>
  );
};

export default Hello;
