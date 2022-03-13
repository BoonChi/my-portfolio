import React, { FormEvent } from 'react';
import Title from 'components/common/title/CustomTitle';
import TodoHeaderStyle from './TodoHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
  userInput,
  handleChange,
}) => {
  return (
    <div className={TodoHeaderStyle['todo-top']}>
      <Title title={todoAppTitle}></Title>
      <div className={TodoHeaderStyle['todo']}>
        <input
          type="text"
          value={userInput}
          onChange={event => handleChange(event)}
          placeholder="Enter todo"
        />
        <FontAwesomeIcon
          icon={faPlusCircle}
          onClick={() => handleAdd(userInput)}
          style={{ fontSize: '2rem' }}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default TodoHeader;
