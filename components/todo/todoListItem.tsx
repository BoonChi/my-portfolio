import CustomButton from "components/common/button/CustomButton";
import React, { FormEvent } from "react";
import TodoModal from "./todoModal";
import TodoListItemStyle from "./TodoListItem.module.scss";

interface Props<T> {
  renderItem: (item: T) => T;
  keyExtractor: (item: T) => string;
  data: T[];
  buttonGroup: Array<{ name: string; color: string }>;
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
  return (
    <div>
      <ul>
        {data.map((each) => (
          <li
            key={keyExtractor(each)}
            className={TodoListItemStyle["inline-control-button"]}
          >
            <h5
              className={
                each.completed ? TodoListItemStyle["completedTodo"] : undefined
              }
            >
              {renderItem(each.desc)}
            </h5>
            {buttonGroup.map((button) => (
              <a key={each.id}>
                <CustomButton
                  buttonVariant={button.color}
                  buttonHandler={() =>
                    handleActions(button.name, keyExtractor(each))
                  }
                  buttonName={
                    each.completed && button.name === "Completed"
                      ? "Incomplete"
                      : button.name
                  }
                >
                  {button}
                </CustomButton>
              </a>
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
