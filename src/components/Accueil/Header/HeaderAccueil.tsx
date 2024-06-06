import './HeaderAccueilStyle.scss';

function HeaderAccueil() {
    return (
        <div className='HeaderAccueil'>
            <div>
                <img src={"/Header/images/Moi.jpg"} alt="Photo de moi" />
            </div>

            <div className='presentation'>
                <h1>Célian Granjon</h1>
                <h2>
                    Étudiant à l'IUT2 de Grenoble en BUT informatique <br />
                    Première année
                </h2>
                <p>Bonjour ! Je m'appelle Célian Granjon, étudiant en première année de BUT
                    informatique à l'IUT2 de Grenoble. Ayant commencé la programmation en
                    autodidacte durant le confinement, je souhaite aujourd'hui devenir développeur
                    d'applications mobiles.
                </p>
                <div className='contact'>
                    <a title='CelianJok' href="https://github.com/CelianJok" target='_blank'>
                        <img src={"src/components/Accueil/Header/images/Github.png"} alt="Image de Github" />
                    </a>
                    <a title='Celian.Granjon@etu.univ-grenoble-alpes.fr' href="mailto: Celian.Granjon@etu.univ-grenoble-alpes.fr" target='_blank'>
                        <img src={"src/components/Accueil/Header/images/Mail.png"} alt="Image de mail" />
                    </a>
                    <a title='06 13 89 90 94' href="tel: 06 13 89 90 94" target='_blank'>
                        <img src={"src/components/Accueil/Header/images/Tel.png"} alt="Image de téléphone" />
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderAccueil;