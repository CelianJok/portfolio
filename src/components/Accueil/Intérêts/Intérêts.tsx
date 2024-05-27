import './Intérêts.scss'

export default function Intérêts() {
  return (
    <div className="Intérêts">
      <h2>Intérêts personnels</h2>
      <div className="passions">
        <div>
            <img src={"src/components/Accueil/Intérêts/images/Badminton.jpg"} alt="Image de badminton" />
            <h3>Badminton</h3>
            <p>Le badminton est mon sport de référence. J'en ai fait en club durant trois ans,
                et j'ai continué à en faire grâce à l'association sportive de mon lycée, puis
                pendant mon temps libre depuis.
            </p>
        </div>
        
        <div>
            <img src={"src/components/Accueil/Intérêts/images/Randonnee.jpg"} alt="Image de randonnée" />
            <h3>Randonnée</h3>
            <p>La randonnée est une activité qui permet de me décompresser lorsque j'en ai besoin.
                Chaque été, et ce depuis trois ans, je pars marcher pendant une semaine sur le 
                chemin de Saint-Jacques de Compostelle. Nous faisons entre 20 à 25km par jour.
                Pour l'instant, nous sommes partis de du Puy-en-Velay pour arriver à Conques.
                Sinon, durant mon temps libre, je me promène souvent autour de chez moi.
            </p>
        </div>

        <div>
            <img src={"src/components/Accueil/Intérêts/images/Android.jpg"} alt="Image d'Android" />
            <h3>Programmation d'applications mobiles</h3>
            <p>
                Ma passion pour le développement d'applications mobiles a naturellement découlé
                de ma formation en autodidacte dans l'informatique en général pendant le 
                confinement. J'ai participé à plusieurs projets personnels en lien avec le 
                développement d'applications sur Android. Depuis, je continue encore de 
                programmer dans ce domaine, mon rêve étant de poster au moins une application
                sur le Play Store d'Android.
            </p>
        </div>
      </div>
    </div>
  );
}