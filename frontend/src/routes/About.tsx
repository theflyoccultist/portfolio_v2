import { Container, Row, Col, Button } from 'react-bootstrap';
import "./About.css";

export default function AboutPage() {
    return(
        <div>
        <Container className="about-container">
            <Row xs={1} md={2} className="justify-content-center text-center">
                <Col>
                    <h2>As a Developer</h2>
                </Col>
            </Row>
            <Row className="trueprogrammer text-center">
                <Col>
                    <h5> I am a true programmer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec fringilla purus ac scelerisque porttitor.  Aliquam ullamcorper nulla tellus, 
                        id congue massa dignissim in. </h5>
                </Col>
            </Row>
           <Row xs={2} md={2} lg={2} className='align-items-center'>
                <Col className='text-center'>
                    <img src="http://fali8410.odns.fr/public/images/rinkaku.png" alt="My Image" className='img-fluid mb-3' />
                </Col>
                <Col className='aboutme-text'>
                    <p><strong>My path to becoming a full stack developer...</strong>
                    Cras tristique ante cursus maximus elementum. Fusce luctus, sem viverra luctus cursus, 
                    dui augue dapibus mi, at mollis sem velit eu ex. Curabitur molestie, elit in posuere pulvinar, 
                    orci enim ultrices velit, ac porttitor lectus purus interdum magna. Sed consectetur 
                    iaculis efficitur. In at turpis fringilla, scelerisque leo quis, gravida ipsum. Sed blandit dapibus 
                    orci vitae tincidunt. Morbi in iaculis leo. Praesent vestibulum ullamcorper est non tempor. Integer 
                    luctus nunc eu lacus rhoncus, ultricies aliquet arcu feugiat. </p>
                    <p><strong>My background...</strong>
                    Phasellus cursus tempor feugiat. Ut a justo sit amet tellus lacinia rhoncus. Aliquam erat volutpat. 
                    Aliquam faucibus luctus orci at faucibus. Donec nisl lectus, elementum et augue eget, ornare suscipit nunc. 
                    Phasellus nisi mauris, porta in laoreet blandit, faucibus vitae eros. </p>
                    <p><strong>My personal interests...</strong>
                    In mollis nec nisi et ullamcorper. Vivamus rhoncus aliquet tortor, sit amet ultricies purus feugiat non. 
                    Sed iaculis purus eget dolor lacinia, a ultrices nulla ullamcorper. Ut et leo nec dui tempus gravida. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                </Col>
            </Row>
            <Row className='justify-content-center mt-4'>
                <Col md={4} className='text-center'>
                    <Button variant='secondary' size='lg'>View Resume</Button>
                </Col>
            </Row>
          

        </Container>
        
        <div className="skillset container mt-5">
            <Row xs={1} md={2} lg={3} className='align-items-center'>
                <Col className='text-center'>
                    <ul><h3>Outils:</h3>
                        <li>GitHub (Version Control, Project Management)</li>
                        <li>Docker</li>
                        <li>cPanel</li>
                        <li>Mysql, MongoDB</li>
                        <li>Figma</li>
                        <li>Trello</li>
                    </ul>
                </Col>   
                <Col className='text-center'>
                    <ul><h3>Compétences:</h3>
                        <li>React.js</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Node.js</li>
                        <li>Prototypages et Wireframes</li>
                        <li>Principes du travail agile</li>
                    </ul>
                </Col>
                <Col className='text-center'>
                    <ul><h3>Contact:</h3>
                        <li><strong>Portfolio</strong></li>
                        <li>rinkakuworks.com</li> 
                        <li><strong>Email</strong></li>
                        <li>y.delahaije@gmail.com</li>
                        <li><strong>LinkedIn</strong></li>
                        <li><a href='https://www.linkedin.com/in/rin-delahaije-9750aa138/'>@rin-delahaije</a></li>
                    </ul>

                </Col>
        </Row>
        </div>

        </div>
    );
}