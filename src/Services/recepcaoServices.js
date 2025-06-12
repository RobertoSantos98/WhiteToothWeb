import axios from 'axios';

const api = 'http://localhost:5175';

const getMedicos = async () => {
    
    try {
        const response = await axios.get(`${api}/api/medicos`);
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
};

const getConsultas = async () => {
    
    try {
        const response = await axios.get(`${api}/api/consultas`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export { getMedicos, getConsultas };