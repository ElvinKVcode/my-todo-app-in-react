import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import AddTodo from '../src/components/addToto';
import TodoList from '../src/features/todos/todoList';

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-xl mx-auto mt-10 p-5 bg-gray-500 rounded shadow">
        <h1 className="text-2xl text-red-800 font-bold mb-4 flex justify-center">Todo List Redux Toolkit</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
