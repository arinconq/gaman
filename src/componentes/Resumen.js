import React from "react";
import "../App.css";
import {ThemeContext} from "../context/ContextoGeneral"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Resumen() {
    let carty = JSON.parse(localStorage.getItem("Cart"))
    
let valores = carty ? carty.map((t)=> t.subtotal): 0

let finalT = valores.reduce((prev,next)=> prev+next, 0) 
  return (

   <div >
       <div id="fondoResumen" >
       <div className="indicadoresPago">
           <li>
               <p>1.Resumen Compra</p>
           </li>
           <li>
               <p >2.Datos Compra</p>
           </li>
       </div>
        <div className="titleD">
        <p>RESUMEN</p>
        </div>
           
         

        <div className="itemsR">
  
  {carty.map((n,i)=>{
   return(
    <div className="conjuntoR">
      <div className="imagenM" >
        
        <Link to={"/single/peluches:"+n.indice}> 
        <img src={n.imagen} alt="imagen"/>
        </Link>
    
      </div>
   
      <div className="botonM">
        <div className="botonPares">
        <b>Producto:</b><p>{n.producto}</p>
        </div>
        <div className="botonPares">
        <b>Precio Unidad:</b><p>{n.precio}</p>
        </div>
        <div className="botonPares">
        <b>Cantidad:</b><p>{n.cantidad}</p>
        </div>
        <div className="botonPares">
        <b>Subtotal:</b><p>{"$"+n.subtotal}</p>
        </div>
     
      </div>
      
     
    </div>
        );
      })}
 </div>
      <div className="totalC">
        <p>TOTAL:{"$"+finalT }</p>
        </div>
        <div className="contaCompra">
        <Link className="totalV" to="/datosCompra">
        <p style={{color:"#fff", fontSize:"1.5rem"}}>CONTINUAR CON EL PAGO</p>
        </Link>
        </div>

     
        </div>
  </div>
     
      
    
  );
}
