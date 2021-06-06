import React, { useState, useContext} from "react";
import { ToastContainer, toast } from "react-toastify";
import carrito from "../recursos/gaman10.png";
import corazon from "../recursos/corazon.png";
export const ThemeContext = React.createContext();

const ContextoGeneral = (props) => {
  const [flag, setFlag] = useState()
  const Wish = [];
  const Cart = [];
 
  const Add = (id) => {
    Cart.push(id)
    localStorage.setItem("Cart", JSON.stringify(Cart));
  }
  
    const AddW = (id) => {
      Wish.push(id)
      localStorage.setItem("Wish", JSON.stringify(Wish));
    }
   
  const Remove = (i) => {
  
    let or = JSON.parse(localStorage.getItem("Cart"))
    let result = or.filter(f => f.indice !== i)
    localStorage.setItem("Cart", JSON.stringify(result));
    /*localStorage.removeItem("Cart", Cart[i] )*/
    setFlag(true)
   
  }
  
  const RemoveW = (i) => {
  
    let or = JSON.parse(localStorage.getItem("Wish"))
    let result = or.filter(f => f.indice !== i)
    localStorage.setItem("Wish", JSON.stringify(result));
    /*localStorage.removeItem("Cart", Cart[i] )*/
    notify3()
  }
 

    const notify3 = () =>{
      toast(
          
        <div  id="cartext" >
          <p >Eliminado de la lista de deseos</p>
          <img id="i" src={corazon} alt="imagen"/>
        </div>
     
    
    );
    document.location.reload()
      }

  return(
    <ThemeContext.Provider value={{Add, Remove, Cart, flag, AddW, RemoveW, Wish}}>  
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ContextoGeneral
         
     
  
  