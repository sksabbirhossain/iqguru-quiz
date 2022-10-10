import React from "react";

const Home = () => {
  return (
    <div className=" relative w-full sm:h-96 h-screen   overflow-hidden">
      <img
        src="https://tslconsulting.in/wp-content/uploads/2018/12/TSL-Blog-Page-Banner.jpg"
        alt="banner"
        className=" w-full h-full object-cover absolute"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 "></div>
      <div className=" absolute top-40 sm:top-40 px-10 text-center sm:text-start  text-blue-100">
        <h1>Learn New Skills, Advance Your Career</h1>
        <p>
          IQGuru has a first-rate academic program, a fully qualified. With over
          50 years of experience teaching English around the world, we know that
          no two learners are the same. That’s why we tailor our course to your
          learning level, motivations, and lifestyle. Set your level!
              </p>
              <button className="bg-sky-600 font-bold hover:bg-green-600 hover:text-slate-200 px-20 py-2 rounded-md">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
