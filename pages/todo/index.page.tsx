import { Dispatch } from '@reduxjs/toolkit';
import React, { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';
import {
  addTodo,
  selectActionReducer,
  selectTodoList,
  updateTodo,
} from 'components/todo/todoSlice';
import TodoStyles from './Todo.module.scss';
import TodoListItem from 'components/todo/todoListItem';
import { todoItemAction } from 'constant/index';
import TodoHeader from 'components/todo/todoHeader';
import MainLayout from 'components/layouts/MainLayout';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
  // from redux store
  const todoList = useAppSelector(selectTodoList);
  const dispatch: Dispatch<any> = useAppDispatch();

  const handleAdd = (text: string) => {
    if (!text) return;
    dispatch(addTodo(text));
    setUserInput('');
  };

  // from local state
  const [userInput, setUserInput] = useState('');
  const [modalPop, setModalPop] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({} as TodoState);
  const [editedTodo, setEditedTodo] = useState('');

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value);
  };

  const handleNewTodoChange = (event: FormEvent<HTMLInputElement>) => {
    setEditedTodo(event.currentTarget.value);
  };

  const handleButtonAction = (
    buttonName: string,
    todoItemId: TodoState['id']
  ) => {
    if (buttonName === todoItemAction.edit) {
      setModalPop(true);
      setSelectedTodo(todoList.filter(todo => todo.id === todoItemId)[0]);
      return '';
    }
    dispatch(selectActionReducer(buttonName, todoItemId));
  };

  const handleUpdate = (text: TodoState['desc']) => {
    dispatch(
      updateTodo({
        id: selectedTodo.id,
        desc: text,
        completed: selectedTodo.completed,
      })
    );
    setEditedTodo('');
    setModalPop(false);
  };

  const todoItemActionArray = [
    {
      name: todoItemAction.delete,
      icon: faTrash,
    },
    {
      name: todoItemAction.completed,
      icon: faCheckCircle,
    },
  ];

  return (
    <MainLayout>
      <div className={TodoStyles['container']}>
        <TodoHeader
          todoAppTitle={'To Do List'}
          handleAdd={text => handleAdd(text)}
          addButtonName={'Add'}
          handleChange={event => handleChange(event)}
          userInput={userInput}
        />
        <TodoListItem
          renderItem={todo => todo}
          keyExtractor={({ id }) => id}
          data={todoList}
          buttonGroup={todoItemActionArray}
          handleActions={(buttonName, todoItemId) =>
            handleButtonAction(buttonName, todoItemId)
          }
          modalPop={modalPop}
          handleModal={() => setModalPop(!modalPop)}
          selectedTodo={selectedTodo}
          updateNewTodo={text => handleUpdate(text)}
          handleNewTodoChange={handleNewTodoChange}
          editedTodo={editedTodo}
        />
      </div>
    </MainLayout>
  );
};

export default Todo;
