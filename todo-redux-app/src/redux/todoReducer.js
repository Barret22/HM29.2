const initialState = {
    todos: []
};

const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};

export default todoReducer;
