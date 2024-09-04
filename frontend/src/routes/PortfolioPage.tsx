import WorkCard from "../components/WorkCard";
import "../components/WorkCard.css";

export default function PortfolioPage() {
    return(
        <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <WorkCard 
                        imageSrc="src/assets/simpleplan.png"
                        appName="Simple Plan"
                        roles="UX/UI • User Research • Fullstack Developer"
                        description="An app for concert ticket reservations"
                    />
            </div>
        </div>
    )
}