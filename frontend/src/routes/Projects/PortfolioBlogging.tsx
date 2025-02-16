import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../../components/AnimatedButton";
import { Divider } from "../../components/Divider";
import { CodeSample, CodeSample2 } from './PortfolioBloggingCodeExample'
import './PortfolioBlogging.css'
import { useTranslation } from 'react-i18next';

export default function PortfolioBlogging() {
    const { t } = useTranslation('projects');
    return (
        <Container id="evo11" className="portfolioblogging-container">
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h2>{t("b.1")}</h2>
            </div>

            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h5>{t("b.2")}</h5>
                <h5  style={{ fontWeight: "bold" }}>{t("b.3")}</h5>
            </div>

            <div className="justify-content-center">
                <Row className="text-center">
                    <Col>
                        <img src="https://www.rinkakuworks.com/public/images/portfolio-blogging/blogging-platform.webp" className="shrink" alt="blogging platform app" loading="lazy"/>
                    </Col>
                </Row>
            </div>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    {t("b.4")}
                </Col>
                <Col></Col>
                <Col>
                    <h5><strong>{t("b.5")}</strong></h5>
                </Col>
                <Col>
                    {t("b.6")}
                </Col>
                <Col>
                    {t("b.7")}
                </Col>
                <Col>
                    {t("b.8")}
                </Col>
                <Col>
                    {t("b.9")}
                </Col>
                <Col>
                    {t("b.10")}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t("b.11")}</strong></h5>
                </Col>
                <Col>
                    {t("b.12")}
                </Col>
                <Col>
                    {t("b.13")}
                </Col>
                <Col>
                    {t("b.14")}
                </Col>
                <Col>
                    {t("b.15")}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t("b.16")}</strong></h5>
                </Col>
                <Col>
                    {t("b.17")}
                </Col>
                <Col>
                    {t("b.18")}
                </Col>
                <Col>
                    {t("b.19")}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t("b.20")}</strong></h5>
                </Col>
                <Col>
                    {t("b.21")}
                </Col>
                <Col className="text-center">
                    <img src="https://www.rinkakuworks.com/public/images/portfolio-blogging/diagramme-architecture.webp" alt="diagramme d'architecture blogging platform" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t("b.22")}</strong></h5>
                </Col>
                <Col>
                    <ul>
                        <li>{t("b.23")}</li>
                        <li>{t("b.24")}</li>
                        <li>{t("b.25")}</li>
                        <li>{t("b.26")}</li>
                    </ul>                     
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t("b.27")}</strong></h5>                
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/portfolio-blogging/screenshot1.webp" alt="screencap main platform page" loading="lazy"/> 
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/portfolio-blogging/screenshot2.webp" alt="screencap post edition" loading="lazy"/> 
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t("b.28")}</strong></h5> 
                </Col>
                <Col>
                    {t("b.29")}
                </Col>
                <Col>
                    <CodeSample />
                </Col>
                <Col></Col>
                <Col>
                    {t("b.30")}
                </Col>
                <Col>
                    <CodeSample2 />
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t("b.31")}</strong></h5> 
                </Col>
                <Col>
                    {t("b.32")}
                </Col>
                <Col>
                    {t("b.33")}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t("b.34")}</strong></h5> 
                </Col>
                <Col>
                    {t("b.35")}
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