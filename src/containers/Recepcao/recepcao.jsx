import  { useState } from "react";

import Header from "../../Components/header";
import "./recepcao.css";
// import Services from "../../Services/recepcaoServices";

function Recepcao() {


    const [ selectedOption, setSelectedOption ] = useState("");
    const [ selectedDataOption, setSelectedDataOption ] = useState("");
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
      },
      {
        "id": 3,
        "paciente": "João Siqueira",
        "data": "2025-01-05",
        "horario": "14:30"
      },
      {
        "id": 4,
        "paciente": "Lurdes Oliveira",
        "data": "2025-01-06",
        "horario": "10:00"
      }
        
      
    ]);
    const [ loading, setLoading ] = useState(false);

    // const getMedicos = async () => {
    //   try {
    //       setLoading(true);
    //       const response = await Services.getMedicos();
    //       return response.data;
          
    //   }catch (error) {
    //       console.log(error);
    //   }
    // }
    
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    }
    const handleDataChange = (event) => {
      setSelectedDataOption(event.target.value);
    }

    return(
        <div className="container-recepcao">
            <Header />
            <div className="content-recepcao">
                <div className="medicosDisponiveis">
                    <div>
                        <p className="titleMedicosDisponiveis">Médicos</p>
                    </div>

                    <div>
                      <label className="labelMedicosDisponiveis">Selecione o médico:</label>
                      <select className="selectMedicosDisponiveis" onChange={handleChange}>
                        <option value="medico1">Médico 1</option>
                        <option value="medico2">Médico 2</option>
                        <option value="medico3">Médico 3</option>
                      </select>

                      <label className="labelMedicosDisponiveis">Selecione o dia:</label>
                      <select className="selectMedicosDisponiveis" onChange={handleDataChange}>
                        <option value="medico1">24/02/2025</option>
                        <option value="medico2">25/02/2025</option>
                        <option value="medico3">26/02/2025</option>
                      </select>
                    </div>
                    <div>
                      <button className="btnBuscar">Buscar</button>
                      <button className="btnLimparBuscar">Limpar Buscar</button>
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
