import React from 'react'
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import gaman4 from "../recursos/gaman4.png"

export default function ResumenCompra() {
    return (
        <div className="contenedorAgradecimiento">
             <h1>RESUMEN COMPRA</h1>
            <div className="elementos">
           
                <div className="ticket">
                  
                   <div className="paresitos2">
                   <div className="paresitos3">
                    <b>Datos: </b><p>Datos</p>
                   </div>
                   <div className="paresitos3">
                    <b>Datos: </b><p>Datos</p>
                   </div>
                   <div className="paresitos3">
                    <b>Datos: </b><p>Datos</p>
                   </div>
                   <div className="paresitos3">
                    <b>Datos: </b><p>Datos</p>
                   </div>
                   <div className="paresitos3">
                    <b>Datos: </b><p>Datos</p>
                   </div>
                   <div className="paresitos3">
                    <b>Datos: </b><p>Datos</p>
                   </div>
                   <div className="paresitos3">
                    <b>Datos: </b><p>Datos</p>
                   </div>
                   
                   </div>
                   <div className="aviso">
                       <p>IMPRIMIR TICKET</p>
                   </div>
                  
                </div>
                <div className="gamanAgradecimiento">
                 <img src={gaman4} alt="imagen"/>
                </div>
            </div>
           
                <Link className="volver" to ="/productos">
                <p>VOLVER A LA TIENDA</p>
                </Link>
           
            
        </div>
    )
}
