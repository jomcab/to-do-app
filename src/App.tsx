import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const todos = [{ id: 't1', text: 'Sample to-do 1'}];

  const todoAddHandler = (text: string) => {
    console.log(text);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
