import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function TodoList() {
    const context = useContext(TodoContext)

    return <div>{context.todos.map(todo => (
        <div>{todo.task}</div>
    ))}</div>
}

export default TodoList;