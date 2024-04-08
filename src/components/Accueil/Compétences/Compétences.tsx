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
                            <img src={"src/components/Accueil/Compétences/images/Kotlin.png"} alt="Icône de Kotlin" />

                            <div className='progressBar'>
                                <span id='kotlin'></span>
                            </div>
                        </li>

                        <li>
                            <img src={"src/components/Accueil/Compétences/images/Java.png"} alt="Icône de Java" />

                            <div className='progressBar'>
                                <span id='java'></span>
                            </div>
                        </li>

                        <li>
                            <img src={"src/components/Accueil/Compétences/images/React.png"} alt="Icône de React" />
                            

                            <div className='progressBar'>
                                <span id='react'></span>
                            </div>
                        </li>

                        <li>
                            <img src={"src/components/Accueil/Compétences/images/HTML5.png"} alt="Icône de HTML5" />

                            <div className='progressBar'>
                                <span id='html5'></span>
                            </div>
                        </li>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/CSS3.png"} alt="Icône de CSS3" />

                            <div className='progressBar'>
                                <span id='css3'></span>
                            </div>
                        </li>
                        
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/Python.png"} alt="Icône de Python" />

                            <div className='progressBar'>
                                <span id='python'></span>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                
                <div>
                    <h3>Base de données</h3>
                    <ul>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/PostgreSQL.png"} alt="Icône de PostgreSQL" />

                            <div className='progressBar'>
                                <span id='postgresql'></span>
                            </div>
                        </li>
                        <li>
                            <img src={"src/components/Accueil/Compétences/images/SQLite.png"} alt="Icône de SQLite" />

                            <div className='progressBar'>
                                <span id='sqlite'></span>
                            </div>
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