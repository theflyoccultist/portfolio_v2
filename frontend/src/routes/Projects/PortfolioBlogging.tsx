import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../../components/AnimatedButton";
import { Divider } from "../../components/Divider";
import { CodeSample, CodeSample2 } from './PortfolioBloggingCodeExample'
import './PortfolioBlogging.css'

export default function PortfolioBlogging() {
    return (
        <Container id="evo11" className="portfolioblogging-container">
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h2>Plateforme de Blogging</h2>
            </div>

            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h5>Application web Full stack</h5>
                <h5  style={{ fontWeight: "bold" }}>Projet autonome</h5>
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
                    Cette plateforme de blogging a été conçue pour documenter mon parcours en codage, partager mes apprentissages et mes réussites, et enrichir mon expérience en développement web et en déploiement.
                </Col>
                <Col></Col>
                <Col>
                    <h5><strong>Fonctionnalités</strong></h5>
                </Col>
                <Col>
                    <strong>Authentification utilisateur: </strong>La plateforme permet de créer un compte utilisateur et de se connecter de manière sécurisée grâce à un système de rafraîchissement des tokens.
                </Col>
                <Col>
                    <strong>Gestion des posts (CRUD): </strong>Les utilisateurs peuvent créer un nouvel article, le visualiser sur leur portfolio, l’éditer ultérieurement ou le supprimer. Toutes les modifications sont visibles instantanément.
                </Col>
                <Col>
                    <strong>Éditeur de texte personnalisé (React Quill): </strong>Pour la création et l’édition des articles, j’ai utilisé React Quill, que j’ai personnalisé en ajoutant des fonctionnalités spécifiques, comme l’intégration de blocs de code.
                </Col>
                <Col>
                    <strong>Responsive design: </strong>La plateforme s’adapte automatiquement pour offrir une expérience optimale, que ce soit sur mobile ou sur ordinateur.
                </Col>
                <Col>
                    <strong>Déploiement robuste: </strong>J’ai utilisé une configuration .htaccess personnalisée pour le déploiement sur un serveur Apache, garantissant un routage fluide et des mises à jour simples.
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>Fonctionnalités Prévues</strong></h5>
                </Col>
                <Col>
                    <strong>Tags et catégories: </strong>Pour organiser les articles et permettre aux visiteurs de filtrer les contenus selon leurs intérêts.
                </Col>
                <Col>
                    <strong>Affichage public/privé: </strong>Une fonctionnalité pour sauvegarder un brouillon et le publier ultérieurement.
                </Col>
                <Col>
                    <strong>Analytics: </strong>Suivre le nombre de visiteurs par article ou catégorie, et analyser les performances globales du blog.
                </Col>
                <Col>
                    <strong>Commentaires: </strong>Offrir aux visiteurs la possibilité de laisser des retours ou d’interagir avec l’auteur.
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>Défis rencontrés</strong></h5>
                </Col>
                <Col>
                    <strong>Configuration du fichier .htaccess: </strong>Le routage du serveur a été particulièrement complexe. Par exemple, j’ai rencontré des écrans blancs bien que les fichiers JavaScript et HTML aient été correctement trouvés. J’ai également dû résoudre des problèmes de types MIME et configurer correctement les adresses des requêtes backend. Pour en savoir plus, vous pouvez consulter cet article détaillé.
                </Col>
                <Col>
                    <strong>Politiques CORS: </strong>J’ai implémenté une politique CORS stricte dans le backend pour sécuriser les appels API depuis le frontend. J’ai également configuré des exceptions pour autoriser les requêtes GET depuis mon portfolio.
                </Col>
                <Col>
                    <strong>Personnalisation de React Quill: </strong>J’ai adapté l’éditeur pour ajouter des fonctionnalités, comme l’intégration de blocs de code, afin de répondre à mes besoins spécifiques.
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>Diagramme d'Architecture</strong></h5>
                </Col>
                <Col>
                    Un diagramme illustrant la relation entre les différentes composants de la plateforme.
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
                    <h5><strong>Processus de déploiement</strong></h5>
                </Col>
                <Col>
                    <ul>
                        <li>Création d’un projet frontend avec React, TypeScript et Vite.</li>
                        <li>Mise en place d’une API backend avec Node.js et Express.js.</li>
                        <li>Configuration d’un fichier .htaccess pour gérer le routage et les proxys.</li>
                        <li>Tests approfondis sur le serveur Apache (connexion, création d’articles, déconnexion, etc.).</li>
                    </ul>                     
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>Captures d'écran</strong></h5>                
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
                    <h5><strong>Exemples de Code</strong></h5> 
                </Col>
                <Col>
                    Customisation de l’éditeur de texte
                </Col>
                <Col>
                    <CodeSample />
                </Col>
                <Col></Col>
                <Col>
                    Contrôleur backend pour la création d'un nouvel article
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
                    <h5><strong>Leçons apprises</strong></h5> 
                </Col>
                <Col>
                    Ce projet m’a permis de comprendre les subtilités du déploiement d’une application full-stack dans un environnement professionnel. Il m’a également appris à résoudre des problèmes complexes liés au déploiement et à la configuration des serveurs.
                </Col>
                <Col>
                    Commencer par déployer une version rudimentaire a été une approche stratégique, car cela m’a permis d’identifier les dysfonctionnements de manière ciblée tout en montrant une version fonctionnelle de l’application. Utiliser GitHub pour gérer les sauvegardes s’est avéré précieux lorsque j’ai dû restaurer des fichiers après des erreurs.
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col>
                    <h5><strong>Conclusion</strong></h5> 
                </Col>
                <Col>
                    Au fur et à mesure que mes compétences en développement se perfectionnent, cette plateforme continuera d’évoluer. Elle répondra à mes besoins croissants et représentera une vitrine de mes compétences techniques. J’ai confiance en ce projet, car il n’est pas seulement un exercice de codage, mais une application que j’utilise activement pour documenter mon parcours et enrichir mon portfolio.
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