import React from 'react';
import TodoList from './components/TodoList';

function App() {
  const todos = [{ id: 't1', text: 'Sample to-do 1'}];
  return (
    <div className="App">
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
