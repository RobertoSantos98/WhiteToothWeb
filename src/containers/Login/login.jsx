import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from 'react';

import './login.css';
import UserServices from '../../Services/UserServices';

const Login = ({ setIsLogged }) =>{

    const [usuario, setUsuario ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const usuarioLogin = {
            usuario: usuario,
            password: password
        }

        try {
            const data = await UserServices.login(usuarioLogin);
            localStorage.setItem('token', data.mensagem);
            localStorage.setItem('usuario', usuarioLogin.usuario);
            setIsLogged(true);
            alert("Login efetuado com sucesso");

        } catch (error) {
            console.log(error);
            
        }

    }

    return (
        <div className="container-login">
            <div className='Welcome-login'>
                <div>
                    <img src="/logo.png" />
                </div>
                <div>
                    <h1 className='textWelcomePequeno'>Bem-vindo à</h1>
                    <h2 className='textWelcome'>WhiteTooth</h2>
                </div>
            </div>
            <div className='content-login'>
                <form onSubmit={handleLogin}>
                    <h1>Acesse o sistema</h1>
                    <div>
                        <FaUser className="icon" />
                        <input
                            type="text" 
                            placeholder="Digite seu usuário"
                            onChange={(e) => setUsuario(e.target.value)}    
                        />
                    </div>
                    <div>
                        <FaLock className="icon" />
                        <input 
                            type="password" 
                            placeholder="Digite sua senha" 
                            onChange={(e) => setPassword(e.target.value)}    
                        />
                    </div>
                    <button className='button-login' type="submit"  >Entrar</button>

                    <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </form>

            </div>
        </div>
    )
}

export default Login;