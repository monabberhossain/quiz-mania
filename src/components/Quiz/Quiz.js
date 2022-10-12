import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Option from "../Option/Option";
import { toast } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";
import "./Quiz.css";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;
    const splitted = question.split("<p>");
    const query = splitted[1].split("</p>");
    const quizNumber = +id.slice(-2) + 1;
    return (
        <Container className="quiz">
            <p className="query">Quiz: {query}</p>

            <div className="option">
                {options.map((option, idx) => (
                    <Option
                        key={idx}
                        id={`radio-${quizNumber}${idx}`}
                        correctAnswer={correctAnswer}
                        option={option}
                    ></Option>
                ))}
            </div>
            <div className="correct-answer">
                <Link className="eye-icon">
                    <EyeIcon
                        onClick={() => {
                            toast.success("a");
                        }}
                    />
                </Link>
            </div>
        </Container>
    );
};

export default Quiz;
