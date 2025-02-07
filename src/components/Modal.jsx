import React, { useEffect } from 'react';
import './ModalStyles.css'; // Create this CSS file for styling the modal

const Modal = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const script = document.createElement('script');
            script.src = "//js.hsforms.net/forms/embed/v2.js";
            script.async = true;
            script.onload = () => {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        portalId: "49253178",
                        formId: "b87392a6-3269-4bb6-bec7-dda8599d855d",
                        target: '#hubspotForm'
                    });
                }
            };
            document.body.appendChild(script);
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                <div id="hubspotForm"></div>
            </div>
        </div>
    );
};

export default Modal; 