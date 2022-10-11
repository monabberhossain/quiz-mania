import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Topic.css";

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
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
                <Button>Start Quiz</Button>
            </div>
        </Container>

        // <div class="row row-cols-1 row-cols-md-2 g-4">
        //     <div class="col">
        //         <div class="topic card">
        //             <img
        //                 src={logo}
        //                 class="card-img-top topic-img img-fluid"
        //                 alt="..."
        //             />
        //             <div class="card-body">
        //                 <h5 class="card-title">{name}</h5>
        //                 <p class="card-text">{total}</p>
        //                 <Button>Start Quiz</Button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Topic;
