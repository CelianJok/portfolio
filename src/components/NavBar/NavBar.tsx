import { NavLink } from "react-router-dom";
import './NavBarStyles.scss';

function NavBar() {
    return(
        <nav>
            <div className="accueil">
                <NavLink className={"navItem"} to="/">
                    <img src={"src/components/NavBar/Accueil.png"} alt="Image d'accueil" />
                    Accueil
                </NavLink>
            </div>

            <div className="parcours">
                <NavLink className={"navItem"} to="/parcours">
                    <img src={"src/components/NavBar/Parcours.png"} alt="Image de parcours" />
                    Mon parcours
                </NavLink>
            </div>

            <div className="projets">
                <NavLink className={"navItem"} to="/projets">
                    <img src={"src/components/NavBar/Projets.png"} alt="Image de projets" />
                    Mes projets
                </NavLink>
            </div>

            <div className="contact">
                <NavLink className={"navItem"} to="/contact">
                    <img src={"src/components/NavBar/Contact.png"} alt="Image de contact" />
                    Me contacter
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;