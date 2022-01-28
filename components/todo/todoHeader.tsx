import Link from "next/link";
import React, { FormEvent } from "react";
import CustomButton from "components/common/button/CustomButton";
import Title from "components/common/title/CustomTitle";
import TodoHeaderStyle from "./TodoHeader.module.scss";

type Props = {
  todoAppTitle: string;
  handleAdd: (text: string) => void;
  addButtonName: string;
  userInput: string;
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
};
const TodoHeader: React.FC<Props> = ({
  todoAppTitle,
  handleAdd,
  addButtonName,
  userInput,
  handleChange,
}) => {
  return (
    <div>
      <Title title={todoAppTitle}></Title>
      <div className={TodoHeaderStyle["inline-control-button"]}>
        <input
          type="text"
          value={userInput}
          onChange={(event) => handleChange(event)}
          placeholder="Enter todo"
          style={{ marginRight: "20px", borderRadius: "4px" }}
        />
        <a>
          <CustomButton
            buttonVariant="success"
            buttonName={addButtonName}
            buttonHandler={() => handleAdd(userInput)}
          />
        </a>
        <Link href={"/"} passHref>
          <a>
            <CustomButton buttonName={"Back"}></CustomButton>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TodoHeader;
