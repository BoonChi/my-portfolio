import React, { FormEvent, useState } from "react";

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
      <h1>{todoAppTitle}</h1>
      <input
        type="text"
        value={userInput}
        onChange={(event) => handleChange(event)}
        placeholder="Enter todo"
      />
      <button onClick={() => handleAdd(userInput)}>{addButtonName}</button>
    </div>
  );
};

export default TodoHeader;
