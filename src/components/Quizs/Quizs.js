import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Quizs = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/quiz/${quizId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setQuiz(data.data);
      });
  }, [quizId]);
  return (
    <div className="m-5 text-sky-500">
      <h3 className="text-center shadow-sm py-2">Quiz of {quiz.name}</h3>
    </div>
  );
};

export default Quizs;
