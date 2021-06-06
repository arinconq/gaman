import React, {useState, useEffect} from 'react'
import "../App.css";
import logoH from "../recursos/logo-horizontal.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {db,storage} from "../database/firebase.js"

export default function Filtros() {
  const[imagenes, setImagenes] = useState([]);
  const[Id, setId] = useState([]);
  useEffect(() => {
    db.collection("productos").onSnapshot((querySnapshot)=>{
        const arreglo = [];
        const ids = [];
        querySnapshot.forEach((doc) => {
            let id = doc.id;
            let nombre = doc.data();
            arreglo.push(nombre);
            ids.push(id);
            
        })
        setImagenes(arreglo);
        setId(ids);
    });
 
   
  },[]);
    const acordion = () => {
        let variable = document.getElementById("div1");
      if( variable.style.display === "block"){
        variable.style.display = "none";
      }else{
        variable.style.display = "block";
      }
        
        
    }
    
    const cerrarMenu = () => {
        let variableC = document.getElementById("opciones");
        let x = document.getElementById("x");
        if( variableC.style.display === "block"){
          variableC.style.display = "none";
          x.className = "fa fa-bars"
        }else{
          variableC.style.display = "block";
          x.className = "fa fa-close"
        }
          
    }
    const p = 1;
    return (
        <div className="contenedorPanel">
   
        <div className="vista">
         <div className="opcionesTop">
           <div className="itemsO">
               <p>INVENTARIO</p>
               <p>Agregar Categoria</p>
           </div>
         </div>
              <h1>FILTROS</h1>
            <div className="containerdebuscador">
              <div className="buscadorf">
              <h2>NOMBRE</h2>
              <div className="rincon">
                <input type="search" />
                 <i className="fa fa-search iconoc"></i>
                 </div>
             </div>
             <div className="buscadorf">
              <h2>REFERENCIA</h2>
              <div className="rincon">
                <input type="search" />
                 <i className="fa fa-search iconoc"></i>
                 </div>
             </div>
             <div className="buscadorf">
              <h2>CATEGORIA</h2>
              <div className="rincon">
                <input type="search" />
                 <i className="fa fa-search iconoc"></i>
                 </div>
             </div>
             </div>
 
      
        </div>
        
        <div onClick={cerrarMenu} id="closes">
              <i id="x" className="fa fa-bars "></i>
        </div>
        <div id="opciones">
          <ol>
              <div className="logoHorizontal">
              <Link to="/panel">
              <img src={logoH}/>
              </Link>
              </div>
              
              <h2 onClick={acordion}>INVENTARIO</h2>
             
              <div id="div1">
                  <ul>
                  {imagenes.map((t)=> {
                     return(
                      <a href={"/dbItems/"+t.producto+":1"}>
                      <li>{t.producto}</li>
                      </a>
                      
                     );
                  })}
                
            
                  </ul>
                  </div>
                  <a href={"/ventas/"+p}>
                  <h2>VENTAS</h2>
                  </a>
                  <a href={"/facturasVentas/"+p}>
                  <h2>FACTURAS VENTAS</h2>
                  </a>
                  <a href={"/facturasInsumos/"+p}>
                  <h2>FACTURAS INSUMOS</h2>
                  </a>
                  <a href={"/proveedores/"+p}>
                  <h2>LISTA PROVEEDORES</h2>
                  </a>
                  <a href={"/dbUsuarios/"+p}>
                  <h2>USUARIOS PLATAFORMA</h2>
                  </a>
                  <a href={"/dbNewsletter/"+p}>
                  <h2>NEWSLETTER</h2>
                  </a>
                  <Link to="/filtro">
                  <h2>FILTRO</h2>
                  </Link>
          </ol>
         
        </div>
        
    </div>
    )
}
