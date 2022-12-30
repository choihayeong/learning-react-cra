import { useState, useEffect } from 'react';
import Button from './components/Button';
import styles from './assets/scss/App.module.scss';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const setTodo = (event) => setNewTodo(event.target.value);
  const submitEvent = (event) => {
    event.preventDefault();
    if (newTodo === '') {
      return;
    }
    setNewTodo('');
    setTodoItems(currentArr => [newTodo, ...currentArr]);
  }

  return (
    <div>
      <h1>React To Do ({todoItems.length})</h1>
      <form onSubmit={submitEvent}>
        <input 
          onChange={setTodo} 
          value={newTodo} 
          type='text' 
          placeholder='Write your today work' 
        />
        <button>Add New To Do</button>
      </form>
      <hr />
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* <Button text={"Continue"} onClick={onClick} /> */}
    </div>
  );
}

export default App;
