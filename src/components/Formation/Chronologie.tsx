import { Chrono } from "react-chrono";
import './Chronologie.scss';

export default function Chronologie() {
  const items = [
    {
      title: "2023-2024",
      cardTitle: "1ère année de BUT Informatique",
      cardSubtitle:"IUT2 - Grenoble",
      cardDetailedText: "Je suis actuellement en 1ère année de BUT Informatique à l'IUT2 de Grenoble.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/components/Formation/images/iut2.jpg"
        }
      }
  }, {
      title: "2020-2023",
      cardTitle: "Baccalauréat Général Mention Très Bien",
      cardSubtitle:"Lycée Ferdinand Buisson - Voiron",
      cardDetailedText: "Durant ma scolarité au lycée, j'ai choisi en Première les spécialités Mathématiques, Physique-Chimie ainsi que Numérique et Sciences Informatiques (NSI). En Terminale, j'ai abandonné la Physique-Chimie et décidé de prendre l'option Mathématiques Expertes.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/components/Formation/images/lfb.jpg"
        }
      }
  }, {
    title: "2016-2020",
    cardTitle: "Brevet Mention Très Bien",
    cardSubtitle:"Collège Joseph Chassigneux - Vinay",
    cardDetailedText: "J'ai obtenu mon brevet des collèges avec mention Très Bien au collège Joseph Chassigneux à Vinay.",
    media: {
      type: "IMAGE",
      source: {
        url: "src/components/Formation/images/cjc.jpg"
      }
    }
  }
];

  return (
    <div>
      <Chrono items={items} theme={{
        secondary: 'lightskyblue',
      }} mode = "VERTICAL_ALTERNATING" disableToolbar />
    </div>
  )
}