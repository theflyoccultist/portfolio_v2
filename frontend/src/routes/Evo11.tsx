import { Col, Container, Row } from "react-bootstrap";
import AnimatedButton from "../components/AnimatedButton";
import { Divider } from "../components/Divider";
import './Evo11.css'

export default function Evo11() {
    return (
        <Container id="evo11" className="evo11-container">
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h2>Evo 11</h2>
            </div>
            
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h5>Application Mobile + Responsive Website pour affirmation transgenre</h5>
                <h5  style={{ fontWeight: "bold" }}>Projet de Portfolio UX Design</h5>
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
                    <strong>Le Projet: </strong>Evo11 est une application mobile ayant pour objectif de venir en aide aux personnes transgenres qui ont besoin d'affirmations et d'un sens de progrès dans leur vie quotidienne. Son développement et sa recherche s'est faite uniquement au sein de sa communauté.
                </Col>
                <Col>
                    <strong>Problématique: </strong>Bien qu’il existe des sites de ressources inclusifs pour permettre aux personnes transgenres de s’informer des étapes de leur transition,  il n’existe pas d’application pour les accompagner au quotidien et à se repérer dans leur parcours.
                </Col>
                <Col>
                    <strong>Objectif: </strong>Créer une application mobile pour aider les utilisateurs de cette communauté à s’affirmer au cours du temps, quelque chose qui les aideraient à garder une trace de leurs petits progrès et victoires quotidiennes.
                </Col>
                <Col></Col>
                <Col>
                    <strong>Mon rôle: </strong>Lead UX designer pour l'application mobile, et le responsive website pour mobile iOS et PC.
                </Col>
                <Col>
                    <strong>Responsabilités : </strong>Conduite des interviews, création de wireframes papier et digital, prototypes basse et haute fidélité, conduite des études d'usabilité, responsive design et prise en compte de l'accessibilité.
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
                    Avant de commencer les prototypes, j’ai mené des recherches utilisateur dans mon entourage. Trouver des participants afin de répondre à mes nombreuses questions - ayant pour objectif de comprendre leurs joies et leurs frustrations, à été un réel défi. Les réponses obtenues ont cependant values l’investissement personnel.
                </Col>
                <Col>
                    Les personnes interrogés étaient dans des étapes diverses de leur transition, avec des types de parcours très différentes d’un individu à l’autre. Mais tous avaient des étapes à anticiper, à s’en rappeler, où sur lesquels ils avaient besoin d’en savoir plus.
                </Col>
                <Col>
                    Que ce soit une affirmation sociale, médicale où légale, il pouvait aussi être difficile de se repérer et de connaître les occupations nécessaires de leur propre parcours.
                </Col>
                <Col></Col>
                <Col>
                    <u>1. Exploration de l'identité :</u><br/>
                    - Comment décririez-vous votre identité de genre et comment a-t-elle évolué au fil du temps ?<br/>
                    - Pouvez-vous partager des moments ou des réalisations charnières liés à votre identité de genre ?
                </Col>
                <Col>
                    <u>2. Parcours de transition :</u><br/>
                    - Quelles étapes de votre transition ont été les plus importantes ou les plus difficiles ?<br/>
                    - Y a-t-il des aspects spécifiques du processus de transition sur lesquels vous souhaiteriez avoir plus de soutien ou d'informations ?
                </Col>
                <Col>
                    <u>3. Systèmes d'assistance :</u><br/>
                    - Qui a été une source de soutien cruciale pour vous tout au long de votre parcours en matière de genre ?<br/>
                    - De quelles manières préférez-vous recevoir le soutien de vos amis, de votre famille ou de la communauté ?
                </Col>
                <Col>
                    <u>4. Utilisation de la technologie et des applications :</u><br/>
                    - Utilisez-vous actuellement des applications ou des plateformes en ligne pour obtenir une assistance liée à votre identité de genre ?<br/>
                    - Quelles fonctionnalités trouvez-vous les plus utiles ou les plus manquantes dans les plateformes existantes ?
                </Col>
                <Col>
                    <u>5. Défis quotidiens :</u><br/>
                    - Quels sont les défis courants auxquels vous êtes confrontés dans votre vie quotidienne liés à votre identité de genre ?<br/>
                    - Y a-t-il des situations spécifiques où vous ressentez le besoin d'une validation ou d'une affirmation supplémentaire ?
                </Col>
                <Col>
                    <u>6. Préférences d'affirmation :</u><br/>
                    - Comment recherchez-vous et recevez-vous personnellement l’affirmation et la validation de votre identité de genre ?<br/>
                    - Y a-t-il des affirmations ou des messages spécifiques qui vous interpellent le plus ?
                </Col>
                <Col>
                    <u>7. Engagement communautaire :</u><br/>
                    - De quelles manières interagissez-vous avec la communauté transgenre, à la fois en ligne et hors ligne ?<br/>
                    - Y a-t-il des événements communautaires, des forums ou des groupes de soutien auxquels vous participez activement ?
                </Col>
                <Col>
                    <u>8. Problèmes de confidentialité et de sécurité :</u><br/>
                    - Quelle importance accordez-vous à la confidentialité et à la sécurité lorsque vous utilisez des applications ou des plateformes liées à votre identité de genre ?<br/>
                    - Y a-t-il des mesures ou des fonctionnalités spécifiques que vous aimeriez voir pour garantir un espace en ligne sécurisé ?
                </Col>
                <Col>            
                    <u>9. Intersectionnalité :</u><br/>
                    - Comment d'autres aspects de votre identité, tels que la race, l'origine ethnique ou le statut socio-économique, se recoupent-ils avec votre expérience en tant qu'individu transgenre ?<br/>
                    - Y a-t-il des défis ou des expériences uniques auxquels vous êtes confrontés en raison de ces intersections ?
                </Col>
                <Col>
                    <u>10. Aspirations futures :</u><br/>
                    - Quelles sont vos aspirations pour l'avenir concernant votre identité de genre et votre implication communautaire ?<br/>
                    - Selon vous, existe-t-il des outils ou des ressources spécifiques qui pourraient améliorer votre parcours ?
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>Audit Compétitif</strong></h5>
                </Col>
                <Col>
                    Pour cet audit en particulier, je ne choisirais pas réellement le terme "compétitif" puisque le projet à pour but de servir au bien être de ma communauté. Il s'agirait plutôt de sources d'inspirations. J'ai pu visiter des pages de type hub d'informations pour mon site web, et j'ai pu tester des applications existantes qui visent l'affirmation transgenre.
                </Col>
                <Col>
                    C'est à cette occasion-mà que j'ai pu découvrir qu'il n'existait pas d'application de ce type en français, où disponible sur le territoire européen.
                </Col>
                <Col>
                    Lien vers l'audit
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className='align-items-center text-left'>
                <Col>
                    <h5><strong>User Persona</strong></h5>
                </Col>
                <Col>
                    En regroupant les résultats de mes interviews initiaux, je fus capable de créer deux personas, Annabelle et Damien. Il s'agissait de personas avec des objectifs différents, et pour l'idée d'application et les moyens que j'avais,  c'était Annabelle qui me convenait le mieux.
                </Col>
                <Col className="text-center">
                    <img src="https://www.rinkakuworks.com/public/images/evo11/annabelle.webp" alt="annabelle user persona" loading="lazy"/>
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
                <Col className="text-center">
                    <h5><strong>Processus d'idéation: crazy eights et page d'accueil</strong></h5>
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
                    <h5><strong>Prototype Basse Fidélité</strong></h5>
                </Col>     
            </Row>
            <Row xs={1} md={2} lg={2} className="text-left">
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/lowfiwelcomepage.webp" alt="low fidelity prototype welcome page" loading="lazy"/>
                </Col>
                <Col>
                    <br/>Durant la conception du wireframe papier, j'ai réfléchi à une page d'accueil regroupant tous les modules en un seul endroit. Je suis resté sur cette idée lors de la transition vers le format digital afin de proposer une interface simple et intuitive.<br/><br/>

                    Trois modules principaux structurent la page :<br/>
                        <ul>
                            <li>Module photos : Permet d’épingler des images inspirantes ou personnelles. Le bouton "Edit" facilite leur gestion.</li>
                            <li>Routine matinale : Une checklist centralisée pour suivre des tâches quotidiennes (hydratation, maquillage, etc.), avec la possibilité de personnalisation via "Edit".</li>
                            <li>Checklist longue durée : Regroupe des objectifs à moyen ou long terme (ex. : "Trouver un emploi"), affichés horizontalement pour les différencier des routines journalières.</li>
                        </ul><br/>
                        Enfin, pour ajouter une touche de motivation supplémentaire, une section de citations inspirantes ("Daily Quotes") est intégrée en haut de la page. Cela permet de démarrer la journée avec une pensée positive, tout en renforçant l'aspect chaleureux et personnalisé de l'application.
                </Col>        
            </Row>

            <Row xs={1} md={1} lg={1}>
                <Col></Col>
                <Col>
                    Concernant les écrans restantes, la simplicité d’utilisation fut ma première priorité.<br/>
                    Je m’attendais aussi à ce que l’utilisateur passe la majorité de son temps sur la page d’accueil, décidant donc de garder le design des autres pages beaucoup plus minimaux.
                </Col>  
            </Row>
            <Row>
                <img src="https://www.rinkakuworks.com/public/images/evo11/lowfifull.webp" className="shrink" alt="full low fidelity prototype" loading="lazy"/>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Divider />
                <Col></Col> 
                <Col>
                    <h5><strong>Etude d'usabilité</strong></h5><br/>
                </Col>
                <Col>
                    <strong>Type d'étude: </strong>Etude d'usabilité modérée<br/>
                </Col>
                <Col>
                    <strong>Lieu: </strong>Nice et Antibes<br/>
                </Col>
                <Col>
                    <strong>Participants: </strong>4 Candidats<br/>
                </Col>
                <Col>
                    <strong>Longueur: </strong>Entre 30 et 60 minutes<br/>
                </Col>
                <Col>
                    Pour cet étude-ci, la version basse fidélité du prototype fut testé, m'aidant ainsi à déterminer les révisions nécessaires pour rendre l'expérience de l'application plus intuitif et plaisant. Voici quelques trouvailles :
                </Col>
                <Col>
                    <strong>Sécurité: </strong> La confidentialité et la sécurité des données est particulièrement importante parmi les candidats. Il faudrait que l'application puisse fonctionner en local, sans collecte de données et sans connection internet.<br/>
                </Col>
                <Col>
                    <strong>Continuité: </strong>Il y avait des soucis de continuité qui fut remarquée. Chose qui peut être résolu en utilisant la même forme de boutons pour des thèmes similaires. <br/>
                </Col>
                <Col>
                    <strong>Simplification: </strong>Dans la version basse fidélité, j’avais inclus une page “entreprises” qui permettait de postuler à des emplois. Il était préférable de la supprimer pour garantir la simplicité de mon app. <br/>
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
                    <h5><strong>Kit UI</strong></h5><br/>
                    L'orange représente les tâches en cours et le vert représente les tâches terminées.<br/>
                    A part ceux-là, je fis un choix volontaire de garder les couleurs minimaux.
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
                    <h5><strong>Prototype Haute Fidélité</strong></h5><br/>                       
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
                    <h5><strong>Responsive Website (PC)</strong></h5><br/>                     
                </Col>
                <Col>
                    Après le prototype haute fidélité terminé, je fus mis au défi de créer également des designs pour un responsive website. Il s'agit simplement d'un site web qui s'adapte aux tailles différents d'écran, pour que ça reste ergonimique facile à lire sur portable, tablette où PC.
                </Col>
                <Col>
                    Puisque le type d’utilisation de mon application correspond davantage aux téléphones, je décidai de voir le site web comme un petit coin pour faire connaître cette mobile app.
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/websitepc.webp" alt="responsive website for PC" loading="lazy"/> 
                </Col>
                <Col>
                    <h5><strong>Responsive Website (iOS)</strong></h5><br/>                    
                </Col>
                <Col>
                    Ce prototype montre les étapes finales de la création d'un design web responsive, conçu pour offrir une navigation claire et intuitive quelle que soit la taille de l'écran. Les différentes pages illustrées ici (Accueil, Contact, Info Hub, Notre Mission) présentent un aperçu cohérent et ergonomique pour l'utilisateur, tout en mettant en avant les fonctionnalités principales de l'application.
                </Col>
                <Col>
                L'accent a été mis sur une expérience utilisateur adaptée principalement aux téléphones, puisque l'application elle-même cible avant tout une utilisation mobile. Chaque section du site est pensée comme un pont vers l'application, permettant aux visiteurs de découvrir ses objectifs, ses valeurs, et ses outils.
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/websitemobile.webp" className="shrink" alt="responsive website for mobile" loading="lazy"/> 
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1}>
                <Col>
                    Voici le plan du site, comme je j'ai intentionné:
                </Col>
                <Col>
                    <img src="https://www.rinkakuworks.com/public/images/evo11/sitemap.webp" alt="sitemap for responsive website" loading="lazy"/> 
                </Col>
                <Col></Col>
                <Divider />
                <Col></Col>
            </Row>

            <Row xs={1} md={1} lg={1} className="text-left">
                <Col><h5><strong>Conclusions</strong></h5><br/></Col>
                <Col>
                    <strong>Impact: </strong>Je suis contente d’avoir pu mener ce projet à bien. Je pense qu’il à pu me faire découvrir des histoires nouvelles, différentes galères qui en valaient bien la peine. Ce métier me passione, je souhaiterais faire davantage de projets comme ceci dans l’avenir.<br/>
                </Col>
                <Col>
                    <strong>Ce que j’ai appris: </strong>Peut être plus de compassion. Avoir davantage de courage lorsque je demande de faire des études d’usabilité. Se rendre compte que mon entourage était bien plus enthousiaste de ce projet que je ne le pensais. Je les embêterai pour de futurs études.<br/>
                </Col>
                <Col></Col>
                <Col>
                    <ul>
                        <li>En parallèle à mes études d’UX design, je suis des cours de programmation full stack et de développement d’application mobile. Je pourrais essayer de coder ce projet dans un format application iOS.</li>
                        <li>Il est possible qu’il y ait des mises à jour pour enrichir l’application de contenu, si c’est un projet que je souhaite continuer.</li>
                        <li>Je peux peut être aussi penser à des idées de thèmes. Dans l’onglet “Paramètres” du prototype il y a une option de thèmes, et il serait peut être amusant de jouer avec d’autres couleurs où des textures.</li>
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