import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
    const data = useLoaderData();
    const quizzes = data.data.questions;

    return (
        <div>
            <h3>Quizzes: </h3>
            {quizzes.map((quiz) => (
                <Quiz key={quiz.id} quiz={quiz}></Quiz>
            ))}
        </div>
    );
};

export default Quizzes;
