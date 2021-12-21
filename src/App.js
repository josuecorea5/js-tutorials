import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form"
import Mensaje from "./Components/Mensaje";
import Resultado from "./Components/Resultado";
import Spinner from "./Components/Spinner";

function App() {
  const [cantidad,setCantidad] = useState(0);
  const [plazo,setPlazo] = useState('');
  const [total,setTotal] = useState(0);
  const [cargando,setCargando] = useState(false);

  let componente;
  if(cargando) {
    componente = <Spinner />
  }else if(total === 0) {
    componente = <Mensaje />
  }else {
    componente = <Resultado
                    total={total}
                    plazo={plazo}
                    cantidad={cantidad}
                  />
  }

  return (
    <div className="App">
      <Header title="Cotizador de Prestamos" />
      <div className="container">
        <Form 
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
          setCargando={setCargando}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
