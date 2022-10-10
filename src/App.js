import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Quizs from "./components/Quizs/Quizs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/quiz/:quizId" element={<Quizs/>} />
      </Routes>
    </>
  );
}

export default App;
