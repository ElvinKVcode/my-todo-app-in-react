import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="flex items-center justify-between p-2 border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className={`ml-2 ${todo.completed ? 'line-through text-red-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => dispatch(removeTodo(todo.id))} className="text-gray-100 bg-red-600 rounded p-1">
        Delete
      </button>
    </motion.div>
  );
};

export default TodoItem;
