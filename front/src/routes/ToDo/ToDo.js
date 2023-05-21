import { useState } from "react";
import { MemorizedButton } from "../../components/Button";

function ToDo() {
    const [toDo, setTodo] = useState('');
    const [toDos, setTodos] = useState([]);
    const onChange = event => setTodo(event.target.value);
    const onSubmit = event => {
        event.preventDefault();

        if (toDo === '') {
            return;
        }
        setTodo(''); //reset
        setTodos(currentTodos => [toDo, ...currentTodos]);
    }
    console.log(toDos);

    return (
        <div>
            <h2>My To Dos ({toDos.length})</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor='newTodo'>New To do</label>

                <input 
                    type='text'
                    id='newTodo'
                    value={toDo}
                    onChange={onChange}
                    placeholder='Wirte Todays To do.....'
                />
                <button>Add</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo;