import './home.css';
import Header from "../../Components/header";

function Home() {


  return(
    <div className="container-home">
        <Header />
        <div className='welcome-home'>
            <img src="/logo.png" alt="Imagem-Logo" />
            <h1 className='title-home'>WhiteTooth</h1>
        </div>
    </div>
  )
}

export default Home;