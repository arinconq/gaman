import React, {useState} from "react";
import "../App.css";
import {db,storage} from "../database/firebase.js"
import gaman from "../recursos/gaman4.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gama from "../recursos/gaman5.png"

export default function News() {
    
   const [state, setstate] = useState([])
   const [flag, setFlag] = useState([])
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
    return (

     <div className="backNews">
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
