import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../../components/AnimatedButton";
import { Divider } from "../../components/Divider";
import './SimplePlan.css';
import { useTranslation } from 'react-i18next';

export default function SimplePlan() {
    const { t } = useTranslation('projects');
    return (
        <Container id="simpleplan" className="simpleplan-container">
            <div className="text-center" style={{ paddingBottom: '30px' }}>
                <h2>{t('simpleplan.project2')}</h2>
            </div>
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h5>{t('simpleplan.subtitle2')}</h5>
                <h5  style={{ fontWeight: "bold" }}>{t('simpleplan.projecttype2')}</h5>
            </div>
            
            <div className="justify-content-center">
                <Row className="text-center">
                    <Col>
                        <img src="https://rinkakuworks.com/public/images/simpleplan/simpleplan.webp" className="shrink" alt="evo11 transition app" loading="lazy"/>
                    </Col>
                </Row>
            </div>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <strong>{t('simpleplan.theproject2')}</strong>{t('simpleplan.theproject2.1')}
                </Col>
                <Col>
                    <strong>{t('simpleplan.theproblematic2')}</strong>{t('simpleplan.theproblematic2.1')}
                </Col>
                <Col>
                    <strong>{t('simpleplan.theobjective2')}</strong>{t('simpleplan.theobjective2.1')}
                </Col>
                <Col></Col>
                <Col>
                    <strong>{t('simpleplan.therole2')}</strong>{t('simpleplan.therole2.1')}
                </Col>
                <Col>
                    <strong>{t('simpleplan.responsabilities2')}</strong>{t('simpleplan.responsabilities2.1')}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t('simpleplan.userresearch2')}</strong></h5>
                </Col>
                <Col>
                    <u>{t('simpleplan.userresearch2.1')}</u>
                </Col>
                <Col>
                    <ul>
                        <li>{t('simpleplan.q2.1')}</li>
                        <li>{t('simpleplan.q2.2')}</li>
                        <li>{t('simpleplan.q2.3')}</li>
                        <li>{t('simpleplan.q2.4')}</li>
                        <li>{t('simpleplan.q2.5')}</li>
                    </ul>
                </Col>
                <Col></Col>
                
                <Col>
                    <u>{t('simpleplan.results2')}</u>
                </Col>
                <Col>
                    <ul>
                        <li>{t('simpleplan.r2.1')}</li>
                        <li>{t('simpleplan.r2.2')}</li>
                        <li>{t('simpleplan.r2.3')}</li>
                        <li>{t('simpleplan.r2.4')}</li>
                    </ul>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t('simpleplan.userpersona2')}</strong></h5>
                </Col>
                <Col>
                    {t('simpleplan.userpersona2.1')}
                </Col>
                <Col>
                    {t('simpleplan.userpersona2.2')}
                </Col>
                <Col>
                    {t('simpleplan.userpersona2.3')}
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-center">
                <img src="https://rinkakuworks.com/public/images/simpleplan/rinko.webp" alt="rinko user persona" loading="lazy"/>
                <img src="https://rinkakuworks.com/public/images/simpleplan/angelo.webp" alt="angelo user persona" loading="lazy"/>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t('simpleplan.usermap2')}</strong></h5>
                </Col>
                <Col>
                    {t('simpleplan.usermap2.1')}
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-center">
                <img src="https://rinkakuworks.com/public/images/simpleplan/parcour.webp" alt="rinko user persona" loading="lazy"/>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>{t('simpleplan.wireframe2')}</strong></h5>
                </Col>
                <Col>
                    {t('simpleplan.wireframe2.1')}<br/>
                    {t('simpleplan.wireframe2.2')}
                </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="text-center">
                <img src="https://rinkakuworks.com/public/images/simpleplan/paperwireframe1.webp" alt="paper wireframe 1" loading="lazy"/>
                <img src="https://rinkakuworks.com/public/images/simpleplan/paperwireframe2.webp" alt="paper wireframe 2" loading="lazy"/>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>{t('simpleplan.wireframe2.3')}</strong></h5>               
                </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="text-left">
                <Col>
                    {t('simpleplan.wireframe2.4')}<br/><br/>
                    {t('simpleplan.wireframe2.5')}
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/lowfi1.webp" alt="low fidelity wireframe 1" loading="lazy"/>
                </Col>
                <Col>
                    {t('simpleplan.wireframe2.6')}<br/><br/>
                    {t('simpleplan.wireframe2.7')}<br/><br/>
                    {t('simpleplan.wireframe2.8')}
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/lowfi2.webp" alt="low fidelity wireframe 2" loading="lazy"/>
                </Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>{t('simpleplan.lowfidelity2')}</strong></h5>   
                </Col>
                <Col>
                    {t('simpleplan.lowfidelity2.1')}<br/><br/>
                    {t('simpleplan.lowfidelity2.2')}<br/><br/>
                    <a href="https://www.figma.com/proto/yheNVdYaZcgAIRBFQ6dmTi/Portfolio-Project?type=design&node-id=6-5&t=pC5AqnhdGg7JSGWE-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A5&mode=design"><h5>Lien Figma vers le prototype Basse Fidélité</h5></a>
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/lowfifull.webp" alt="full low fidelity wireframe" loading="lazy"/>
                </Col>
            </Row>

            <Row xs={1} md={2} lg={2} className='align-items-center text-left'>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/lowfimobile-opti.gif" alt="full low fidelity wireframe" loading="lazy"/>
                </Col>
                <Col>
                    {t('simpleplan.lowfidelity2.3')}<br/><br/>
                    {t('simpleplan.lowfidelity2.4')}<br/><br/>
                </Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>{t('simpleplan.usabilitytesting2')}</strong></h5>   
                </Col>
                <Col>
                    {t('simpleplan.usabilitytesting2.1')}
                </Col>
                <Col>
                    {t('simpleplan.usabilitytesting2.2')}<br/>
                    {t('simpleplan.usabilitytesting2.3')}<br/>
                </Col>
            </Row>

            <Row xs={1} md={2} lg={2} className='align-items-center text-left'>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/beforeafter1.webp" alt="before and after usability studies" loading="lazy"/>
                </Col>
                <Col>
                    {t('simpleplan.usabilitytesting2.4')}
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/beforeafter2.webp" alt="before and after usability studies 2" loading="lazy"/>
                </Col>
                <Col>
                    {t('simpleplan.usabilitytesting2.5')}<br/><br/>
                    {t('simpleplan.usabilitytesting2.6')}
                </Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>{t('simpleplan.uikit2')}</strong></h5>   
                </Col>
                <Col>
                    {t('simpleplan.uikit2.1')}
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/uikit.webp" alt="UI kit for simple plan" loading="lazy"/>
                </Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>{t('simpleplan.highfidelity2')}</strong></h5> 
                </Col>
                <Col>
                    <a href="https://www.figma.com/proto/yheNVdYaZcgAIRBFQ6dmTi/Portfolio-Project?type=design&node-id=411-83&t=GVIZ5DGH0ER6JgCN-1&scaling=scale-down&page-id=411%3A82&starting-point-node-id=411%3A83&mode=design"><h5>Lien Figma vers le prototype Haute Fidélité</h5></a>
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/hififull.webp" alt="Full High Fidelity Prototype for the simple plan app" loading="lazy"/>
                </Col>
            </Row>

            <Row xs={1} md={2} lg={2} className='align-items-center text-left'>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/hifimobile-opti.gif" alt="full low fidelity wireframe" loading="lazy"/>
                </Col>
                <Col>
                    {t('simpleplan.highfidelity2.1')}<br/>
                    {t('simpleplan.highfidelity2.2')}<br/>
                </Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>{t('simpleplan.conclusion2')}</strong></h5> 
                </Col>
                <Col>
                    {t('simpleplan.conclusion2.1')}
                </Col>
                <Col>
                    {t('simpleplan.conclusion2.2')}
                </Col>
                <Col>
                    <ul>
                        <li>{t('simpleplan.conclusion2.3')}</li>
                        <li>{t('simpleplan.conclusion2.4')}</li>
                    </ul>
                </Col>
                <Col>
                    {t('simpleplan.conclusion2.5')}
                </Col>
                <Col></Col>
            </Row>

            <Row xs={1} md={2} lg={2} className='align-items-center text-left'>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/concept1.webp" alt="extension idea: share to socials" loading="lazy"/>
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/concept2.webp" alt="extension idea: search by date, category or artist" loading="lazy"/>
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/concept4.webp" alt="extension idea: locate your friends" loading="lazy"/>
                </Col>                
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/concept3.webp" alt="extension idea: friend messaging" loading="lazy"/>
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