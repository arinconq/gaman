import React, { Component } from "react";
import envio from "../recursos/envios.png";
import coin from "../recursos/PAGO.png";
import legal from "../recursos/legal.png";
import "../App.css";

export default class Servicios extends Component {
  render() {
    return (
      <div className="containerServicio">
        <div className="cajita">
         
          <div className="envio">
            <img src={envio}  className="servicioy" alt="imagen"/>
          </div>
          <div className="pago">
            <img src={coin}  className="serviciox" alt="imagen"/>
          </div>
          <div className="legal">
            <img src={legal}  className="servicio" alt="imagen" />
          </div>
          

        </div>
      </div>
      
    );
  }
}
