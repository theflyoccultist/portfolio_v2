import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="bg-body-tertiary py-4">
            <Container>
                <Row>
                    <Col className="text-center">
                        <a href="https://github.com/theflyoccultist" className='text-dark me-3'>GitHub</a>
                        <a href="https://www.linkedin.com/in/rin-delahaije-9750aa138/" className='text-dark'>LinkedIn</a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-md-left">
                        <p>&copy; 2024 Rin. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}