import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Topics from "../Topics/Topics";

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Topics></Topics>
        </Container>
    );
};

export default Home;
