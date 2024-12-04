import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../components/AnimatedButton";
import { Divider } from "../components/Divider";
import './SimplePlan.css';

export default function SimplePlan() {
    return (
        <Container id="simpleplan" className="simpleplan-container">
            <div className="text-center" style={{ paddingBottom: '30px' }}>
                <h2>Simple Plan</h2>
            </div>
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h5>Application Mobile de réservation de concerts, pour une salle de concert locale</h5>
                <h5  style={{ fontWeight: "bold" }}>Projet de Portfolio UX Design</h5>
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
                    <strong>Le Projet: </strong>Cette application est une interface destinée à tous les spectateurs qui sont fidèles à un lieu de concert local. Elle permet d'augmenter leur fidélité en proposant un accès simplifié aux billets, à la découverte de nouveaux artistes et un système de notification.
                </Col>
                <Col>
                    <strong>Problématique: </strong>Les amateurs de musique avec une vie active souhaitent réserver leurs billets plus simplement, et ne plus oublier un concert qu'ils anticipaient tant.
                </Col>
                <Col>
                    <strong>Objectif: </strong>Concevoir une application qui simplifie la réservation d'un concert et qui leur rappellera lorsque cela aura lieu prochainement.
                </Col>
                <Col></Col>
                <Col>
                    <strong>Mon rôle: </strong>UX designer, conception et recherche
                </Col>
                <Col>
                    <strong>Responsabilités: </strong>Réalisation d'entretiens, wireframing papier et numérique, créations de prototypes basse et haute fidélité, prise en compte de l'accessibilité et itération sur les conceptions.
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>La recherche utilisateurs</strong></h5>
                </Col>
                <Col>
                    <u>Pour me faire une meilleure idée du public et des fonctionnalités à créer pour l'application, j'ai trouvé dans mon entourage six personnes auquels j'ai posés quelques questions :</u>
                </Col>
                <Col>
                    <ul>
                        <li>Vous arrive t'il souvent de prévoir un plan pour un concert plus tard, pour l'oublier ensuite? Qu'est ce que cela vous fait ressentir?</li>
                        <li>Pensez vous que ces problèmes (celui d'oublier un plan) peut être résolu?</li>
                        <li>Quelle est la raison principale pour laquelle vous choisissez de ne pas aller à un concert, même si vous avez toutes les possibilités pour y participer?</li>
                        <li>Avez vous des lieux de concert préférés, et avez vous tendance à rester fidèles à ces lieux?</li>
                        <li>A quel fréquence allez vous au concert? Quels sont généralement les motivations qui vous font venir?</li>
                    </ul>
                </Col>
                <Col></Col>
                
                <Col>
                    <u>Grâce aux résultats obtenus lors de ces sondages, j'ai pu identifier quatre points de douleur.</u>
                </Col>
                <Col>
                    <strong>Emploi du temps chargé: </strong>Trop occupés avec leurs quotidiens, les utilisateurs auront souvent tendance à oublier les concerts –d'où la nécessité d'une application pour les notifier.
                </Col>
                <Col>
                    <strong>Solitude: </strong>Même si elle est fan de l'artiste en question, une personne va fortement hésiter à aller à un concert si elle n'est pas accompagnée. Dans la musique, le partage est essentiel.
                </Col>
                <Col>
                    <strong>Accessibilité: </strong>Beaucoup d'applications ont une palette de couleurs qui n'est pas suffisamment contrastée, des polices trop petites où une navigation trop compliquée.
                </Col>
                <Col>
                    <strong>Prix des sorties: </strong>Il n'y a pas seulement le prix des billets, mais surtout le prix du trajet où des consommations sur place qui alourdissent l'addition et démotivent souvent les spectateurs pour aller à un concert.
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>Personas</strong></h5>
                </Col>
                <Col>
                    Basé sur les sondages et les points de douleur, j'ai pu imaginer deux types de personas différentes pour qui je vais adapter mon application.
                </Col>
                <Col>
                    Ainsi, je vous présente <strong>Rinko</strong>, jeune étudiante en psychologie, souhaitant supporter ses musiciens préférés malgré son emploi de temps chargé. Je vous présente également <strong>Angelo</strong>, professeur de mathématiques avec une déficience visuelle, qui ne l'empêche pas de réserver et d'aller aux concerts.
                </Col>
                <Col>
                    Pour répondre aux problématiques de ces deux types d'utilisateurs, j'ai décidé de mettre au point un design accessible et simplifié.
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
                    <h5><strong>Parcours utilisateur</strong></h5>
                </Col>
                <Col>
                    J'ai décidé de centrer ce parcours utilisateur sur le cas d'Angelo, un professeur de mathématiques fan de musique moderne. Ceci m'a permis de réfléchir aux problèmes qu'il pourrait rencontrer du à ses déficiences visuelles, et adapter mon interface pour des utilisateurs comme lui.
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
                    <h5><strong>Wireframes papier</strong></h5>
                </Col>
                <Col>
                    Il a fallu plusieurs itérations avent l'étape du wireframe digital.<br/>
                    Mon objectif était de mettre au point une interface qui soit épurée, simple à prendre en main, pour que tout utilisateur puisse s'y familiariser rapidement .
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
                    <h5><strong>Début des wireframes numériques</strong></h5>               
                </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="text-left">
                <Col>
                    Inspiré par les recherches utilisateurs j'ai pu rester concentré pour la création d'un wireframe qui soit cohérent, simple d'utilisation et avec un design qui à du potentiel pour des extensions nombreuses dans le futur.  Un système de géolocalisation.. recherche d'artistes par style où dans l'ordre alphabétique.. un côté pour les techniciens informatiques du lieu, pour ajouter de nouvelles dates, la gestion des tickets, des jeux concours et plus...<br/><br/>
                    Cependant je ne devais pas m'emballer. J'allais pour le moment rester sur une fonction de réservation et d'enregistrement de tickets, et laisser ces idées pour des mises à jour futures. Ainsi, la page d'accueil concentre une liste de concerts qui pourraient être intéressantes pour le spectateur.
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/lowfi1.webp" alt="low fidelity wireframe 1" loading="lazy"/>
                </Col>
                <Col>
                    Le wireframe numérique pour la visualisation d'une page de concert. <br/><br/>
                    La date, le lieu et le prix sont des informations que j'estimais nécessaires de mettre en évidence. J'avais rajoutée une fonction un peu inédite, mettre les profils des organisateurs en premier plan, juste en-dessous du titre du concert. Avec ceci les utilisateurs pourraient facilement les suivre pour de futures évènements de ces organisations.<br/><br/>
                    Le bouton des tickets, en voyant cette image je la trouve trop petite, et elle serait trop basse pour tomber juste sous la main. Heureusement j'ai corrigé ce problème plus tard, en augmentant la taille de ce bouton.
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
                    <h5><strong>Aperçu du prototype basse fidélité</strong></h5>   
                </Col>
                <Col>
                    En créant des liens pour naviguer à travers mes wireframes numériques, j'ai créé ce que l'on nomme un prototype basse fidélité. Le parcours utilisateur principal est celui de la réservation d'un ticket de concert.<br/><br/>
                    Ce fut aussi un prototype qui fut testé lors de ma toute première enquête utilisateur.<br/><br/>
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
                    Un aperçu de la navigation à travers le prototype. <br/><br/>
                    Commencement de la navigation par la sélection d'une date dans la page d'accueil. Affichage de la date et réservation du ticket, page de confirmation et page de fin de parcours, avec un bouton pour revenir sur la page d'accueil.
                </Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>L'étude d'usabilité</strong></h5>   
                </Col>
                <Col>
                    J'ai pu mener deux études d'utilisabilité sur mon prototype. 
                </Col>
                <Col>
                    <strong>La première étude d'utilisabilité</strong> a été menée pour voir comment les candidats naviguent dans le flux d'utilisateurs principal. <br/>
                    <strong>La seconde étude d'usabilité</strong>, réalisée sur le prototype haute fidélité, a révélé les aspects à affiner.
                </Col>
            </Row>

            <Row xs={1} md={2} lg={2} className='align-items-center text-left'>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/beforeafter1.webp" alt="before and after usability studies" loading="lazy"/>
                </Col>
                <Col>
                    Les participants ont déclarés qu'il manquait un module de paiement après la page de confirmation. Ils souhaitaient également avoir la possibilité de réserver plusieurs tickets en une seule commande.
                </Col>
                <Col>
                    <img src="https://rinkakuworks.com/public/images/simpleplan/beforeafter2.webp" alt="before and after usability studies 2" loading="lazy"/>
                </Col>
                <Col>
                    Un candidat en particulier à mentionné qu'il manquait des indications d'accessibilité pour les personnes handicapés. Le bouton « Valider un ticket » devait également être renommé, puisque cet écran apparaît avant le processus de commande de billet.<br/><br/>
                    L'idée d'avoir la liste d'organisateurs à été enlevée. 
                </Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>Kit UI</strong></h5>   
                </Col>
                <Col>
                    Pour les couleurs, j'eus spécifiquement l'idée d'un interface où la couleur violette occupe une place importante. Pour moi, c'est la couleur de la créativité.
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
                    <h5><strong>Aperçu du prototype haute fidélité</strong></h5> 
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
                    Chaque carte d'événement présente une image attrayante, le titre, et des détails essentiels comme le type de placement. Le design simple et épuré permet de repérer rapidement les informations clés, tout en offrant une expérience fluide et ergonomique.<br/>
                    La barre de navigation en bas de l’écran offre un accès rapide aux sections importantes, telles que les billets, les notifications, et le profil utilisateur.
                </Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col>
                    <h5><strong>Conclusion et prochaines étapes</strong></h5> 
                </Col>
                <Col>
                    <strong>Impact: </strong>Cet application bénéficiera simultanément les organisateurs de concert et les utilisateurs. Lors de la seconde étude d'utilisabilité, la majorité des candidats souhaitaient l'utiliser à nouveau dans une situation réelle.
                </Col>
                <Col>
                    <strong>Ce que j'ai appris: </strong>Avec ce projet, j'ai pu apprendre toutes les étapes essentielles lors de la conception d'une application. J'avais d'abord crée mon application en me basant sur mes propres expérience, mais j'ai pu apprendre ensuite à adapter ce projet pour faciliter son utilisation aux autres personnes.
                </Col>
                <Col>
                    <ul>
                        <li>Davantage de compatibilité avec les lecteurs d'écran et tests auprès des personnes malvoyants, pour que l'application permet l'accès aux concerts à tous.</li>
                        <li>Un module de messagerie, pour permettre aux spectateurs de se faire connaissance et faire des plans avant leur rencontre sur les lieux du concert.</li>
                    </ul>
                </Col>
                <Col>
                    Après le prototype haute fidélité et les études d'usabilité terminées, je tentais d'imaginer quelques capacités supplémentaires pour une potentielle version 2.0. Il s'agit des quelques idées que j'avais eues au début de la conception de l'app.
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