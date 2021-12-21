import { useState } from "react";
import { calcularTotal } from "../helpers";

const Form = (props) => {
  const {cantidad,setCantidad,plazo,setPlazo,setTotal,setCargando} = props;
  const [error,setError] = useState(false);
  const calcularPrestamo = e => {
    e.preventDefault();
    if(cantidad === 0 || plazo === ''){
      setError(true);
      return;
    }
    setError(false);
    setCargando(true);
    setTimeout(() => {
      const total = calcularTotal(cantidad,plazo);
      setTotal(total);
      setCargando(false);
    },3000)
  }
  return(
    <div>
    <form onSubmit={calcularPrestamo}>
      <div className="row">
        <div>
          <label>Cantidad Prestamo</label>
          <input className="u-full-width" type="number" placeholder="Ejemplo: 3000" 
          onChange={e => setCantidad( parseInt(e.target.value))} />
        </div>
        <div>
          <label>Plazo para Pagar</label>
          <select 
            className="u-full-width"
            onChange={e => setPlazo( parseInt(e.target.value))}
          >
            <option value="">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Calcular" className="button-primary u-full-width"/>
        </div>
      </div>
    </form>
    {(error) ? <p className="error">Todos los campos son obligatorios</p> : ''}
    
    </div>
  )
}

export default Form;