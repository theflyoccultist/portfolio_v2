import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../../components/AnimatedButton";
import { Divider } from "../../components/Divider";
import './Evo11.css'
import { useTranslation } from 'react-i18next';

export default function Evo11() {
    const { t } = useTranslation('projects');
    return (
        <Container id="evo11" className="evo11-container">
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h2>{t('evo11.project1')}</h2>
            </div>
            
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h5>{t('evo11.subtitle1')}</h5>
                <h5  style={{ fontWeight: "bold" }}>{t('evo11.projecttype1')}</h5>
            </div>

            <div className="justify-content-center">
                <Row className="text-center">
                    <Col>
                        <img src="https://www.rinkakuworks.com/public/images/evo11/evo11.webp" className="shrink" alt="evo11 transition app" loading="lazy"/>
                    </Col>
                </Row>
            </div>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <strong>{t('evo11.theproject1')} </strong>{t('evo11.theproject1.1')}
                </Col>
                <Col>
                    <strong>{t('evo11.theproblematic1')}</strong>{t('evo11.theproblematic1.1')}
                </Col>
                <Col>
                    <strong>{t('evo11.theobjective1')}</strong>{t('evo11.theobjective1.1')}
                </Col>
                <Col></Col>
                <Col>
                    <strong>{t('evo11.therole1')}</strong>{t('evo11.therole1.1')}
                </Col>
                <Col>
                    <strong>{t('evo11.responsabilities1')}</strong>{t('evo11.responsabilities1.1')}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t('evo11.userresearch1')}</strong></h5>
                </Col>
                <Col>
                    {t('evo11.userresearch1.1')}
                </Col>
                <Col>
                    {t('evo11.userresearch1.2')}
                </Col>
                <Col>
                    {t('evo11.userresearch1.3')}
                </Col>
                <Col></Col>
                <Col>
                    <u>{t('evo11.q1.1')}</u><br/>
                    {t('evo11.q1.1.1')}<br/>
                    {t('evo11.q1.1.2')}
                </Col>
                <Col>
                    <u>{t('evo11.q1.2')}</u><br/>
                    {t('evo11.q1.2.1')}<br/>
                    {t('evo11.q1.2.2')}
                </Col>
                <Col>
                    <u>{t('evo11.q1.3')}</u><br/>
                    {t('evo11.q1.3.1')}<br/>
                    {t('evo11.q1.3.2')}
                </Col>
                <Col>
                    <u>{t('evo11.q1.4')}</u><br/>
                    {t('evo11.q1.4.1')}<br/>
                    {t('evo11.q1.4.2')}
                </Col>
                <Col>
                    <u>{t('evo11.q1.5')}</u><br/>
                    {t('evo11.q1.5.1')}<br/>
                    {t('evo11.q1.5.2')}
                </Col>
                <Col>
                    <u>{t('evo11.q1.6')}</u><br/>
                    {t('evo11.q1.6.1')}<br/>
                    {t('evo11.q1.6.2')}
                </Col>
                <Col>
                    <u>{t('evo11.q1.7')}</u><br/>
                    {t('evo11.q1.7.1')}<br/>
                    {t('evo11.q1.7.2')}
                </Col>
                <Col>
                    <u>{t('evo11.q1.8')}</u><br/>
                    {t('evo11.q1.8.1')}<br/>
                    {t('evo11.q1.8.2')}
                </Col>
                <Col>            
                    <u>{t('evo11.q1.9')}</u><br/>
                    {t('evo11.q1.9.1')}<br/>
                    {t('evo11.q1.9.2')}
                </Col>
                <Col>
                    <u>{t('evo11.q1.10')}</u><br/>
                    {t('evo11.q1.10.1')}<br/>
                    {t('evo11.q1.10.2')}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t('evo11.competitiveaudit1')}</strong></h5>
                </Col>
                <Col>
                    {t('evo11.competitiveaudit1.1')}
                </Col>
                <Col>
                    {t('evo11.competitiveaudit1.2')}
                </Col>
                <Col>
                    Lien vers l'audit (a ajouer)
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t('evo11.userpersona1')}</strong></h5>
                </Col>
                <Col>
                    {t('evo11.userpersona1.1')}
                </Col>
                <Col className="text-center">
                    <img src="https://www.rinkakuworks.com/public/images/evo11/annabelle.webp" alt="annabelle user persona" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col className="text-center">
                    <h5><strong>{t('evo11.ideation1')}</strong></h5>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="text-center">
                <img src="https://www.rinkakuworks.com/public/images/evo11/crazyeights1.webp" alt="crazy eights" loading="lazy"/>
                <img src="https://www.rinkakuworks.com/public/images/evo11/welcomepagesketch.webp" className="shrink" alt="welcome page sketch" loading="lazy"/>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-center">
                <Divider />
                <Col></Col> 
                <Col>
                    <h5><strong>{t('evo11.lowfidelity1')}</strong></h5>
                </Col>     
            </Row>
            <Row xs={1} md={2} lg={2} className="text-left">
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/lowfiwelcomepage.webp" alt="low fidelity prototype welcome page" loading="lazy"/>
                </Col>
                <Col>
                    <br/>{t('evo11.lowfidelity1.1')}<br/><br/>

                    {t('evo11.lowfidelity1.2')}<br/>
                        <ul>
                            <li>{t('evo11.lowfidelity1.3')}</li>
                            <li>{t('evo11.lowfidelity1.4')}</li>
                            <li>{t('evo11.lowfidelity1.5')}</li>
                        </ul><br/>
                        {t('evo11.lowfidelity1.6')}<br/>
                </Col>        
            </Row>

            <Row xs={1} md={1} lg={1}>
                <Col></Col>
                <Col>
                    {t('evo11.lowfidelity1.7')}<br/>
                    {t('evo11.lowfidelity1.8')}<br/>
                </Col>  
            </Row>
            <Row>
                <img src="https://www.rinkakuworks.com/public/images/evo11/lowfifull.webp" className="shrink" alt="full low fidelity prototype" loading="lazy"/>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Divider />
                <Col></Col> 
                <Col>
                    <h5><strong>{t('evo11.usabilitytesting1')}</strong></h5><br/>
                </Col>
                <Col>
                    <strong>{t('evo11.testtype1')}</strong>{t('evo11.testtype1.1')}<br/>
                </Col>
                <Col>
                    <strong>{t('evo11.testplace1')}</strong>{t('evo11.testplace1.1')}<br/>
                </Col>
                <Col>
                    <strong>{t('evo11.testcandidates1')}</strong>{t('evo11.testcandidates1.1')}<br/>
                </Col>
                <Col>
                    <strong>{t('evo11.testlength1')}</strong>{t('evo11.testlength1.1')}<br/>
                </Col>
                <Col>
                    {t('evo11.testresults1')}<br/>
                </Col>
                <Col>
                    {t('evo11.testresults1.1')}<br/>
                </Col>
                <Col>
                    {t('evo11.testresults1.2')}<br/>
                </Col>
                <Col>
                    {t('evo11.testresults1.3')}<br/>
                </Col>
            </Row>

            <Row>
                <img src="https://www.rinkakuworks.com/public/images/evo11/menuandmorningroutine.webp" className="shrink" alt="before and after usability study, menu and routine page" loading="lazy"/> 
            </Row>
            <Row xs={1} md={2} lg={2}>
                <img src="https://www.rinkakuworks.com/public/images/evo11/checklist.webp" alt="before and after usability study, checklist page" loading="lazy"/> 
                <img src="https://www.rinkakuworks.com/public/images/evo11/welcomepagelowfitohifi.webp" className="shrink" alt="before and after usability study, welcome page" loading="lazy"/> 
            </Row>

            <Row xs={1} md={1} lg={1}>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>{t('evo11.uikit1')}</strong></h5><br/>
                    {t('evo11.uikit1.1')}<br/>
                    {t('evo11.uikit1.2')}<br/>
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/uikit.webp" alt="ui kit" loading="lazy"/> 
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t('evo11.highfidelity1')}</strong></h5><br/>                       
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/hifiprototype.webp" alt="completed high fidelity prototype" loading="lazy"/> 
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t('evo11.responsive1-pc')}</strong></h5><br/>                     
                </Col>
                <Col>
                    {t('evo11.responsive1.1')}<br/>
                </Col>
                <Col>
                    {t('evo11.responsive1.2')}<br/>
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/websitepc.webp" alt="responsive website for PC" loading="lazy"/> 
                </Col>
                <Col>
                    <h5><strong>{t('evo11.responsive1-ios')}</strong></h5><br/>                    
                </Col>
                <Col>
                    {t('evo11.responsive1.3')}<br/>
                </Col>
                <Col>
                    {t('evo11.responsive1.4')}<br/>
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/websitemobile.webp" className="shrink" alt="responsive website for mobile" loading="lazy"/> 
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1}>
                <Col>
                    <h5><strong>{t('evo11.sitemap1')}</strong></h5><br/>
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/sitemap.webp" alt="sitemap for responsive website" loading="lazy"/> 
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col><h5><strong>{t('evo11.conclusion1')}</strong></h5><br/></Col>
                <Col>
                    {t('evo11.conclusion1.1')}<br/>
                </Col>
                <Col>
                   {t('evo11.conclusion1.2')}<br/>
                </Col>
                <Col></Col>
                <Col>
                    <ul>
                        <li>{t('evo11.conclusion1.3')}</li>
                        <li>{t('evo11.conclusion1.4')}</li>
                        <li>{t('evo11.conclusion1.5')}</li>
                    </ul>                     
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