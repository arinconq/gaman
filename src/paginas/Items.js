import React, {useEffect, useState, useContext} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import pata from "../recursos/back.jpg";
import cabeza from "../recursos/back_.jpg";
import legal from "../recursos/back.jpg";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {db,storage} from "../database/firebase.js"
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuPuntos from "../componentes/MenuPuntos"
import CarritoWish from "../componentes/CarritoWish"
import corazon from "../recursos/corazon.png";
import {ThemeContext} from "../context/ContextoGeneral"

export default function Items(props) {
  const {AddW} = useContext(ThemeContext);
  const[state, setState] = useState([]);
  const[Id, setId] = useState([]);
  const[Ind, setInd] = useState([]);
  useEffect(() => {
    let vaa = props.match.params.id.toString();
    let nombreD = vaa.substring(0, vaa.lastIndexOf(":"))
      db.collection(nombreD).onSnapshot((querySnapshot)=>{
        const indices = [];
        querySnapshot.forEach((doc) => {
            let id = doc.id;
            let nombre = doc.data();
            indices.push(nombre); 
        })
        setInd(indices);
     
  })
  
    
    let p = vaa.substring(vaa.lastIndexOf(":")+1, vaa.length)
    let a = p ? Number(p) : 1;
    let post = 2;
    let inicio = (a > 1) ? (a * post - post)+1 : 1;
  
    db.collection(nombreD)
    .onSnapshot((query) => {
      const arr = [];
      query.forEach((doc) => {
        const {
          indice,
          referencia,
          producto,
          descripcion,
          precioA,
          precio,
          colores,
          foto
         
        } = doc.data();

        arr.push({
          id: doc.id,
          indice,
          referencia,
          producto,
          descripcion,
          precioA,
          precio,
          colores,
          foto
        });
       
      });
      setState(arr);
  
    });
    
  },[]);

  const notify2 = () =>
    toast(
        
      <div  id="cartext" >
        <p >Agregado a la lista de deseos</p>
        <img id="i" src={corazon} alt="imagen"/>
      </div>
   
  
  );
  let SubBM=(e)=>{
    e.preventDefault()
   console.log(e.target)
   
    let arr = [];
        let indice = e.target.indice.value;
        let producto= e.target.producto.value;
        let precio= e.target.precio.value;
        let foto= e.target.foto.value;
        
     console.log(indice)
     arr.push({
       indice,
       producto,
       precio,
       foto
     })
   AddW({
    indice,
       producto,
       precio,
       foto
   })
 notify2()
 
} 
  let vaa = props.match.params.id.toString();
  let nombreD = vaa.substring(0, vaa.lastIndexOf(":"))
  let p = vaa.substring(vaa.lastIndexOf(":")+1, vaa.length)
  
  return (
    <div className="padreItems" >
       <div className="boxControls">
     <MenuPuntos/>
     <CarritoWish/>
     </div>
      <div className="contenidoR">
       
       <div className="contenedorSingleR">
      <div className="imagenesSingle">
     <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={pata}
         alt="First slide"
       />
       
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={cabeza}
         alt="Second slide"
       />
   
   
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={legal}
         alt="Third slide"
       />
   
    
     </Carousel.Item>
   </Carousel>
   </div>
   
  
      </div>
      </div>
      
      <div className="buscadorC">
        <input type="search" />
        <i className="fa fa-search iconoc"></i>
      </div>
      <div className="itemsC">
      {state.map((o)=>{
          return(
        <div key={o.id} className="conjunto">
           <form className="formWish" onSubmit={SubBM}>
           <input type="hidden" value={o.id} name="indice"/>
           <input type="hidden" value={o.foto} name="foto"/>
            <input type="hidden" value={o.producto} name="producto"/>
            <input type="hidden" value={o.precio} name="precio"/>
           
          <div className="imagenc">
         
          <img src={o.foto} alt="imagen"/>
            
          </div>
          <div className="precio">
          <p>{o.producto}</p>
          </div>
          <div className="botonesCorazon"> 
          
          <div className="botonc">
          <Link className="subrayado" to={"/single/"+nombreD+":"+o.id}>
          <p className="titleboton">COTIZAR</p>
          </Link>
          </div>
          
          <button type="submit" class="btn"><i class="fa fa-heart iconh "></i> </button>
          
         
           
            
          </div>
          
         
          </form>
        </div>
          );
        })}
 
       
      </div>
      {/*<div className="paginacion">
    {(Number(p) == 1)?(
       <p className="disabled"><i  className="fa fa-chevron-left"></i></p>
    ):<a href={"/items/"+nombreD+":"+(Number(p)-1)}><i  className="fa fa-chevron-left "></i></a>}
    
       <p>{p}</p>
      
       {(Number(p) == Ind.length)?(
       <p className="disabled"><i  className="fa fa-chevron-right"></i></p>
    ):<a href={"/items/"+nombreD+":"+(Number(p)+1)}><i  className="fa fa-chevron-right "></i></a>}
       </div>*/}
       <ToastContainer
      position="bottom-center"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
    />

    </div>
  );
}
