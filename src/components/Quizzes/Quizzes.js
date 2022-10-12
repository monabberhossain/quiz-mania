import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Quizzes.css";

const Quizzes = () => {
    const data = useLoaderData();
    const quizzes = data.data.questions;
    console.log(data);

    return (
        <div className="quizzes">
            <h3>Quiz of {data.data.name}</h3>
            {quizzes.map((quiz) => (
                <Quiz key={quiz.id} quiz={quiz}></Quiz>
            ))}
        </div>
    );
};

export default Quizzes;
