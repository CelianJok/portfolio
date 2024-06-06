import { NavLink } from "react-router-dom";
import './NavBarStyle.scss';

function NavBar() {
    return(
        <nav>
            <div className="accueil">
                <NavLink className={"navItem"} end to="/portfolio/">
                    <span>
                        <img src={"NavBar/images/Accueil.png"} alt="Icône d'accueil" />
                    </span>
                    Accueil
                </NavLink>
            </div>

            <div className="formation">
                <NavLink className={"navItem"} to="/portfolio/formation">
                    <span>
                        <img src={"NavBar/images/Formation.png"} alt="Icône de formation" />
                    </span>
                    Ma formation
                </NavLink>
            </div>

            <div className="projets">
                <NavLink className={"navItem"} to="/portfolio/projets">
                    <span>
                        <img src={"NavBar/images/Projets.png"} alt="Icône de projets" />
                    </span>
                    Mes projets
                </NavLink>
            </div>

            <div className="contact">
                <NavLink className={"navItem"} to="/portfolio/contact">
                    <span>
                        <img src={"NavBar/images/Contact.png"} alt="Icône de contact" />
                    </span>
                    Me contacter
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;