import HeaderAccueil from "../components/Accueil/Header/HeaderAccueil";
import Compétences from "../components/Accueil/Compétences/Compétences";
import Intérêts from "../components/Accueil/Intérêts/Intérêts";

export function Accueil() {
    return (
        <>
            <HeaderAccueil />
            <Compétences />
            <Intérêts />
        </>
    )
    
}