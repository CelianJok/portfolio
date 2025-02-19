import './MainProjets.scss';
import * as React from 'react';
import Modal from './ModalProject';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

interface Project {
    title: string;
    description: string;
    box: string;
    date: string;
    type: string;
    mainImage: string[];
    images: string[];
  }

interface MainProjetsProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainProjets({ open, setOpen }: MainProjetsProps) {
    const [selectedProject, setSelectedProject] = React.useState<Project | undefined>();

    const projects = [
        {
            title: "Ma Route Mon Village",
            description: "Ma Route Mon Village est un projet d'application mobile développé dans le cadre d'une SAE au sein de l'IUT2 informatique de Grenoble. Le but de cette SAE était de valoriser le patrimoine français. Notre application propose à ses utilisateurs de visiter des villages remarquables situés autour d'un long itinéraire en voiture. Au lieu de faire des arrêts sur des aires d'autoroute, souvent trop peu intéressantes, les vacanciers feraient escale dans ces villages patrimoniaux pour y faire une petite pause. Notre application propose aussi de trier les villages selon les services qu'ils contiennent, comme des restaurants, des hôtels etc. L'itinéraire s'adapterait ainsi selon les villages sélectionnés, et il sera possible pour les utilisateurs d'ouvrir le trajet dans des applications de GPS connus comme Google Maps ou encore Waze. Enfin, il est aussi possible pour l'utilisateur de sélectionner différents types de véhicule qui influenceront le trajet et les services proposés, comme une voiture électrique, une moto ou encore les poids lourds comme les camping-cars.",
            box: 'smallBox',
            date: '2025',
            type: 'Académique',
            mainImage: ['/Ma Route Mon Village/2.jpg'],
            images: ['/Ma Route Mon Village/1.jpg', '/Ma Route Mon Village/2.jpg', '/Ma Route Mon Village/3.jpg']
        },
        {
          title: "PrintMyName",
          description: "PrintMyName est un projet entrepreneurial auquel je participe avec deux de mes amis. Le but est de vendre des étiquettes thermocollantes entièrement personnalisables, principalement aux parents qui ont des enfants en bas âge pour marquer avec leur nom leurs vêtements. J'ai été chargé de concevoir le site web, notamment la page produit avec les éléments personnalisables qui ont été fait en HTML/CSS/JavaScript et à l'aide de la plateforme Shopify. J'ai aussi élaboré l'automatisation de l'impression des étiquettes à partir d'une commande client sur les imprimantes de Seripress, une entreprise d'impression sérigraphique de renommée européenne. Notre site web est entièrement fonctionnel et il est tout à fait possible de commander des étiquettes.",
          box: 'largeBox',
          date: '2024',
          type: 'Entrepreneurial',
          mainImage: ['/PrintMyName/1.png'],
          images: ['/PrintMyName/1.png', '/PrintMyName/2.png']
        },
        { 
            title: "BuJo",
            description: "BuJo est une application mobile sur Android de To-Do List et de journal intime que je développe depuis maintenant 2023. J'ai utilisé comme outils de développement Android Studio couplé avec le langage de programmation Kotlin, le framework natif Jetpack Compose et la bibliothèque Room qui utilise SQLite. BuJo est mon plus gros projet personnel dans le domaine de l'informatique jusqu'à aujourd'hui.",
            box: 'largeBox',
            date: '2024',
            type: 'Personnel',
            mainImage: ['/BuJo/3.jpg', '/BuJo/5.jpg', '/BuJo/7.jpg'],
            images: ['/BuJo/1.jpg', '/BuJo/2.jpg', '/BuJo/3.jpg', '/BuJo/4.jpg', '/BuJo/5.jpg', '/BuJo/6.jpg', '/BuJo/7.jpg']
        },
        {
            title: "Ortaf",
            description: "J'ai rejoint le projet personnel d'un ami qui développait déjà sa propre application mobile en lien avec un portefeuille bancaire numérique. J'ai été assigné au développement de l'insertion des dates dans les transactions ainsi que les fréquences d'une transaction (Une seule fois, une fois par semaine etc...). Nous utilisons le langage de programmation Kotlin, les bibliothèques Android Compose et Room. Pour la base de données, nous stockons sur le téléphone directement.",
            box: 'smallBox',
            date: '2024',
            type: 'Personnel',
            mainImage: ['/Ortaf/1.jpg'],
            images: ['/Ortaf/1.jpg', '/Ortaf/2.jpg', '/Ortaf/3.jpg', '/Ortaf/4.jpg', '/Ortaf/5.jpg']
        },
        {
            title: "Classification automatique",
            description: "Pendant toute une semaine, nous avons travaillé en binôme sur projet de groupe dans le cadre d'une SAE durant notre première année de BUT informatique. Le but était de concevoir un programme fiable et rapide d'exécution qui classifie automatiquement des dépêches qui nous étaient données. Ainsi, ce modèle était une amorce dans la création d'une intelligence artificielle.",
            box: 'smallBox',
            date: '2023',
            type: 'Académique',
            mainImage: [],
            images: []
        },
        {
            title: "Site web institutionnel pour Atos",
            description: "Lors d'une séance de SAE au premier semestre de l'année de BUT, nous avons réunis le maximum d'informations sur l'entreprise Atos avec un groupe de quatre personnes, que ce soit au niveau de l'organisation de l'entreprise, de sa politique économique ou encore écologique. Nous avons ensuite établit un recueil de besoins grâce à ces informations. Par la suite, nous avions plusieurs séances pour réaliser une maquette d'un site web vitrine d'Atos à l'égard d'élèves de Troisième en recherche d'un stage, site que nous avons dû développer de A à Z en HTML/CSS en se basant sur la maquette.",
            box: 'largeBox',
            date: '2023',
            type: 'Académique',
            mainImage: ['/Atos/Accueil.png', '/Atos/Contact.png'],
            images: ['/Atos/Accueil.png', '/Atos/Projets.png', '/Atos/Histoire.png', '/Atos/Contact.png']
        },
        {
            title: "Jeu de l'oie",
            description: "Le jeu de l'oie est un projet de groupe réalisé dans le cadre de la spécialité Numérique et Sciences informatiques (NSI) en Première. Nous étions quatre à développer le célèbre jeu de société du même nom grâce à la bibliothèque Pygame en Python. Le jeu se jouait au tour-par-tour, et un total de quatre joueurs étaient permis sur un même ordinateur.",
            box: 'largeBox',
            date: '2022',
            type: 'Académique',
            mainImage: ["/Jeu de l'oie/1.png", "/Jeu de l'oie/2.png"],
            images: ["/Jeu de l'oie/1.png", "/Jeu de l'oie/2.png", "/Jeu de l'oie/3.png"]
        }
    ];

