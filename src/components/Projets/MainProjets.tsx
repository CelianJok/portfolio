import './MainProjets.scss';
import * as React from 'react';
import Modal from './ModalProject';

interface MainProjetsProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainProjets({ open, setOpen }: MainProjetsProps) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <div className='Projets'>
            <h1>Mes projets</h1>
            <div className='projetsContainer'>
                <div onClick={handleOpen} className='largeBox'>
                    <h2>BuJo</h2>
                    <p>BuJo est une application mobile sur Android de To-Do List et de journal intime que
                        je développe depuis maintenant 2023. J'ai utilisé comme outils de développement
                        Android Studio couplé avec le langage de programmation Kotlin, le framework natif
                        Jetpack Compose et la bibliothèque Room qui utilise SQLite. BuJo est mon plus gros 
                        projet personnel dans le domaine de l'informatique jusqu'à aujourd'hui.</p>
                </div>
                <div className='smallBox'>
                    <h2>PorteTaFeuille</h2>
                    <p>J'ai rejoint le projet personnel d'un ami qui développait déjà sa propre application
                        mobile en lien avec un portefeuille bancaire numérique. J'ai été assigné au développement
                        de l'insertion des dates dans les transactions ainsi que les fréquences d'une 
                        transaction (Une seule fois, une fois par semaine etc...). Nous utilisons le 
                        langage de programmation Kotlin, les bibliothèques Android Compose et Room.
                        Pour la base de données, nous stockons sur le téléphone directement.</p>
                </div>
                <div className='smallBox'>
                    <h2>Classification automatique</h2>
                    <p>Pendant toute une semaine, nous avons travaillé en binôme sur projet de groupe dans 
                        le cadre d'une SAE durant notre première année de BUT informatique. Le but était 
                        de concevoir un programme fiable et rapide d'exécution qui classifie automatiquement
                        des dépêches qui nous étaient données. Ainsi, ce modèle était une amorce dans la 
                        création d'une intelligence artificielle.</p>
                </div>
                <div className='largeBox'>
                    <h2>Site web institutionnel pour Atos</h2>
                    <p>Lors d'une séance de SAE au premier semestre de l'année de BUT, nous avons réunis 
                        le maximum d'informations sur l'entreprise Atos avec un groupe de quatre personnes,
                        que ce soit au niveau de l'organisation de l'entreprise, de sa politique économique 
                        ou encore écologique. Nous avons ensuite établit un recueil de besoins grâce à ces 
                        informations. Par la suite, nous avions plusieurs séances pour réaliser une maquette 
                        d'un site web vitrine d'Atos à l'égard d'élèves de Troisième en recherche d'un stage,
                        site que nous avons dû développer de A à Z en HTML/CSS en se basant sur la maquette.</p>
                </div>
                <div className='largeBox'>
                    <h2>Jeu de l'oie</h2>
                    <p>Le jeu de l'oie est un projet de groupe réalisé dans le cadre de la spécialité Numérique 
                        et Sciences informatiques (NSI) en Première. Nous étions quatre à développer le célèbre
                        jeu de société du même nom grâce à la bibliothèque Pygame en Python. Le jeu se jouait 
                        au tour-par-tour, et un total de quatre joueurs étaient permis sur un même ordinateur.</p>
                </div>

            </div>

            <Modal open={open} onClose={handleClose}></Modal>
            
        </div>
        
    )
}