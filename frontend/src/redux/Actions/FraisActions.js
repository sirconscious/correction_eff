const AjouterAction = (val)=>{
    return {
        type : "AJOUTER" , 
        payload : val
    }
}
const ViderAction = ()=>{
    return {
        type : "VIDER" , 
    }
} 
const InitialiserAction = (val)=>{
    return {
        type : "INITIALISER" ,
        payload : val
    }
}
export {AjouterAction , ViderAction , InitialiserAction} 

