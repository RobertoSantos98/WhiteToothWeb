import axios from 'axios';

    const api = 'http://localhost:5175';

    const login = async (usuarioDados) => {
    
        try {
    
            const response = await axios.post(`${api}/api/login/auth`, usuarioDados, {
                headers: {
                    'Content-Type': 'application/json'
        }});
            return response.data;
    
        } catch(e){
            console.log(e);
        }
    
    }




export default { login };