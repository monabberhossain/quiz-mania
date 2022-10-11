import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <Container className="banner">
                <Row className="banner-content">
                    <Col sm={12} md={6}>
                        <h3>Advantages of daily quizzes!</h3>
                        <hr />
                        <p>
                            Students tend to actually read the material.
                            Students show up for class on time since the quiz
                            always comes first. Students are placed in the right
                            attitude for learning. Students feel more confident
                            to discuss the material. Students raise their grades
                            by simply reading the material. The start of class
                            is signaled. The quiz provides a good lead-in for
                            either a lecture or discussion of the material.
                            Students grow curious about the answers. At the end
                            of class (when the suspense is killing them), I
                            usually answer any quiz question that didn't
                            naturally pop up during class.
                        </p>
                    </Col>
                    <Col sm={12} md={6}>
                        <img
                            className="img-fluid"
                            src={require("../../assets/images/banner.jpg")}
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
