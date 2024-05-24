import React from "react";
import './ModalProject.scss';

type PropTypes = {
    open: boolean;
    onClose: () => void;
    project?: { title: string; description: string; box: string };
}

const Modal: React.FC<PropTypes> = ({ open, onClose, project }) => {

    return (
        <div className="modalProject" style={{display: open ? 'block' : 'none'}}>
            {project && ( // Vérifier si project est défini avant de rendre son contenu
                <>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </>
            )}
            <button type="button" onClick={onClose}>Fermer</button>
        </div>
    );
}

export default Modal;