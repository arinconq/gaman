import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {db,storage} from "../database/firebase.js"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gama from "../recursos/gaman5.png"
export default function Registro() {

    const[state, setState] = useState([]);
    const [flag, setFlag] = useState([]);
  
    const handle = (e) => {
        console.log(e.target.value, e.target.name)
        let name = e.target.name;
        let value = e.target.value;
       setState({...state, [name]: value})
    }
    console.log(flag)

    const enviar = (e) =>{
       e.preventDefault();
       db.collection("usuarios").onSnapshot((querySnapshot)=>{
        const ids = [];
        querySnapshot.forEach((doc) => {
            let correo = doc.data().correo;
            ids.push(correo);
            
        })
        setFlag(ids);
    
      })
        db.collection("usuarios").add({
            indice : (Number(flag.length+1)),
            nombres: state.nombres,
            apellidos: state.apellidos,
            direccion: state.direccion,
            telefono: state.telefono,
            correo: state.correo,
            contraseña: state.contraseña,
            contraseñaR: state.contraseñaR
           })
           notify();
        
    }
    
 const notify = () =>
 toast(
   
   <div id="cartexto">
   <p>!HECHO!</p>
   <img id="iv" src={gama} alt="imagen"/>
 </div>
 
 );
    return (
        <div className="login">
        
        <form onSubmit={enviar}>
        <h1>REGISTRO</h1>
        <div className="grupo">
        <i className="fa fa-user"></i>
            <input type="text" onChange={handle} name="nombres" placeholder="Nombres"/>
        </div>
        <div className="grupo">
        <i className="fa fa-user"></i>
            <input type="text" onChange={handle}  name="apellidos" placeholder="Apellidos"/>
        </div>
        <div className="grupo">
        <i className="fa fa-user"></i>
            <input type="text"  onChange={handle}  name="direccion" placeholder="Dirección"/>
        </div>
        <div className="grupo">
        <i className="fa fa-user"></i>
            <input type="text"   onChange={handle}  name="telefono" placeholder="Teléfono"/>
        </div>

        <div className="grupo">
        <i className="fa fa-user"></i>
            <input type="email"  onChange={handle}  name="correo" placeholder="Correo"/>
        </div>
        <div className="grupo">
        <i className="fa fa-lock"></i>
            <input type="password"   onChange={handle}  name="contraseña" placeholder="Contraseña"/>
        </div>
        <div className="grupo">
        <i className="fa fa-lock"></i>
            <input type="password"  onChange={handle}  name="contraseñaR" placeholder="Repita la Contraseña"/>
        </div>
        <div>
            <input type="submit" className="enviar" value="ENVIAR"/>
        </div>
        <Link className="registro" to="/login">
            <p>Iniciar Sesión</p>
        </Link>
        </form>
       
        
      
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
    )
}
