import React, { useState , useEffect} from 'react';
import { useSelector ,useDispatch } from 'react-redux'; 
import { AjouterAction  } from '../redux/Actions/FraisActions';  
import axios from 'axios'; 
import "./CalculerFrais.css"
import { postDossier  } from '../apis/endpoints';
export default function Calculer_frais() {   
   const storeDossier = async ({ id_dossier, Driots_en, Consevation, Date, total }) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}${postDossier}`,
      {
        id_dossier,
        Driots_en,
        Consevation,
        Date,
        total
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Erreur lors de l envoi du dossier :', error.response?.data || error.message);
  }
};

  const dispatch = useDispatch() 
  const ajouter = (frais)=>dispatch(AjouterAction(frais))
  const [montant, setMontant] = useState(0);
  const [frais, setFrais] = useState({
    droit_enregistrement: 0,
    conservation: 0,
    frais_dossier: 0,
    horaire_notaire: 0,
    tva: 0,
    total: 0
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const m = parseFloat(montant);

    if (m > 0) {
      const droit_enregistrement = m * 0.04;
      const conservation = m * 0.015 + 200;
      const frais_dossier = 1500;

      let horaire_notaire = 0;
  
        switch (true) {
        case (montant < 300000):
            horaire_notaire = 4000;
            break;
        case (montant >= 300000 && montant < 1000000):
            horaire_notaire = montant * 0.015;
            break;
        case (montant >= 1000000 && montant < 5000000):
            horaire_notaire = montant * 0.0125;
            break;
        case (montant >= 5000000 && montant < 10000000):
            horaire_notaire = montant * 0.0075;
            break;
        case (montant >= 10000000):
            horaire_notaire = montant * 0.005;
            break;
        default:
            horaire_notaire = 0;
        }

      const tva = horaire_notaire * 0.1;
      const total = droit_enregistrement + conservation + frais_dossier + horaire_notaire + tva;
      const date =  new Date().toISOString().split('T')[0]
      setFrais({
        droit_enregistrement,
        conservation,
        frais_dossier,
        horaire_notaire,
        tva,
        total
      }); 
      ajouter({
        id: montant,
        Driots_en: droit_enregistrement,
        Consevation: conservation,
        Date: date,
        total
      }) 
      storeDossier({ id_dossier: montant , Driots_en : droit_enregistrement, Consevation : conservation, Date : date, total: total   })
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Montant de vente du bien :</label>
        <input
          type="number"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
        />
        <button type="submit">Calculer</button>
      </form>

     <div className="result">
  <h3>Résultat :</h3>
  <p>Droit d'enregistrement : {frais.droit_enregistrement.toFixed(2)} DH</p>
  <p>Conservation foncière : {frais.conservation.toFixed(2)} DH</p>
  <p>Frais de dossier : {frais.frais_dossier.toFixed(2)} DH</p>
  <p>Honoraires du notaire : {frais.horaire_notaire.toFixed(2)} DH</p>
  <p>TVA : {frais.tva.toFixed(2)} DH</p>
  <hr />
  <p><strong>Total : {frais.total.toFixed(2)} DH</strong></p>
</div>

   
    </div>
  );
}
