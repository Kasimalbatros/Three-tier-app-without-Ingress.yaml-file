import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('/api/todos').then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    axios.post('/api/todos', { text }).then((res) => {
      setTodos([...todos, res.data]);
      setText('');
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>TODO List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
