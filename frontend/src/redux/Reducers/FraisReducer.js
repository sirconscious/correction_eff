import axios from "axios"
const initialeState={
    ListeSimultaion : [
        // {
        //     id: 3000000,
        //     Driots_en: 120000,
        //     Consevation: 45200,
        //     Date: new Date().toISOString().split('T')[0],
        //     total: 207950
        // }
    ]
} 

const FraisReducer = (state = initialeState, action) => {
    switch (action.type) {
        case "AJOUTER":
            return {
                ListeSimultaion: [...state.ListeSimultaion, action.payload]
            } 
        case "VIDER":
            return {
                ListeSimultaion: []
            } 
        case "INITIALISER":
            return {
                ListeSimultaion: action.payload
            }
        default:
            return state;
    }
} 

export default FraisReducer