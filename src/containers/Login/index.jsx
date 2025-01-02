import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from 'react';

import './styles.css';

const Login = () =>{

    const [usuario, setUsuario ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Usuario:', usuario);
        console.log('Senha:', password);
    }

    return (
        <div className="container">
            <div className='Welcome'>
                <div>
                    <img src="../../../public/logo.png" />
                </div>
                <div>
                    <h1 className='textWelcomePequeno'>Bem-vindo á</h1>
                    <h2 className='textWelcome'>WhiteTooth</h2>
                </div>
            </div>
            <div className='content'>
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
                    <button className='button' type="submit"  >Entrar</button>

                    <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </form>

            </div>
        </div>
    )
}

export default Login;