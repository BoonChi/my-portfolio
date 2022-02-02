import React, { FormEvent } from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  handleClose: () => void;
  title: string;
  oldTodo: TodoState;
  updateNewTodo: (text: TodoState['desc']) => void;
  handleNewTodoChange: (event: FormEvent<HTMLInputElement>) => void;
  editedTodo: TodoState['desc'];
};

const TodoModal: React.FC<Props> = ({
  show,
  handleClose,
  title,
  oldTodo,
  updateNewTodo,
  editedTodo,
  handleNewTodoChange,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder={oldTodo.desc}
            value={editedTodo}
            type="text"
            onChange={event => handleNewTodoChange(event)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateNewTodo(editedTodo)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoModal;
