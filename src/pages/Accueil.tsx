import HeaderAccueil from "../components/Accueil/Header/HeaderAccueil";
import Compétences from "../components/Accueil/Compétences/Compétences";
import Intérêts from "../components/Accueil/Intérêts/Intérêts";
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

export function Accueil() {
    return (
        <>
            <HeaderAccueil />

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <Compétences />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <Intérêts />
            </ScrollAnimation>
        </>
    )
    
}