import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("Akshay");
  const [form, setForm] = useState({})
  const handleClick = () => {
    console.log("Button was Clicked");
  };
  const handleMouseOver = () => {
    console.log("Mouse on Red Box");
  };
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form);
    
    
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver} >
      I am a red div
     </div> */}

      <input type="email" name="email" value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  );
}

export default App;
