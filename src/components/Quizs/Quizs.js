import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quiz from "./Quiz";

const Quizs = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [quizName, setQuizName] = useState([]);

  // fetch quiz data
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/quiz/${quizId}`)
      .then((res) => res.json())
      .then((data) => {
        setQuizName(data.data);
        setQuiz(data.data.questions);
      });
  }, [quizId]);

  return (
    <div className="m-5 text-sky-500 ">
      <h3 className="text-center shadow-sm py-2">Quiz of {quizName.name}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 ">
        {quiz.map((data) => {
          return (
            <div key={data.id} className="shadow-md rounded-md px-2 py-1">
              <p>{data.question}</p>
              <Quiz options={data.options} answer={data.correctAnswer} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quizs;
