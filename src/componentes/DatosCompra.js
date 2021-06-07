import React, {useEffect} from "react";
import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";


export default function DatosCompra() {

  useEffect(()=> {
    axios.post('https://gamanapp-back.herokuapp.com/payment/new', {
      name: 'Moriarty',
      price: 'Sherlock'
  }).then(response => {
      console.log(response.data)
  }).catch(e => {
      console.log(e);
  });
  axios.get('https://gamanapp-back.herokuapp.com/prueba', 
  ).then(response => {
      console.log(response.data)
  }).catch(e => {
      console.log(e);
  });
  },[])
  return (
    <div className="fondoResumen">
       
      <div className="cajas">
        <div className="datosBasicos">
          <form>
          <div className="indicadoresPago2">
           <li>
               <p>1. Resumen Compra</p>
           </li>
           <li>
               <p >2. Datos Cliente</p>
           </li>
       </div>
          <div className="titleD">
        <p>DATOS DE LA COMPRA</p>
      </div>
            <input type="text" placeholder="Nombres" />
            <input type="text" placeholder="Apellidos" />
            <input type="text" placeholder="Teléfono" />
            <input type="text" placeholder="Correo" />
            <input type="text" placeholder="Dirección" />
            <input
              type="text"
              placeholder="Precio de Envio"
              value="$10.000"
              readonly
            />
            
           <div className="totally">
                    <b>TOTAL COMPRA</b><p>$0000</p>
                    <b>TOTAL + ENVÍO</b><p>$000</p>
            </div>
                
          <Link to="/ResumenCompra">
          <input type="submit" value="PAGAR" />
          </Link>
          </form>
        </div>

     
           
           
               
        </div>
      </div>

     
     
      
    
  );
}