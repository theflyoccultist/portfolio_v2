import WorkCard from "../components/WorkCard";
import "../components/WorkCard.css";

export default function PortfolioPage() {
    return(
        <div className="container mt-5">
                <div className="justify-content-center">
                    <WorkCard 
                        imageSrc="https://rinkakuworks.com/public/images/simpleplan/simpleplan.webp"
                        appName="Simple Plan"
                        roles="UX Designer • Recherche Utilisateurs"
                        description="Application Mobile de réservation de concerts, pour une salle de concert locale"
                        link="/simpleplan"
                    />
                    <WorkCard
                        imageSrc="https://www.rinkakuworks.com/public/images/evo11/evo11.webp"
                        appName="Evo 11"
                        roles="UX Designer • Recherche Utilisateurs"
                        description="Application Mobile + Responsive Website pour affirmation transgenre"
                        link="/evo11"
                    />
                    <WorkCard 
                        imageSrc="https://rinkakuworks.com/public/images/vanityvixen/vanity-vixen.webp"
                        appName="Vanity Vixen"
                        roles="UX Designer • Recherche Utilisateurs"
                        description="Responsive Website pour des tutoriels de maquillage"
                        link="/vanityvixen"
                    />
                </div>
        </div>
    )
}