import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Categories = ({ category }) => {
  const { id, name, logo, total } = category;
  return (
    <div className="w-full p-2 rounded-md shadow-md ">
      <div className="flex gap-3 items-center">
        <img src={logo} alt="category" className="bg-gray-200 w-10" />
        <h5 className="text-sky-500">{name}</h5>
      </div>
      <div className="flex justify-between items-center">
        <h5 className="text-sm leading-none font-bold m-0">
          Questions: {total}
        </h5>
        <Link
          to={`/quiz/${id}`}
          className="bg-sky-500 text-white no-underline font-semibold rounded-md  sm:px-1 px-3 py-2"
        >
          Start Practice <span ><FontAwesomeIcon icon={faArrowRight} /></span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
