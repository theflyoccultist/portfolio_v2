import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../../components/AnimatedButton";
import { Divider } from "../../components/Divider";
import './VanityVixen.css';
import { useTranslation } from 'react-i18next';

export default function VanityVixen() {
    const { t } = useTranslation('projects');
    return(
        <Container id="vanityvixen" className="vanityvixen-container">
            <div className="text-center" style={{ paddingBottom: '30px' }}>
                <h2>{t('vanityvixen.project3')}</h2>
            </div>
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h5>{t('vanityvixen.subtitle3')}</h5>
                <h5  style={{ fontWeight: "bold" }}>{t('vanityvixen.subtitle3.1')}</h5>
            </div>

            <div className="justify-content-center">
                <Row className="text-center">
                    <Col>
                        <img src="https://rinkakuworks.com/public/images/vanityvixen/vanity-vixen.webp" className="shrink" alt="evo11 transition app" loading="lazy"/>
                    </Col>
                </Row>
            </div>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <strong>{t('vanityvixen.theproject3')}</strong>{t('vanityvixen.theproject3.1')}
                </Col>
                <Col>
                    <strong>{t('vanityvixen.theproblematic3')}</strong>{t('vanityvixen.theproblematic3.1')}
                </Col>
                <Col>
                    <strong>{t('vanityvixen.theobjective3')}</strong>{t('vanityvixen.theobjective3.1')}
                </Col>
                <Col>
                    <strong>{t('vanityvixen.therole3')}</strong>{t('vanityvixen.therole3.1')}
                </Col>
                <Col>
                    <strong>{t('vanityvixen.responsabilities3')}</strong>{t('vanityvixen.responsabilities3.1')}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>{t('vanityvixen.userresearch3')}</strong></h5>
                </Col>
                <Col>
                    {t('vanityvixen.userresearch3.1')}
                </Col>
                <Col>
                    <u>{t('vanityvixen.userresearch3.2')}</u>
                </Col>
                <Col>
                    <ul>
                        <li>{t('vanityvixen.q3.1')}</li>
                        <li>{t('vanityvixen.q3.2')}</li>
                        <li>{t('vanityvixen.q3.3')}</li>
                        <li>{t('vanityvixen.q3.4')}</li>
                        <li>{t('vanityvixen.q3.5')}</li>
                    </ul>
                </Col>
                <Col></Col>
                
                <Col>
                    <u>{t('vanityvixen.results3')}</u>
                </Col>
                <Col>
                    <ul>
                        <li>{t('vanityvixen.r3.1')}</li>
                        <li>{t('vanityvixen.r3.2')}</li>
                        <li>{t('vanityvixen.r3.3')}</li>
                        <li>{t('vanityvixen.r3.4')}</li>
                    </ul>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <h5><strong>{t('vanityvixen.personas3')}</strong></h5>
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/maxvanityvixen.webp" alt="max user persona" loading="lazy"/>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/clairevanityvixen.webp" alt="claire user persona" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <h5><strong>{t('vanityvixen.usermap3')}</strong></h5>
                </Col>
                <img src="https://rinkakuworks.com/public/images/vanityvixen/mapvanityvixen.webp" alt="user map for max" loading="lazy"/>
                <Col></Col>
                <Divider />
                <Col></Col>                
            </Row>

            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <h5><strong>{t('vanityvixen.sitemap3')}</strong></h5>
                </Col>
                <img src="https://rinkakuworks.com/public/images/vanityvixen/sitemapvanityvixen.webp" alt="site map for Vanity Vixen" loading="lazy"/>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col></Col>
                <Col>
                    {t('vanityvixen.sitemap3.1')}
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>  
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t('vanityvixen.wireframe3')}</strong></h5>                 
                </Col>
                <Col>
                    {t('vanityvixen.wireframe3.1')}
                </Col>
                <Col>
                    {t('vanityvixen.wireframe3.2')}<br/>
                    {t('vanityvixen.wireframe3.3')}
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-center">
                <img src="https://rinkakuworks.com/public/images/vanityvixen/paperwireframevv.webp" alt="paper wireframe for Vanity Vixen" loading="lazy"/>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t('vanityvixen.lowfidelity3')}</strong></h5>  
                </Col>
                <Col>
                    {t('vanityvixen.lowfidelity3.1')}
                </Col>
                <Col>
                     {t('vanityvixen.lowfidelity3.2')}
                </Col>
                <Col>
                    <a href="https://www.figma.com/proto/X2lPinR5CIJvMLKrpUAwWd/Portfolio-Project-2?type=design&node-id=0-1&t=gu35BiaWEsNR9qzU-0&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1"><h5>Lien Figma vers le prototype Basse Fidélité</h5></a>
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/lofiprototypevv.webp" alt="low fidelity prototype for Vanity Vixen" loading="lazy"/>
                </Col>    
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/lofiprototypevv2.webp" alt="low fidelity prototype for Vanity Vixen 2" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t('vanityvixen.usabilitytesting3')}</strong></h5>      
                </Col>
                <Col>
                    <strong>{t('vanityvixen.testtype3')}</strong>{t('vanityvixen.testtype3.1')}<br/>
                </Col>
                <Col>
                    <strong>{t('vanityvixen.testplace3')}</strong>{t('vanityvixen.testplace3.1')}<br/>    
                </Col>
                <Col>
                    <strong>{t('vanityvixen.testcandidates3')}</strong>{t('vanityvixen.testcandidates3.1')}<br/>
                </Col>
                <Col>
                    <strong>{t('vanityvixen.testlength3')}</strong>{t('vanityvixen.testlength3.1')}<br/>
                </Col>
                <Col>
                    {t('vanityvixen.testresults3')} 
                </Col>
                <Col>
                    {t('vanityvixen.testresults3.1')} 
                </Col>
                <Col>
                    {t('vanityvixen.testresults3.2')} 
                </Col>
                <Col>
                    {t('vanityvixen.testresults3.3')}                 
                </Col>
                <Col>
                    {t('vanityvixen.testresults3.4')} 
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/beforeaftervv.webp" alt="before and after usability study" loading="lazy"/>
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    {t('vanityvixen.transition3')}
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/beforeaftervv2.webp" alt="before and after usability study 2" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <h5><strong>{t('vanityvixen.uikit3')}</strong></h5>                 
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/uikitvv.webp" alt="ui kit vanity vixen" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t('vanityvixen.highfidelity3')}</strong></h5>    
                </Col>
                <Col>
                    {t('vanityvixen.highfidelity3.1')}
                </Col>
                <Col>
                    <a href="https://www.figma.com/proto/X2lPinR5CIJvMLKrpUAwWd/Portfolio-Project-2?type=design&node-id=166-2&t=SHjb1xLs5gjSQuBu-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=166%3A2&show-proto-sidebar=1&mode=design"><h5>Lien Figma vers le prototype Haute Fidélité</h5></a>
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/hifiprototypevv.webp" alt="high fidelity prototype vanity vixen" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t('vanityvixen.highfidelity3.2')}</strong></h5> 
                </Col>
                <Col>
                    {t('vanityvixen.highfidelity3.3')}
                </Col>
                <Col>
                    <a href="https://www.figma.com/proto/X2lPinR5CIJvMLKrpUAwWd/Portfolio-Project-2?type=design&node-id=166-317&t=AOqw3ltHjWsYPy8W-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=166%3A317&show-proto-sidebar=1&mode=design"><h5>Lien Figma vers le prototype Haute Fidélité (Mobile)</h5></a>
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/hifiprototypevvmobile.webp" alt="high fidelity prototype vanity vixen, for mobile" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>{t('vanityvixen.conclusion3')}</strong></h5> 
                </Col>
                <Col>
                    {t('vanityvixen.conclusion3.1')}<br/>
                </Col>
                <Col>
                    {t('vanityvixen.conclusion3.2')}<br/>
                </Col>
                <Col>
                    <ul>
                        <li>{t('vanityvixen.conclusion3.3')}</li>
                        <li>{t('vanityvixen.conclusion3.4')}</li>
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