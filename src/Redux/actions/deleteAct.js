import axios from "axios";




export default function deleteAct(idAct){
    return async function(){     
        return await axios.post(`/activities/delete/${idAct}`) 
    }    
};