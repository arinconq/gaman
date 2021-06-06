import React,{useContext, useState} from "react";
import imagen1 from "../recursos/pika1.jpg"
import {ThemeContext} from "../context/ContextoGeneral"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Carrito(props) {
  /*const {Add} = useContext(ThemeContext);
  const {Cart} = useContext(ThemeContext);*/

  const[refer, setRefer] = useState(false);
  const {RemoveW, flag} = useContext(ThemeContext);
  const[total, setTotal] = useState([])
  /*console.log(Cart)*/
  const openX = () => {
    let r = document.getElementById("DG")
      r.style.display = "none"
    
  }
  let valor = (e) =>{
    let v = e.target.value;
    console.log(v)
    setTotal(v)
  }
  let submi=(id)=>{
    RemoveW(id)
   
   
   }
 
    


   let wishy = JSON.parse(localStorage.getItem("Wish"))
  return (
     <div id="DG" className="extraCont">
      
      <div className="containerCarrito" >
      <div onClick={openX} className="botonDcerrar">
      <i  className="fa fa-close "></i>
      </div>
      <p className="solito">Wishlist</p>
      <div className="itemsM">
     
     { wishy.map((n,i)=>{
       return(
        <div className="conjuntoM">
          <div className="imagenM" >
           
      
            <Link to={"/single/peluches:"+n.indice}> 
            <img src={n.foto} alt="imagen"/>
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
           
            
        
          </div>
          
         
        </div>
            );
          })}

        


        <div>
        
 </div>
       
     
        
   </div>
       
    </div>
    </div>
        
  );
}
