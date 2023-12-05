import { useState } from "react";
import "./scss/App.scss";
import FormInput from "./components/FormInput";
import SubmitInput from "./components/SubmitInput";
import BulletList from "./components/BulletList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const getTodo = (ele) => setTodo(ele.target.value);

  const postTodoEvent = (ele) => {
    ele.preventDefault();
    if (todo === "") {
      return;
    }

    setTodo("");
    setTodoArr(arr => [todo, ...arr]);
  }

  return (
    <div className="App">
      <div className="pad-inline">
        <header className="App__header">
          chanllenge #2 simple todo
        </header>
        <section className="section">
          <h2>simple todo ({todoArr.length})</h2>
          <form className="form-todo" onSubmit={postTodoEvent}>
            <fieldset>
              <legend>todo form</legend>
              <FormInput 
                inputType={"text"} 
                value={todo}
                onChange={getTodo}
                placeholder={"e.g) To do whatever Right Now"} 
              />
            </fieldset>
            <SubmitInput submitVal={"Add todo"} />
          </form>
          <hr />
          <BulletList itemArr={todoArr} />
        </section>
      </div>
    </div>
  );
}

export default App;
