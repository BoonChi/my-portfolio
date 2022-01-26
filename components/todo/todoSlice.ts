import { createSlice, PayloadAction, nanoid, Dispatch } from "@reduxjs/toolkit";
import { todoItemAction } from "@constant/index";
import { RootState } from "../../components/store";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [] as TodoState[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoState>) => {
        state.push(action.payload)
      },
      prepare: (desc: string) => {
        const id = nanoid()
        return {
          payload: {
            id,
            desc,
            completed: false
          }
        }
      }
    },
    removeTodo: (state, action: PayloadAction<TodoState['id']>) => {
      state.splice(state.findIndex((todo) => todo.id === action.payload), 1)
    },
    completedTodo: (state, action: PayloadAction<TodoState['id']>) => {
      const todo = state.find((todo) => todo.id === action.payload)
      todo ? todo.completed = !todo.completed : null
    },
    updateTodo: (state, action: PayloadAction<TodoState>) => {
      const todo = state.find((todo) => todo.id === action.payload.id)
      todo ? todo.desc = action.payload.desc : null
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, completedTodo, updateTodo } = todoSlice.actions

export const selectTodoList = (state: RootState) => state.todo;

export const selectActionReducer = (buttonName: string, todoItemId: TodoState['id']) => (dispatch: Dispatch<any>) => {
  switch (buttonName) {
    case todoItemAction.delete:
      return dispatch(removeTodo(todoItemId));
    case todoItemAction.completed:
      return dispatch(completedTodo(todoItemId));
    default:
      return alert("Invalid Action");
  }
}

export default todoSlice.reducer