import React,{useContext, useState} from "react";
import imagen1 from "../recursos/pika1.jpg"
import {ThemeContext} from "../context/ContextoGeneral"
import { ToastContainer, toast } from "react-toastify";
import carrito from "../recursos/gaman10.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CardTitle } from "reactstrap";
export default function Carrito(props) {
  const {Remove, flag} = useContext(ThemeContext);


  const opened = () => {
    let r = document.getElementById("rf")
    r.style.display = "none"
  }

let submi=(id)=>{
 Remove(id)
 notify()

}
const notify = () =>{
  toast(
      
    <div  id="cartext" >
      <p >Elemento eliminado</p>
      <img id="i" src={carrito} alt="imagen"/>
    </div>
 

);
document.location.reload()
  }

  let carty = JSON.parse(localStorage.getItem("Cart"))

let valores = carty ? carty.map((t)=> t.subtotal): 0

let finalT = valores.reduce((prev,next)=> prev+next, 0) 


//let totally2 = totally.map((h) => h.reduce((prev,next) =>  prev + next,0))

return (
     <div id="rf" className="extraCont"> 
        
      <div className="containerCarrito" >
      <div onClick={opened} className="botonDcerrar">
      <i  className="fa fa-close "></i>
      </div>
      <p className="solito">Carrito</p>
      <div className="itemsM">
  
      {carty.map((n,i)=>{
       return(
        <div className="conjuntoM">
          <div className="imagenM" >
            
            <Link to={"/single/peluches:"+n.indice}> 
            <img src={n.imagen} alt="imagen"/>
            </Link>
            <p onClick={()=>submi(n.indice)}><i class="fa fa-times-circle" ></i></p>
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
    
        


        <div>
        
 </div>
       
     
        
   </div>
        <div className="totalC">
        <p>TOTAL:{"$"+finalT }</p>
        </div>
        <div className="contaCompra">
        <Link className="totalV" to="/resumen">
        <p style={{color:"#fff", fontSize:"1.5rem"}}>CONTINUAR CON LA COMPRA</p>
        </Link>
        </div>
    </div>
    </div>
        
  );
}
