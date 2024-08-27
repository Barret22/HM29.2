import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList/TodoList.js';
import TodoFooter from './components/TodoFooter/TodoFooter.js';
import './App.css';

const App = () => {
  return (
      <Provider store={store}>
        <div className="container">
          <h1>TODO</h1>
          <TodoForm />
          <TodoList />
          <TodoFooter />
        </div>
      </Provider>
  );
};

export default App;


