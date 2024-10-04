import './Chronologie.scss';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Chronologie() {
  return (
    <div className='Chronologie'>
      <h1>Ma formation</h1>
        <div className='parent right'>
          <div className='container left'>
            <div className='content'>
              <h2>2ème année de BUT Informatique</h2>
              <h3>IUT2 - Grenoble</h3>
              <p>Je suis actuellement en 2ème année de BUT Informatique à l'IUT2 de Grenoble.
                J'ai choisi pour cette année le parcours Réalisation
                d'applications : conception, développement, validation.
              </p>
              <img src="Formation/images/iut2.jpg" alt="" />
            </div>
          </div>

          <div className='date'>
            <p>2023-2025</p>
          </div>
        </div>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className='parent left'>
          <div className='date left'>
              <p>2020-2023</p>
          </div>

          <div className='container right'>
            <div className='content'>
              <h2>Baccalauréat Général Mention Très Bien</h2>
              <h3>Lycée Ferdinand Buisson - Voiron</h3>
              <p>Durant ma scolarité au lycée, j'ai choisi en Première les spécialités Mathématiques, 
                Physique-Chimie ainsi que Numérique et Sciences Informatiques (NSI). 
                En Terminale, j'ai abandonné la Physique-Chimie et décidé de prendre l'option Mathématiques Expertes.</p>
              <img src="Formation/images/lfb.jpg" alt="" />
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className='parent right'>
          <div className='container left'>
            <div className='content'>
              <h2>Brevet Mention Très Bien</h2>
              <h3>Collège Joseph Chassigneux - Vinay</h3>
              <p>J'ai obtenu mon brevet des collèges avec mention Très Bien au collège Joseph Chassigneux à Vinay.</p>
              <img src="Formation/images/cjc.jpg" alt="" />
            </div>
          </div>

          <div className='date'>
            <p>2016-2020</p>
          </div>
        </div>
      </ScrollAnimation>
      
    </div>
  )
}