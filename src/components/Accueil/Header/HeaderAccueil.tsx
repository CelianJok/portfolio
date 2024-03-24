import './HeaderAccueilStyle.scss';

function HeaderAccueil() {
    return (
        <div className='HeaderAccueil'>
            <div>
                <img src={"src/components/Accueil/Header/images/Moi.jpg"} alt="Photo de moi" />
            </div>

            <div>
                <h1>Célian Granjon</h1>
                <h2>
                    Étudiant à l'IUT2 de Grenoble en BUT informatique <br />
                    1ère année
                </h2>
            </div>
            
        </div>
    )
}

export default HeaderAccueil;