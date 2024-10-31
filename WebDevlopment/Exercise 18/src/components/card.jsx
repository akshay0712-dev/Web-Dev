import React from "react";

const card = (props) => {
  return (
<div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
  <div>
    <div className="flex items-center p-4">
      <p className="text-red-500 text-lg mr-4">{props.card.userId}</p>
      <h2 className="text-xl font-semibold capitalize">{props.card.title}</h2>
    </div>
    <div className="p-4">
      <p className="text-gray-700 capitalize text-center">{props.card.body}</p>
    </div>
  </div>
  <div className="p-4 text-right">
    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
      Read More
    </button>
  </div>
</div>

  );
};

export default card;
