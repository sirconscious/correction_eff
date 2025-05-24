import React ,{useState , useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux' 
import FraisSelector from '../redux/Selectores/FraisSelector' 
import { InitialiserAction ,ViderAction } from '../redux/Actions/FraisActions'; 
import TableauFrais from '../components/TableauFrais';  
import { getall } from '../apis/endpoints'; 
import axios from 'axios';
export default function Dossier() {  
    const dispatch = useDispatch();
    const listeFrais = useSelector(FraisSelector);  
    const vider = ()=>dispatch(ViderAction())
    useEffect(() => {
    const fetchAndInit = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}${getall}`);
            const fraisList = response.data.map((frais) => ({
                id: frais.id_dossier,
                Driots_en: frais.Driots_en,
                Consevation: frais.Consevation,
                Date: frais.Date,
                total: frais.total
            }));
            dispatch(InitialiserAction(fraisList));
        } catch (error) {
            console.error("Erreur lors de la récupération des dossiers :", error.response?.data || error.message);
        }
    };

    fetchAndInit();
}, []);
  return (
    <div>
              <TableauFrais listeFrais ={listeFrais} />   
            { listeFrais.length > 0 && <button onClick={vider}>Vider</button>}

        
    </div>
  )
}
