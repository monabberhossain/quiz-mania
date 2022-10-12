import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <Navbar expand="md lg" bg="dark" variant="dark">
                <Container className="nav-container">
                    <Navbar.Brand>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <h2 className="brand-name">Quiz Mania</h2>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="nav-list"
                            style={{ height: "auto" }}
                            navbarScroll
                        >
                            <Link className="nav-item" to="/home">
                                Home
                            </Link>
                            <Link className="nav-item" to="/topics">
                                Topics
                            </Link>
                            <Link className="nav-item" to="/statistics">
                                Statistics
                            </Link>
                            <Link className="nav-item" to="/blog">
                                Blog
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
