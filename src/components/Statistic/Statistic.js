import React from "react";
import { Container } from "react-bootstrap";
import {
    BarChart,
    ResponsiveContainer,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Statistic = ({ topic }) => {
    const { name, total } = topic;
    return (
        <Container>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={topic}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={name} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={total} fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
};

export default Statistic;
