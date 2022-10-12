import React from "react";
import { Container } from "react-bootstrap";
import Option from "../Option/Option";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;
    const splitted = question.split("<p>");
    const query = splitted[1].split("</p>");
    const quizNumber = +id.slice(-1) + 1;
    return (
        <Container className="quiz">
            <p className="query">
                Quiz:{quizNumber} {query}
            </p>

            <div className="option">
                {options.map((option, idx) => (
                    <Option
                        key={idx}
                        id={`radio-${quizNumber}${idx}`}
                        option={option}
                    ></Option>
                ))}
            </div>
            <div className="correct-answer">{correctAnswer}</div>
        </Container>
    );
};

export default Quiz;
