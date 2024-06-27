import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import TodoItem from '../../components/todoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);

  return (
    <motion.div layout>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoList;
