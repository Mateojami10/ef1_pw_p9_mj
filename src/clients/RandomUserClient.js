import axios from 'axios';

const consumirApi = async () => {
    const respuesta = await axios.get('https://randomuser.me/api/?results=50').then(r=> r.data);
    console.log(respuesta);
    return respuesta;   
}

export async function consumirApiFacade(){
    return await consumirApi();
}