    const handleOpen = (project: { title: string, description: string, box: string, date: string, type: string, mainImage: string[], images: string[] }) => {
      setSelectedProject(project);
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };  

    const getImageClassName = (title: string) => {
      let className = '';
  
      if (title === "BuJo" || title === "Ortaf" || title === "Ma Route Mon Village") {
        className = 'image-small ';
      } else if (title === "PrintMyName") {
        className = 'image-very-large';
      } else {
        className = 'image-large ';
      }
  
      return className.trim();
    };
  
  
    return (
      <div className='Projets'>
        <h1>Mes projets</h1>
        <div className='projetsContainer'>
  {projects.map((project, index) => (
    index >= 4 ? (
      <ScrollAnimation key={index} animateIn="fadeIn" animateOnce={true}>
        <div className={project.box} onClick={() => handleOpen(project)}>
          <div className='headerBox'>
            <span className='spanDate'>
              <p>{project.date}</p>
            </span>

            <span className={project.type === 'Personnel' ? 'spanPerso' : (project.type === 'Entrepreneurial' ? 'spanPro' : 'spanAca')}>
              <p>{project.type}</p>
            </span>
          </div>
          <h2>{project.title}</h2>
          <div className='mainImages'>
            {project.mainImage.map((image, imgIndex) => (
              <img key={imgIndex} src={'Projets/images' + image} alt={project.title} className={getImageClassName(project.title)} />
            ))}
          </div>
          <p>{project.description}</p>
          <button className="voirPlusButton">
            Voir plus
          </button>
        </div>
      </ScrollAnimation>
    ) : (
      <div key={index} className={project.box} onClick={() => handleOpen(project)}>
        <div className='headerBox'>
          <span className='spanDate'>
            <p>{project.date}</p>
          </span>

          <span className={project.type === 'Personnel' ? 'spanPerso' : (project.type === 'Entrepreneurial' ? 'spanPro' : 'spanAca')}>
            <p>{project.type}</p>
          </span>
        </div>
        <h2>{project.title}</h2>
        <div className='mainImages'>
          {project.mainImage.map((image, imgIndex) => (
            <img key={imgIndex} src={'Projets/images' + image} alt={project.title} className={getImageClassName(project.title)} />
          ))}
        </div>
        <p>{project.description}</p>
        <button className="voirPlusButton">
          Voir plus
        </button>

      </div>
    )
  ))}
</div>

        <Modal open={open} onClose={handleClose} project={selectedProject} />
      </div>
  
        
    )
}