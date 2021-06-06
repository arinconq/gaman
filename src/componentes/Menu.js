import React, { Component } from "react";
import hover from "../recursos/hover.png";
import "../App.css";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className="menu">
         
          <div className="lista">
            <div className="opciones-contenedor">
              <p className="items">¿QUIENES SOMOS?</p>
              <hr/>
            </div>
            <div className="opciones-contenedor">
              <p className="items">PRODUCTOS</p>
              <img className="hover-menu" src={hover}  alt="imagen"/>
            </div>
            <div className="opciones-contenedor">
              <p className="items">CARRITO</p>
              <img className="hover-menu" src={hover}  alt="imagen"/>
            </div>
            <div className="opciones-contenedor">
              <p className="items">OFERTAS</p>
              <img className="hover-menu" src={hover} alt="imagen"/>
            </div>
            <div className="opciones-contenedor">
              <p className="items">POLITICA DE DEVOLUCIONES</p>
              <img className="hover-menu" src={hover} alt="imagen"/>
            </div>
            <div className="opciones-contenedor">
              <p className="items">CONTACTO</p>
              <img className="hover-menu" src={hover} alt="imagen" />
            </div>
            <div className="opciones-contenedor">
              <p className="items">INICIAR SESIÓN</p>
              <img className="hover-menu" src={hover} alt="imagen"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
