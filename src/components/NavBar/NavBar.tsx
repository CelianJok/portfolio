import { NavLink } from "react-router-dom";
import './NavBarStyle.scss';

function NavBar() {
    return(
        <nav>
            <div className="accueil">
                <NavLink className={"navItem"} to="/">
                    <span>
                        <img src={"src/components/NavBar/images/Accueil.png"} alt="Icône d'accueil" />
                    </span>
                    Accueil
                </NavLink>
            </div>

            <div className="formation">
                <NavLink className={"navItem"} to="/formation">
                    <span>
                        <img src={"src/components/NavBar/images/Formation.png"} alt="Icône de formation" />
                    </span>
                    Ma formation
                </NavLink>
            </div>

            <div className="projets">
                <NavLink className={"navItem"} to="/projets">
                    <span>
                        <img src={"src/components/NavBar/images/Projets.png"} alt="Icône de projets" />
                    </span>
                    Mes projets
                </NavLink>
            </div>

            <div className="contact">
                <NavLink className={"navItem"} to="/contact">
                    <span>
                        <img src={"src/components/NavBar/images/Contact.png"} alt="Icône de contact" />
                    </span>
                    Me contacter
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;