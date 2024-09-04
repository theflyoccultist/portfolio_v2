import { Outlet } from "react-router-dom";
import NavBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}