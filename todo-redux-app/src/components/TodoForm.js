import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoReducer.js';

const TodoForm = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            dispatch(addTodo(todo));
            setTodo('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Добавить задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoForm;
