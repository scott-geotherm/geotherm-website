import React, { useEffect } from 'react';
import './ModalStyles.css'; // Ensure this path is correct

const Modal = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            fetchData();

           

            

            const script = document.createElement('script');
            script.src = "//js.hsforms.net/forms/embed/v2.js"; //  "https://js.hsforms.net/forms/embed/49357606.js"
            script.async = true;
            script.onload = () => {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID, // Use environment variable
                        formId: import.meta.env.VITE_HUBSPOT_FORM_ID, // Use environment variable
                        target: '#hubspotForm' // Ensure this matches the ID in your ContactForm
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
                <div id="hubspotForm"></div> {/* This is where the HubSpot form will be rendered */}
            </div>
        </div>
    );
};

function fetchData() {
    fetch("https://api.hubapi.com/integrations/v1/me", {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_HUBSPOT_API_KEY}`
        }
    })
    .then(response => {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        if (!response.ok) {
            return response.text().then(text => {
                console.error('Response text:', text);
                throw new Error(`HTTP error! status: ${response.status}, response: ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

export default Modal; 

