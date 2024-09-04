import PortfolioPage from "./PortfolioPage";
import './LandingPage.css';

export default function LandingPage() {
    return(
        <div>
            <div id="landing" className="landing-container d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1>Hi there, I am Rin</h1>
                    <p>I am a fullstack developer whose main motivation is to make users' daily lives easier.
                    I have a taste for continuous learning, problem solving and understanding complex subjects.</p>
                    <img src="src/assets/rinkaku.png" alt="Rin" className="img-fluid mb-4"/><br/>
                    <a className="btn btn-primary btn-lg" href="#work" role="button">View My Works</a>
                </div>
            </div>

            <div id="work" className="container mt-5">
                <PortfolioPage />            
            </div>
        </div>
    );
}