import React, {useState} from 'react'
import corazon from "../recursos/corazon.png";
import carritoi from "../recursos/gaman11.png";
import login from "../recursos/login.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carrito from "../componentes/Carrito"
import Wishlist from "../componentes/Wishlist"

export default function CarritoWish() {
    const[abrir, setAbrir] = useState(false);
    const[abrirW, setAbrirW] = useState(false);

    const open = () => {
        let x = document.getElementById("x");
        
       if(!abrir){
           setAbrir(true)
           x.src = carritoi;
       }else{
           setAbrir(false)
           x.src = carritoi;
       }
    }

    const openW = () => {
        let z = document.getElementById("xx");
        if(!abrirW){
            setAbrirW(true)
            z.src = corazon;
        }else{
            setAbrirW(false)
            z.src = corazon;
        }
     }
    return (
        <div className="contenedorWicon">
            <div className="Wicons">
            <Link to="/login">
                    <img src={login} alt="imagen" />
                    </Link>
                <div id="log"  onClick={open} >
                    <img id="x" src={carritoi} alt="imagen"/>
                </div>
                <div id="wis" onClick={openW}>
                    <img  id="xx" src={corazon} alt="imagen"/>
                </div>
           </div> 
           {abrir ? <Carrito/> : null}   
           {abrirW ? <Wishlist/> : null}       
      </div>
            
       
    )
}
