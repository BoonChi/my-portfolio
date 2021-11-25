import React, { FormEvent } from "react";
import TodoModal from "./todoModal";

interface Props<T> {
  renderItem: (item: T) => string;
  keyExtractor: (item: T) => string;
  data: T[];
  buttonGroup: string[];
  handleActions: (buttonName: string, todoItemId: TodoState["id"]) => void;
  modalPop: boolean;
  handleModal: () => void;
  selectedTodo: TodoState;
  handleNewTodoChange: (event: FormEvent<HTMLInputElement>) => void;
  updateNewTodo: (text: TodoState["desc"]) => void;
  editedTodo: TodoState["desc"];
}

const todoListItem: React.FC<Props<{ [key: string]: any }>> = ({
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
}) => {
  // local state
  return (
    <div>
      <ul>
        {data.map((each) => (
          <li key={keyExtractor(each)}>
            {renderItem(each)}
            {buttonGroup.map((button, index) => (
              <button
                key={index}
                onClick={() => handleActions(button, keyExtractor(each))}
              >
                {button}
              </button>
            ))}
          </li>
        ))}
      </ul>
      <TodoModal
        show={modalPop}
        handleClose={handleModal}
        title={"Edit"}
        oldTodo={selectedTodo}
        handleNewTodoChange={(event) => handleNewTodoChange(event)}
        updateNewTodo={(text) => updateNewTodo(text)}
        editedTodo={editedTodo}
      />
    </div>
  );
};

export default todoListItem;
