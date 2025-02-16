import { Container, Row, Col } from 'react-bootstrap';
import "./About.css";
import AnimatedButton from '../components/AnimatedButton';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
    const { t } = useTranslation('common');

    return(
        <div>
        <Container className="about-container">
            <Row className="trueprogrammer text-center">
                <Col>
                    <h5>{t('about-intro')}</h5>
                </Col>
            </Row>
           <Row xs={1} md={2} lg={2} className='align-items-center'>
                <Col className='text-center'>
                    <img src="https://rinkakuworks.com/public/images/rinkaku.png" alt="My Image" className='img-fluid mb-3' />
                </Col>
                <Col className='aboutme-text'>
                    <p><strong>{t('aboutme')}</strong><br/>
                        {t('aboutme2')}<br/>
                        {t('aboutme3')}<br/>
                        {t('aboutme4')}
                   </p>

                    <p><strong>{t('passion')}</strong><br/>
                        {t('passiontext')}<br/>
                        {t('passiontext2')}
                    </p>

                    <p>
                        <strong>{t('hobbies')}</strong>
                    </p>

                </Col>
            </Row>
            <Row className='justify-content-center mt-4'>
                <Col md={4} className='text-center'>
                    <AnimatedButton href="https://rinkakuworks.com/public/CV_RIN_DELAHAIJE.pdf" buttonText={t('buttonViewResume')} />
                </Col>
            </Row>
          

        </Container>
        
        <div className="skillset container mt-5">
            <Row xs={1} md={2} lg={3} className='align-items-center'>
                <Col className='text-center'>
                    <ul>
                        <h3>{t('tools')}</h3>
                        <li>Linux</li>
                        <li>Valgrind</li>
                        <li>GitHub (Version Control, Project Management)</li>
                        <li>Docker</li>
                        <li>cPanel</li>
                        <li>Mysql, Postgres, MongoDB</li>
                    </ul>
                </Col>   
                <Col className='text-center'>
                    <ul>
                        <h3>{t('skillset')}</h3>
                        <li>C / C++</li>
                        <li>Go</li>
                        <li>Rust</li>
                        <li>Python</li>
                        <li>Ruby</li>
                        <li>React.js / Node.js</li>
                        <li>Typescript</li>
                        <li>{t('pw')}</li>
                        <li>{t('agile')}</li>
                    </ul>
                </Col>
                <Col className='text-center'>
                    <ul><h3>Contact</h3>
                        <li><strong>Portfolio</strong></li>
                        <li>rinkakuworks.com</li> 
                        <li><strong>Email</strong></li>
                        <li>rinkakuworks@gmail.com</li>
                        <li><strong>LinkedIn</strong></li>
                        <li><a href='https://www.linkedin.com/in/rin-delahaije-9750aa138/'>@rin-delahaije</a></li>
                    </ul>

                </Col>
        </Row>
        </div>

        </div>
    );
}