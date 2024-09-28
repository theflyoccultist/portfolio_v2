import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../components/AnimatedButton";
import './Evo11.css'

export default function Evo11() {
    return (
        <Container id="evo11" className="evo11-container">
            <div className="text-center">
                <h2>Evo 11</h2>
            </div>
            <div className="text-center">
                <h5>Wellness app for gender transition</h5>
            </div>

            <div className="justify-content-center">
                <Row className="text-center">
                    <Col>
                        <img src="http://rinkakuworks.com/public/images/evo11.png" alt="evo11 transition app" />
                    </Col>
                    <Col>
                        <AnimatedButton href="#" buttonText="View Live Demo" />
                    </Col>
                </Row>

            </div>

            <Row xs={1} md={1} lg={1} className='align-items-center'>
                <Col className='text-center'>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>MySQL</li>
                    </ul>
                </Col>
                <Col className='text-center'>
                <h2>Key Features</h2>
                <ul>
                    <li>Feature 1: Description</li>
                    <li>Feature 2: Description</li>
                    <li>Feature 3: Description</li>
                </ul>
                </Col>
            </Row>
            <Row className='justify-content-center mt-4'>
                <Col md={4} className='text-center'>
                    <AnimatedButton href="#" buttonText="Read Full Study Case" />
                </Col>            
            </Row>
            <Row className='justify-content-center mt-4'>
                <Col md={4} className='text-center'>
                    <AnimatedButton href="/contact" buttonText="Contact Me" />
                </Col>            
            </Row>
        </Container>
    )
}