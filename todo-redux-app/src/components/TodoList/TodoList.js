import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div>
            <h2>TODOs</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
