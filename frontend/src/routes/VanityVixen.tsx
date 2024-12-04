import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../components/AnimatedButton";
import { Divider } from "../components/Divider";
import './VanityVixen.css';

export default function VanityVixen() {
    return(
        <Container id="vanityvixen" className="vanityvixen-container">
            <div className="text-center" style={{ paddingBottom: '30px' }}>
                <h2>Vanity Vixen</h2>
            </div>
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h5>Responsive Website pour des tutoriels de maquillage</h5>
                <h5  style={{ fontWeight: "bold" }}>Projet de Portfolio UX Design</h5>
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
                    <strong>Le Projet: </strong>Vanity Vixen est un site spécialement conçu pour les tutoriels de maquillage. Il est destiné à des usagers de tous types, peu importe le genre où le niveau de pratique. L'objectif est de proposer des looks pour le quotidien, mais également des looks plus extravagants pour des looks plus spéciaux.
                </Col>
                <Col>
                    <strong>Problématique: </strong>Il existe beaucoup de tutoriels de maquillage sur YouTube, cependant il est facile pour l’utilisateur d’être distrait où de procrastiner dû au nombre de contenu qui s’y trouve. De plus, il y manque un moyen pour l’utilisateur de voir sa progression. 
                </Col>
                <Col>
                    <strong>Objectif: </strong>Concevoir un site spécialisé sur les tutoriels de maquillage, qui soit convivial pour les débutants avec des ressources pour trouver des produits, une retranscription des étapes et un suivi de progression.
                </Col>
                <Col></Col>
                <Col>
                    <strong>Mon rôle: </strong>UX designer pour la version PC et mobile du site web.
                </Col>
                <Col>
                    <strong>Responsabilités: </strong>Conduite des interviews, création de wireframes papier et digital, prototypes basse et haute fidélité, conduite des études d'usabilité, responsive design et prise en compte de l'accessibilité.
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
                    L'étape initiale pour la création de ce prototype était une enquête utilisateur auprès de cinq personnes qui étaient susceptibles de se maquiller. Je me suis assurée d’interroger des personnes de différents niveaux et de genres différents.
                </Col>
                <Col>
                    <u>Les questions d'entretien furent les suivantes :</u>
                </Col>
                <Col>
                    <ul>
                        <li>A quelle fréquence regardez vous des tutoriels de maquillage?</li>
                        <li>Pourquoi vous maquillez-vous / pourquoi souhaiteriez apprendre le maquillage?</li>
                        <li>Qu'est ce qui vous empêche d'être plus régulier avec le maquillage?</li>
                        <li>Quel est le style de makeup que vous aimez faire / que vous souhaiteriez faire?</li>
                        <li>S'il existait une plateforme spécialement dédiée pour les tutoriels de maquillage, quels fonctions souhaiteriez-vous y retrouver?</li>
                    </ul>
                </Col>
                <Col></Col>
                
                <Col>
                    <u>Points de douleur principaux identifiés durant l'enquête :</u>
                </Col>
                <Col>
                    <strong>Procrastination: </strong>Les utilisateurs peuvent manquer d’encouragement où disposent de trop de distractions pour pratiquer régulièrement.
                </Col>
                <Col>
                    <strong>Produits de maquillage: </strong>Il est difficile, notamment pour les débutants de savoir quels sont les produits essentiels idéaux pour démarrer.
                </Col>
                <Col>
                    <strong>Aceessibilité des tutoriels: </strong>Les tutoriels manquent souvent d’une retranscription par étapes, ainsi que de liens pour retrouver les produits utilisés.
                </Col>
                <Col>
                    <strong>Communauté: </strong>Les interviewés ont exprimé le besoin d’une communauté pour partager des avis honnêtes et constructifs, sans jugement.
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <h5><strong>Personas</strong></h5>
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
                    <h5><strong>Carte du parcours utilisateur</strong></h5>
                </Col>
                <img src="https://rinkakuworks.com/public/images/vanityvixen/mapvanityvixen.webp" alt="user map for max" loading="lazy"/>
                <Col></Col>
                <Divider />
                <Col></Col>                
            </Row>

            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <h5><strong>Plan du site</strong></h5>
                </Col>
                <img src="https://rinkakuworks.com/public/images/vanityvixen/sitemapvanityvixen.webp" alt="site map for Vanity Vixen" loading="lazy"/>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col></Col>
                <Col>
                    Développer un plan du site avant de passer au wireframing à été une nécessité pour ce projet. Le prototype que j’allais présenter allait se concentrer sur la section “Tutoriels”, mais il me fallait trouver un moyen pour organiser tous les futurs informations. 
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>  
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>Wireframes papier</strong></h5>                 
                </Col>
                <Col>
                    Grâce à la mise au point du plan du site, j’ai pu réfléchir à différentes versions de la page d’accueil sur papier. 
                </Col>
                <Col>
                    Je voulais quelque chose qui soit ludique à naviguer pour l’utilisateur, néanmoins gardant un focus sur l’essentiel pour l’utilisateur : les tutoriels de maquillage.<br/>
                    Mon prototype fut d'abord réfléchi pour une version PC, puis fut adapté pour la taille des écrans des téléphones.
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
                    <h5><strong>Prototype basse fidélité</strong></h5>  
                </Col>
                <Col>
                    Après avoir mis au point les wireframes version papier, la migration sur un prototype basse fidélité à été simple. J’ai priorisé la simplicité d’utilisation et la clarté du site, inspirée par des sites existantes comme Sephora, Nyx où encore MAC cosmetics.
                </Col>
                <Col>
                    Pour créer mon prototype basse fidélité, j’ai d’abord essayé de voir quels sortes de liens les utilisateurs sont plus susceptibles de cliquer pour avancer ou reculer à travers un site web. Ma recherche utilisateurs en main, j’ai également fait de mon possible pour que mon prototype puisse répondre aux points de douleur / problématiques découvertes. 
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
                    <h5><strong>Etude d'usabilité</strong></h5>      
                </Col>
                <Col>
                    <strong>Type d'étude: </strong>Etude d'usabilité modérée<br/>
                </Col>
                <Col>
                    <strong>Lieu: </strong>Nice<br/>    
                </Col>
                <Col>
                    <strong>Participants: </strong>5 Candidats<br/>
                </Col>
                <Col>
                    <strong>Longueur: </strong>Entre 20 et 30 minutes<br/>
                </Col>
                <Col>
                    Tester mon prototype basse fidélité auprès de personnes extérieurs à pu m’apporter de précieux enseignements. 
                </Col>
                <Col>
                    <strong>Organisation de la page de tutoriel: </strong>Similairement à une recette de cuisine, il était nécessaire que je présente les produits utilisés avant les étapes de maquillage.
                </Col>
                <Col>
                    <strong>Marques de produits: </strong>Les utilisateurs désiraient bénéficier d’informations pointues sur chaque produit: carnations, marque, prix, dévouement de la marque aux causes environnementales …              
                </Col>
                <Col>
                    <strong>Inclusivité: </strong>L’objectif principal de mon projet étant l’inclusivité, il aurait fallu que je propose des tutoriels pour homme également, dès le départ.                
                </Col>
                <Col>
                    Basé sur l’étude d’usabilité, j’ai pu apporter des améliorations signifiantes sur mon site web, que ce soit la version mobile où  PC. J’ai par exemple réfléchi à une palette de couleurs qui soit attrayante et une mise en avant des boutons de navigation.
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-center">
                <Col>
                    <img src="https://rinkakuworks.com/public/images/vanityvixen/beforeaftervv.webp" alt="before and after usability study" loading="lazy"/>
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    Pour répondre aux besoins des utilisateurs, je me suis assurée d’ajouter les noms + carnation des produits référencés dans les vidéos de démonstration. Sur la version portable, l'onglet des produits utilisés arrive avant le tutoriel de maquillage étape par étape.
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
                    <h5><strong>Kit UI</strong></h5>                 
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
                    <h5><strong>Prototype Haute Fidélité (PC)</strong></h5>    
                </Col>
                <Col>
                    Le flow utilisateur est resté inchangé pour ma nouvelle itération, les changements apportés furent surtout pour optimiser la facilité d’utilisation et l’aspect visuel.
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
                    <h5><strong>Prototype Haute Fidélité (Android)</strong></h5> 
                </Col>
                <Col>
                    Travailler sur la version mobile de mon site à été une grande priorité dès le début. Je souhaitais absolument proposer une expérience d’utilisation identique, peu importe si l’accès se fait du PC où du smartphone.
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
                    <h5><strong>Conclusions</strong></h5> 
                </Col>
                <Col>
                    <strong>Impact: </strong>Les utilisateurs ciblés pour qui je souhaitais concevoir cet application ont en majorité déclarés qu’ils souhaitaient utiliser ce genre de site, qu’ils soient de niveau totalement débutant ou confirmé.<br/>
                </Col>
                <Col>
                    <strong>Ce que j’ai appris: </strong>Ne pas avoir peur de laisser mes loisirs et mes goûts personnels s'exprimer à travers mes projets. Avoir toujours à l’esprit l’utilisateur et ses problématiques pour répondre adéquatement à ses besoins.<br/>
                </Col>
                <Col>
                    <ul>
                        <li>Conduire une nouvelle étude d’usabilité sur ce prototype haute fidélité, avant de potentiellement envoyer ce design à des ingénieurs.</li>
                        <li>Enrichir le site web de contenu et d’outils ludiques, permettant à l’utilisateur de mieux suivre ses progrès.</li>
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