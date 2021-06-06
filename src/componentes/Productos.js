import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import corazon from "../recursos/corazon.png";
import carritoi from "../recursos/gaman11.png";
import Modal from 'react-modal';
import gaman from "../recursos/gaman4.png"
import login from "../recursos/login.png";
import {db,storage} from "../database/firebase.js"
import gama from "../recursos/gaman5.png"

import "../App.css";
const customStyles = {
  content : {
    width                 :  "50%",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default function Productos(){
   
  const [state, setstate] = useState([])
    const[imagenes, setImagenes] = useState([]);
    const[Id, setId] = useState([]);
   
  const [modalIsOpen,setIsOpen] = useState(true);
  const [flag, setFlag] = useState([])

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
   tiempo();
   
  },[]);

  const handle = (e) => {
   let name = e.target.name;
   let value = e.target.value;
   setstate({...state,[name]:value})
  }

 
  const enviar = (e) => {
   e.preventDefault();
   db.collection("news").onSnapshot((querySnapshot)=>{
     const ids = [];
     querySnapshot.forEach((doc) => {
         let id = doc.id;
         ids.push(id);
         
     })
     setFlag(ids);
   })
   db.collection("news").add({
        indice : (Number(flag.length+1)),
        correo: state.correo
       })
   
   notify()
  }




const notify = () =>
   toast(
     
     <div id="cartexto">
     <p>¡SUSCRITO!</p>
     <img id="iv" src={gama} alt="imagen"/>
   </div>
   
   );
 

  const tiempo = () =>{
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  
  }

  const closeModal = ()=>{
    setIsOpen(false);
  }



    return (
      
        <div className="contenedor-productos">
          <div>
      
       {/* <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          
          <button onClick={closeModal}>close</button>
          <div className="containerNews">
          <div className="cajaone">
              <div className="space">
         <p>Para conocer ofertas y novedades, ¡Suscríbete!</p>
         <form className="formNews" onSubmit={enviar}>
             <input onChange={handle} type="email" name="correo" placeholder="Email"/>
             <input type="submit" value="SUSCRIBIRSE" />
         </form>
         </div>
         </div>
         <div className="cajatwo">
             <div className="f">
             <img src={gaman} />
             </div>
            
         </div>
         </div>
        </Modal> */}
      </div>
          <div className="productos">
          <div className="containerIcon">
           {imagenes.map((m)=>{
             return(
               <div>
              <Link to={"/items/"+m.producto+":1"}> 
              <img src={m.foto} />
        
              </Link>
               <div className="textoProducto">
                <p>{m.producto}</p>
              </div>
              </div>
              );
           })}
                
              
              </div>
             
              </div>

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

