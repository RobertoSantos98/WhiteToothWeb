import  { useState } from "react";

import Header from "../../Components/header";
import "./recepcao.css";

function Recepcao() {

    const [ consultas, setConsultas ] = useState([
        
            {
              "id": 1,
              "paciente": "João Silva",
              "data": "2025-01-05",
              "horario": "14:30"
            },
            {
              "id": 2,
              "paciente": "Maria Oliveira",
              "data": "2025-01-06",
              "horario": "10:00"
            }
          
    ]);
    const [ loading, setLoading ] = useState(false);
    


    return(
        <div className="container-recepcao">
            <Header />
            <div className="content-recepcao">
                <div className="medicosDisponiveis">
                    <div>
                        <p className="titleMedicosDisponiveis">Médicos</p>
                    </div>
                </div>
                <div className="agenda">
                    <p className="titleMedicosDisponiveis">Consultas</p>
                    <div className="contentConsultas">
                        <div className="tabelaConsultas">
                        {loading ? <p>Carregando...</p> : 
                             <table className="tabela-consultas">
                             <thead>
                               <tr>
                                 <th>ID</th>
                                 <th>Paciente</th>
                                 <th>Data</th>
                                 <th>Horário</th>
                               </tr>
                             </thead>
                             <tbody>
                               {consultas.map((consulta) => (
                                 <tr key={consulta.id}>
                                   <td>{consulta.id}</td>
                                   <td>{consulta.paciente}</td>
                                   <td>{consulta.data}</td>
                                   <td>{consulta.horario}</td>
                                 </tr>
                               ))}
                             </tbody>
                           </table> 
                        }
                        </div>

                        <div className="optionConsultas">
                            <button className="btnConsultas">Chegou</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Recepcao;
