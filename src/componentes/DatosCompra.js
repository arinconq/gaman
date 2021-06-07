import React, {useEffect} from "react";
import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";


export default function DatosCompra() {
  

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
          <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
  <input name="merchantId"    type="hidden"  value="508029"   />
  <input name="accountId"     type="hidden"  value="512321" />
  <input name="description"   type="hidden"  value="Test PAYU"  />
  <input name="referenceCode" type="hidden"  value="TestPayU" />
  <input name="amount"        type="hidden"  value="20000"   />
  <input name="tax"           type="hidden"  value="3193"  />
  <input name="taxReturnBase" type="hidden"  value="16806" />
  <input name="currency"      type="hidden"  value="COP" />
  <input name="signature"     type="hidden"  value="7ee7cf808ce6a39b17481c54f2c57acc"  />
  <input name="test"          type="hidden"  value="0" />
  <input name="buyerEmail"    type="hidden"  value="test@test.com" />
  <input name="responseUrl"    type="hidden"  value="http://www.test.com/response" />
  <input name="confirmationUrl"    type="hidden"  value="http://www.test.com/confirmation" />
  <input name="Submit"        type="submit"  value="Enviar" />
</form>
 
        </div>

     
           
           
               
        </div>
      </div>

     
     
      
    
  );
}
