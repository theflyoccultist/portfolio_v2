import WorkCard from "../components/WorkCard";
import "../components/WorkCard.css";

export default function PortfolioPage() {
    return(
        <div className="container mt-5">
                <div className="justify-content-center">
                    <WorkCard 
                        imageSrc="https://rinkakuworks.com/public/images/simpleplan.png"
                        appName="Simple Plan"
                        roles="UX/UI • User Research • Dev FullStack"
                        description="An app for concert ticket reservations"
                        link="#"
                    />
                    <WorkCard
                        imageSrc="https://rinkakuworks.com/public/images/evo11.png"
                        appName="Evo 11"
                        roles="UX/UI • User Research • Dev FullStack"
                        description="A wellness app for gender transition"
                        link="/evo11"
                    />
                    <WorkCard 
                        imageSrc="https://rinkakuworks.com/public/images/vanity-vixen.png"
                        appName="Vanity Vixen"
                        roles="UX/UI • User Research • Dev FullStack"
                        description="An app where users can find tuorials and interact"
                        link="#"
                    />
                </div>
        </div>
    )
}