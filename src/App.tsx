import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import flowerPic from "../src/images/nature.jpeg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <Container>
                <Row className="centered-row">
                    <Col className="centered-col">
                        <h1>Cool header</h1>
                        <p>Hello World -- Izge Bayyurt</p>
                        <img
                            src={flowerPic}
                            alt="Some picture I found on my computer"
                            width={250}
                            height={250}
                        />
                        <div
                            className="Rect"
                            style={{ backgroundColor: "red" }}
                        ></div>
                    </Col>
                    <Col className="centered-col">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3!? Whoa, three whole items..</li>
                        </ul>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
            </Container>
        </div>
    );
}

export default App;
