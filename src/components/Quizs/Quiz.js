import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({ options, answer }) => {
  const myfun = (data) => {
    if (answer === data) {
      toast.success("Correct Answer");
    } else {
      toast.warning("Wrong Answer");
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
      {options.map((data, index) => (
        <p
          onClick={() => myfun(data)}
          className="border rounded-md shadow-sm text-sky-800 py-2 px-1 cursor-pointer"
          key={index}
        >
          {data}
        </p>
      ))}
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Quiz;
