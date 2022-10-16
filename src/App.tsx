import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const todos = [{ id: 't1', text: 'Sample to-do 1'}];
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
