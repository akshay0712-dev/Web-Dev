import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos = JSON.parse(todoString);
      setTodos(Array.isArray(todos) ? todos : []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (editId) {
      const updatedTodos = todos.map((item) =>
        item.id === editId ? { ...item, todo } : item
      );
      setTodos(updatedTodos);
      setTodo("");
      setEditId(null);
    } else {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleCheckbox = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const itemToEdit = todos.find((item) => item.id === id);
    setTodo(itemToEdit.todo);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <h2 className="text-lg font-bold my-5">Add a Todo</h2>
        <div className="addTodos grid grid-cols-[70%_28%] md:grid-cols-[80%_10%] gap-[2%] md:gap-[10%]">
          <input
            type="text"
            onChange={handleChange}
            onKeyPress={handleKeyDown}
            value={todo}
            className="rounded-md px-3"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm font-bold cursor-pointer text-white mx-6 disabled:bg-violet-900"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>
        <h2 className="text-lg font-bold my-5">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="text-center text-xl font-semibold font-mono capitalize">
              Add Todo to see....
            </div>
          )}
          {todos.map((item) => (
            <div
              key={item.id}
              className="todo grid grid-cols-[5%_55%_20%_20%] md:grid-cols-[5%_75%_10%_10%] my-5 pb-8 border-b-[0.5px] border-[rgba(45,45,45,0.22)]"
            >
              <div
                onClick={() => handleCheckbox(item.id)}
                type="checkbox"
                checked={item.isCompleted}
                name={item.id}
                className={`p-2 py-1 rounded-md mx-3  material-symbols-outlined cursor-pointer ${
                  item.isCompleted ? "text-green-600" : "text-[rgb(233,100,251)] "}`}
              > {item.isCompleted ? "check_circle" : "pending"}</div>
              <div
                className={`capitalize ${
                  item.isCompleted ? "line-through " : ""
                }`}
              >
                {item.todo}
              </div>
              <button
                onClick={() => handleEdit(item.id)}
                className="h-7 bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md  cursor-pointer text-white mx-3 material-symbols-outlined"
              >
               edit_note
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="h-7 bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md  cursor-pointer text-white mx-3 material-symbols-outlined"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
