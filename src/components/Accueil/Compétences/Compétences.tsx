import './CompétencesStyle.scss'

function Compétences() {
    return (
        <div className="Compétences">

            <h2>Compétences informatiques</h2>
            <div className='Info'>
                <div className='container'>
                    <h3>Langages de programmation</h3>
                    <ul>
                        
                        <li>
                            <img src={"Accueil/Compétences/images/Kotlin.png"} alt="Icône de Kotlin" />
                            <div className='progressBar'>
                                <span id='kotlin'></span>
                            </div>
                            <p>Kotlin</p>

                        </li>

                        <li>
                            <img src={"Accueil/Compétences/images/Java.png"} alt="Icône de Java" />
                            <div className='progressBar'>
                                <span id='java'></span>
                            </div>
                            <p>Java</p>
                        </li>

                        <li>
                            <img src={"Accueil/Compétences/images/React.png"} alt="Icône de React" />
                            <div className='progressBar'>
                                <span id='react'></span>
                            </div>
                            <p>React</p>
                        </li>

                        <li>
                            <img src={"Accueil/Compétences/images/HTML5.png"} alt="Icône de HTML5" />
                            <div className='progressBar'>
                                <span id='html5'></span>
                            </div>
                            <p>HTML5</p>
                        </li>
                        <li>
                            <img src={"Accueil/Compétences/images/CSS3.png"} alt="Icône de CSS3" />
                            <div className='progressBar'>
                                <span id='css3'></span>
                            </div>
                            <p>CSS3</p>
                        </li>
                        
                        <li>
                            <img src={"Accueil/Compétences/images/Python.png"} alt="Icône de Python" />
                            <div className='progressBar'>
                                <span id='python'></span>
                            </div>
                            <p>Python</p>
                        </li>
                        
                    </ul>
                </div>
                
                <div className='container'>
                    <h3>Base de données</h3>
                    <ul>
                        <li>
                            <img src={"Accueil/Compétences/images/PostgreSQL.png"} alt="Icône de PostgreSQL" />
                            <div className='progressBar'>
                                <span id='postgresql'></span>
                            </div>
                            <p>PostgreSQL</p>
                        </li>
                        <li>
                            <img src={"Accueil/Compétences/images/SQLite.png"} alt="Icône de SQLite" />
                            <div className='progressBar'>
                                <span id='sqlite'></span>
                            </div>
                            <p>SQLite</p>
                        </li>
                    </ul>
                </div>
                
            </div>
            
            <h2>Langues</h2>
            <div className='Langues'>
                <ul>
                    <li>
                        <img src={"Accueil/Compétences/images/France.png"} alt="Icône du drapeau français" />
                        Français : Langue maternelle
                    </li>
                    <li>
                        <img src={"Accueil/Compétences/images/Angleterre.png"} alt="Icône du drapeau anglais" />
                        Anglais : Niveau B2
                    </li>
                    <li>
                        <img src={"Accueil/Compétences/images/Allemagne.jpg"} alt="Icône du drapeau allemand" />
                        Allemand : Niveau LV2
                    </li>
                </ul>
            </div>       
            
        </div>
    );
}

export default Compétences;