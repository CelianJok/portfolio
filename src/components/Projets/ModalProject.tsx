import React from "react";
import './ModalProject.scss';

type PropTypes = {
    open: boolean;
    onClose: () => void;
    project?: { title: string; description: string; box: string; date: string; type: string; mainImage: string[]; images: string[]};
}

const Modal: React.FC<PropTypes> = ({ open, onClose, project }) => {

    React.useEffect(() => {
        function handleEscapeKey(event: KeyboardEvent) {
          if (event.code === 'Escape') {
            onClose()
          }
        }
      
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
      }, [])

    return (
        <div className="modalProject" style={{display: open ? 'block' : 'none'}}>
            {project && ( // Vérifier si project est défini avant de rendre son contenu
                <>
                    <div className={'close'}>
                        <span>
                            <img src={"Projets/images/Fermer.png"} alt="Icône de fermeture" onClick={onClose} />
                        </span>
                    </div>
                    <div>
                        <span className={'spanDate'}>{project.date}</span>
                        <span className={project.type == 'Personnel' ? 'spanPerso' : 'spanAca'}>{project.type}</span>
                    </div>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="images">
                        {project.images.map((image, index) => (
                        <img key={index} src={'Projets/images' + image} alt={project.title} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Modal;