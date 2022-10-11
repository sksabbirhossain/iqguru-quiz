import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Quizs from "./components/Quizs/Quizs";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizId" element={<Quizs />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
