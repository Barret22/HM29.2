import React from 'react';
import { useSelector } from 'react-redux';

const TodoFooter = () => {
    const totalTodos = useSelector((state) => state.todos.length);

    return (
        <div className="todo-footer">
            Всего задач: {totalTodos}
        </div>
    );
};

export default TodoFooter;
