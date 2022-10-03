import type { FormEvent } from 'react';
import TodoModal from './todoModal';
import TodoListItemStyle from './TodoListItem.module.scss';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props<T> {
  renderItem: (item: T) => T;
  keyExtractor: (item: T) => string;
  data: T[];
  buttonGroup: Array<{ name: string; icon: IconDefinition }>;
  handleActions: (buttonName: string, todoItemId: TodoState['id']) => void;
  modalPop: boolean;
  handleModal: () => void;
  selectedTodo: TodoState;
  handleNewTodoChange: (event: FormEvent<HTMLInputElement>) => void;
  updateNewTodo: (text: TodoState['desc']) => void;
  editedTodo: TodoState['desc'];
}

const todoListItem = ({
  renderItem,
  keyExtractor,
  data,
  buttonGroup,
  handleActions,
  modalPop,
  handleModal,
  selectedTodo,
  handleNewTodoChange,
  updateNewTodo,
  editedTodo,
}: Props<{ [key: string]: any }>) => {
  return (
    <div className={TodoListItemStyle['todo-bottom']}>
      <ul>
        {data.map((each, index) => (
          <li
            key={keyExtractor(each)}
            className={TodoListItemStyle['todo-item']}
          >
            <h5
              className={
                each.completed ? TodoListItemStyle['completedTodo'] : undefined
              }
            >
              {index + 1}. {renderItem(each.desc)}
            </h5>
            {buttonGroup.map((button, index) => (
              <FontAwesomeIcon
                icon={button.icon}
                onClick={() => handleActions(button.name, keyExtractor(each))}
                key={index}
              ></FontAwesomeIcon>
            ))}
          </li>
        ))}
      </ul>
      <TodoModal
        show={modalPop}
        handleClose={handleModal}
        title={'Edit'}
        oldTodo={selectedTodo}
        handleNewTodoChange={event => handleNewTodoChange(event)}
        updateNewTodo={text => updateNewTodo(text)}
        editedTodo={editedTodo}
      />
    </div>
  );
};

export default todoListItem;
