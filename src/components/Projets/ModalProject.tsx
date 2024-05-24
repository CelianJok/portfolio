import React from "react";
import './ModalProject.scss';

type PropTypes = {
    open: boolean;
    onClose: () => void;
}

const Modal: React.FC<PropTypes> = ({ open, onClose }) => {

    return (
        <div className="modalProject" style={{display: open ? 'block' : 'none'}}>
            <h1>Test</h1>
            <p>Salut c'est moi le test</p>
            <button type="button" onClick={onClose}>Fermer</button>
        </div>
    );
}

export default Modal;