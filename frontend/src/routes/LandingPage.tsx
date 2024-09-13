import { Col, Container, Row } from "react-bootstrap";
import PortfolioPage from "./PortfolioPage";
import './LandingPage.css';
import AnimatedButton from "../components/AnimatedButton";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
    const { t } = useTranslation();

    return(
        <div>
            <Container className="landing-container">
                <Row xs={1} md={2} className="text-left">
                    <Col>
                        <h1>{t('welcome')}</h1>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={2} className='align-items-center'>
                    <Col xs={12} md={8} lg={9}>
                        <p>{t('welcome2')}</p>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <img src="http://rinkakuworks.com/public/images/rinkaku.png" alt="Rin" className="img-fluid mb-4"/><br/>                    
                    </Col> 
                </Row>
                <Row className='justify-content-center mt-4'>
                    <Col md={4} className='text-center'>
                        <AnimatedButton href="#work" buttonText={t('buttonViewWorks')} />
                    </Col>
                </Row>
            </Container>

            <div id="work" className="container mt-5">
                <PortfolioPage />            
            </div>
        </div>
    );
}