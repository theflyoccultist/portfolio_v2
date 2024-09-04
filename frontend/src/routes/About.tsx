import { Container, Row, Col, Button } from 'react-bootstrap';
import "./About.css";

export default function AboutPage() {
    return(
        <Container className="about-container">
            <Row xs={1} md={2} id="about" className="justify-content-center text-center">
                <Col>
                    <h2>As a Developer</h2>
                    <p> I am a true programmer.</p>
                </Col>
            </Row>
           <Row xs={2} md={4} lg={6} className='align-items-center'>
                <Col className='text-center'>
                    <img src="src/assets/rinkaku.png" alt="My Image" className='img-fluid mb-3' />
                </Col>
                <Col>
                    <p>My path to becoming a full stack developer...</p>
                    <p>My background...</p>
                    <p>My personal interests...</p>
                </Col>
            </Row>
            <Row className='justify-content-center mt-4'>
                <Col md={4} className='text-center'>
                    <Button variant='secondary' size='lg'>View Resume</Button>
                </Col>
            </Row>
        </Container>
    );
}