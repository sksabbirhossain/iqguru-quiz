import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quiz from "./Quiz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const answer = (ans) => {
    toast.success(`Correct answer:- ${ans}`);
  };

  return (
    <div className="m-5 text-sky-500 ">
      <h3 className="text-center shadow-sm py-2">Quiz of {quizName.name}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 ">
        {quiz.map((data) => {
          return (
            <div key={data.id} className="shadow-md rounded-md px-2 py-1">
              <div className="flex justify-between">
                <p>{data.question} </p>{" "}
                <p
                  className="ml-4 cursor-pointer"
                  onClick={() => answer(data.correctAnswer)}
                >
                  <span>
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                </p>
              </div>
              <Quiz options={data.options} answer={data.correctAnswer} />
            </div>
          );
        })}
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Quizs;
