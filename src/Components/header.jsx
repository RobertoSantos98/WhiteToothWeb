import { Link } from 'react-router-dom';

export default function header(){

    const usuario = localStorage.getItem('usuario');
    const buttonLogOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return(
        <div className="header">
            <div className="headerOption">
                
                    <Link to="/recepcao">Recepção</Link>
                    <Link>Agendas</Link>
                    <Link>Médicos</Link>
            </div>
            <div className="usuarioLogado-home">
                <p>Olá, <span>{usuario}!</span></p>
                <button className="buttonLogOut" onClick={buttonLogOut}>Sair</button>
            </div>
        </div>
    )
}