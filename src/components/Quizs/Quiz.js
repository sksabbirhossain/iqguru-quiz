import React from "react";

const Quiz = ({ options }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
      {options.map((data, index) => (
        <p className="border rounded-md shadow-sm text-sky-800 py-2 px-1" key={index}>{data}</p>
      ))}
    </div>
  );
};

export default Quiz;
