import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar expand="md lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Quiz Mania</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav style={{ height: "auto" }} navbarScroll>
                            <Nav.Link
                                className={({ isActive }) =>
                                    isActive ? "active" : undefined
                                }
                                to="/"
                            ></Nav.Link>
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link to="/topics">Topics</Nav.Link>
                            <Nav.Link href="/statistics">Statistics</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
