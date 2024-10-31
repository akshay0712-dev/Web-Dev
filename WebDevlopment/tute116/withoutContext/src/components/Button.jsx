import React from "react";
import Component1 from "./Component1";

const Button = ({count}) => {
  return (
    <div className="my-3 py-3 px-2  border border-white rounded-lg text-xl">
      <span>
        <Component1 count={count} />
      </span>
      I am a Button
    </div>
  );
};

export default Button;
