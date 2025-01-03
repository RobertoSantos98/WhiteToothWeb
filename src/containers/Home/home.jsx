import './home.css';

function Home() {

    const usuario = localStorage.getItem('usuario');

    const buttonLogOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    

  return(
    <div className="container-home">
        <div className="header">
            <div className="headerOption">
                <a href="">Recepção</a>
                <a href="">Agendas</a>
                <a href="">Médicos</a>
            </div>
            <div className="usuarioLogado-home">
                <p>Olá, <span>{usuario}!</span></p>
                <button className="buttonLogOut" onClick={buttonLogOut}>Sair</button>
            </div>
        </div>
        <div className='welcome-home'>
            <img src="/logo.png" alt="Imagem-Logo" />
            <h1 className='title-home'>WhiteTooth</h1>
        </div>
    </div>
  )
}

export default Home;