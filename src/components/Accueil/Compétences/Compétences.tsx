import './CompétencesStyle.scss'

function Compétences() {
    return (
        <div className="Compétences">

            <h2>Compétences informatiques</h2>
            <div className='Info'>
                <div>
                    <h3>Langages de programmation</h3>
                    <ul>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/Java.png"} alt="Icône de Java" />
                            Java
                        </li>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/Kotlin.png"} alt="Icône de Kotlin" />
                            Kotlin
                        </li>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/HTML5.png"} alt="Icône de HTML5" />
                            HTML5
                        </li>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/CSS3.png"} alt="Icône de CSS3" />
                            CSS3
                        </li>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/React.png"} alt="Icône de React" />
                            React
                        </li>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/Python.png"} alt="Icône de Python" />
                            Python
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3>Base de données</h3>
                    <ul>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/PostgreSQL.png"} alt="Icône de PostgreSQL" />
                            PostgreSQL
                        </li>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/SQLite.png"} alt="Icône de SQLite" />
                            SQLite
                        </li>
                    </ul>
                </div>
                
            </div>
            
            <h2>Langues</h2>
            <div className='Langues'>
                <ul>
                    <li>
                        <img src={"src/components/Accueil/Compétences/images/France.png"} alt="Icône du drapeau français" />
                        Français : Langue maternelle
                    </li>
                    <li>
                        <img src={"src/components/Accueil/Compétences/images/Angleterre.png"} alt="Icône du drapeau anglais" />
                        Anglais : Niveau C1
                    </li>
                    <li>
                        <img src={"src/components/Accueil/Compétences/images/Allemagne.jpg"} alt="Icône du drapeau allemand" />
                        Allemande : Niveau LV2
                    </li>
                </ul>
            </div>       
            
        </div>
    );
}

export default Compétences;