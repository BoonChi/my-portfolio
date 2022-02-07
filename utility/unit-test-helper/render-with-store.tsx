import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import todoReducer from 'components/todo/todoSlice';

const testStore = () => {
  return configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      todo: todoReducer,
    },
  });
};

export const renderWithStore = (component: any) => {
  const Wrapper = ({ children }: any) => (
    <Provider store={testStore()}>{children}</Provider>
  );
  return render(component, { wrapper: Wrapper });
};
