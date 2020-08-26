import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { TodosContext } from './contexts/todos.context';

import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList() {
  const todos = useContext(TodosContext);
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <Todo {...todo} key={todo.id} />
            {index < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
