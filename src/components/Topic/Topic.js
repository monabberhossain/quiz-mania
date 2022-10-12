import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <Container className="topic">
            <img className="topic-img" src={logo} alt="" />
            <div className="topic-info">
                <div>
                    <h4>{name}</h4>
                </div>
                <p className="mt-2">
                    Quizzes: <strong>{total}</strong>
                </p>
                <Link to={`/topics/${id}`}>Start Quiz</Link>
            </div>
        </Container>
    );
};

export default Topic;
