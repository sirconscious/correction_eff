import React, { useState, useEffect } from 'react';
import { getall } from '../apis/endpoints';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Verification.css'; // CSS file

export default function Verification() {
    const { id } = useParams(); 
    const [dossier, setDossier] = useState({});

    useEffect(() => {
        const fetchAndInit = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}${getall}/${id}`);
                setDossier(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des dossiers :", error.response?.data || error.message);
            }
        };
        fetchAndInit();
    }, [id]);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}${getall}/${id}`, {}, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log('Dossier updated', response.data);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du dossier :', error.response?.data || error.message);
        }
    };

    return (
        <div className="verification-container">
            {dossier.status === 'pending' ?  (
                <div className="card">
                    <p className="pending-message">Dossier en cours de traitement</p>
                    <button className="validate-btn" onClick={handleUpdate}>Valider</button>

                </div> ):
            <ul className="dossier-info">
                <li><strong>ID Dossier:</strong> {dossier.id_dossier}</li>
                <li><strong>Droits EN:</strong> {dossier.Driots_en}</li>
                <li><strong>Conservation:</strong> {dossier.Consevation}</li>
                <li><strong>Date:</strong> {dossier.Date}</li>
                <li><strong>Total:</strong> {dossier.total}</li>
                <li><strong>Status:</strong> {dossier.status}</li>
              
            </ul>
        }

        </div>
    );
}
