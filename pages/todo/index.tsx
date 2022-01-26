import { Dispatch } from '@reduxjs/toolkit'
import React, { FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../components/hooks'
import {
  addTodo,
  selectActionReducer,
  selectTodoList,
  updateTodo,
} from 'components/todo/todoSlice'
import styles from '@styles/Todo.module.scss'
import TodoListItem from 'components/todo/todoListItem'
import { todoItemAction, todoItemActionArray } from '@constant/index'
import TodoHeader from '../../components/todo/todoHeader'

const Todo = () => {
  // from redux store
  const todoList = useAppSelector(selectTodoList)
  const dispatch: Dispatch<any> = useAppDispatch()

  const handleAdd = (text: string) => {
    if (!text) return
    dispatch(addTodo(text))
    setUserInput('')
  }

  // from local state
  const [userInput, setUserInput] = useState('')
  const [modalPop, setModalPop] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState({} as TodoState)
  const [editedTodo, setEditedTodo] = useState('')

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value)
  }

  const handleNewTodoChange = (event: FormEvent<HTMLInputElement>) => {
    setEditedTodo(event.currentTarget.value)
  }

  const handleButtonAction = (
    buttonName: string,
    todoItemId: TodoState['id']
  ) => {
    if (buttonName === todoItemAction.edit) {
      setModalPop(true)
      setSelectedTodo(todoList.filter((todo) => todo.id === todoItemId)[0])
      return ''
    }
    dispatch(selectActionReducer(buttonName, todoItemId))
  }

  const handleUpdate = (text: TodoState['desc']) => {
    dispatch(
      updateTodo({
        id: selectedTodo.id,
        desc: text,
        completed: selectedTodo.completed,
      })
    )
    setEditedTodo('')
    setModalPop(false)
  }

  return (
    <div className={styles.container}>
      <TodoHeader
        todoAppTitle={'To Do List'}
        handleAdd={(text) => handleAdd(text)}
        addButtonName={'Add Todo'}
        handleChange={(event) => handleChange(event)}
        userInput={userInput}
      />
      <TodoListItem
        renderItem={({ desc }) => desc}
        keyExtractor={({ id }) => id}
        data={todoList}
        buttonGroup={todoItemActionArray}
        handleActions={(buttonName, todoItemId) =>
          handleButtonAction(buttonName, todoItemId)
        }
        modalPop={modalPop}
        handleModal={() => setModalPop(!modalPop)}
        selectedTodo={selectedTodo}
        updateNewTodo={(text) => handleUpdate(text)}
        handleNewTodoChange={handleNewTodoChange}
        editedTodo={editedTodo}
      />
    </div>
  )
}

export default Todo
