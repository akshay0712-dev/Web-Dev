import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(1);
  const [todos, setTodos] = useState([
    {
      title: "Homework",
      desc: "Do your maths homework",
    },
    {
      title: "Project",
      desc: "Do your science Project",
    },
    {
      title: "drawing",
      desc: "Do your drawing work",
    },
    {
      title: "Practice",
      desc: "Practice for your basketball match",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn && <button>shown showbtn is true</button>} */}
      {/* {!showbtn && <button>I will shown when showbtn is false</button>} */}
      {showbtn ? (
        <button>I will shown when showbtn is true</button>
      ) : (
        <button>I will shown when showbtn is false</button>
      )}

      {todos.map((todo) => {
        return (
          <><div className="border my-4 py-3 rounded-sm">

            <Todo key={todo.title} todo={todo} />
          </div>
          </>
        );
      })}

      <div className="card  ">
        <button onClick={() => setshowbtn(!showbtn)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
