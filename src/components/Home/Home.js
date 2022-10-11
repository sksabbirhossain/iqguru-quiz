import React, { useContext } from "react";
import CategoryContext from "../../context/CategoryContext";
import Categories from "../Categories/Categories";
import Banner from "./Banner";

const Home = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <>
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
        {categories.map((category) => (
          <Categories key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default Home;
