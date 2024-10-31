import React, { useContext } from "react";
import Component1 from "./Component1";
import { counterContext } from "../context/contect";

const Button = () => {
  const setCount = useContext(counterContext).setCount;
  return (
    <div className="my-3 text-xl">
      <button onClick={() => setCount((count) => count + 1)}>
        <span>
          <Component1 />
        </span>
        I am a Button
      </button>
    </div>
  );
};

export default Button;
