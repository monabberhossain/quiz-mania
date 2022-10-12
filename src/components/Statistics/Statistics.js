import React from "react";
import { Container } from "react-bootstrap";
import {
    BarChart,
    ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";
import Statistic from "../Statistic/Statistic";

const Statistics = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (
        <Container className="statistics">
            <h3>Statistics</h3>
            {data.map((topic) => (
                        <Statistic key={topic.id} topic={topic}></Statistic>
                    ))}
        </Container>
    );
};

export default Statistics;
