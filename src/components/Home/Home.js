import React, { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Banner from "./Banner";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);
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
