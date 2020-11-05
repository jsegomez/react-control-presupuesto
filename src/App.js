import { useState } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);  
  const [gastos, setGastos] = useState([]);

  // Calcula restante de presupuesto
  const calculoRestante = (monto) => {
    let montoRestante = restante - monto;
    setRestante(montoRestante);    
  }

  // Guarda lista de gastos
  const listaGastos = (gasto) => {
      setGastos([
        ...gastos,
        gasto
      ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        { 
          presupuesto === 0
            ?
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}              
              />
            :
              null
        }

        {
          presupuesto > 0
            ?
              <div className="row animate__animated animate__fadeIn">
                <div className="one-half column">
                  <Formulario
                    setPresupuesto={setPresupuesto}
                    listaGastos={listaGastos}
                    calculoRestante={calculoRestante}
                    setGastos={setGastos}
                    restante={restante}    
                  />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos}/>
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            :
              null
        }
      </div>
    </div>
  );
}

export default App;
