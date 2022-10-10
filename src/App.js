import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </>
  );
}

export default App;
