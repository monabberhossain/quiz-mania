import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Topics.css";

const Topics = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (
        <Container>
            <h3 className="my-5">Quiz Topics</h3>
            <div className="topics">
                {data.map((topic) => (
                    <Topic key={topic.id} topic={topic}></Topic>
                ))}
            </div>
        </Container>
    );
};

export default Topics;
