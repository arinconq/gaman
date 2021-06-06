import React, {useEffect, useState, useContext} from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {db,storage} from "../database/firebase.js"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import carrito from "../recursos/gaman10.png";
import {ThemeContext} from "../context/ContextoGeneral"
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carrito from "../componentes/Carrito"
import MenuPuntos from "../componentes/MenuPuntos"
import CarritoWish from "../componentes/CarritoWish"


export default function Single(props) {

  const {Add, Remove} = useContext(ThemeContext);
  const {Cart, flag} = useContext(ThemeContext);
  const[state, setState] = useState([]);
  const[pik, setPik] = useState([]);
  const[abrir, setAbrir] = useState(false);

 
    const open = () => {
     
       if(!abrir){
           setAbrir(true)
       }else{
           setAbrir(false)
       }
    }

    useEffect(() => {
      getProductoById();
      traerFotos();
    },[]);

  let Sub=(e)=>{
  
    e.preventDefault()
    let arr = [];
        let indice = e.target.indice.value;
        let producto= e.target.producto.value;
        let descripcion= e.target.descripcion.value;
        let precio= e.target.precio.value;
        let cantidad= e.target.cantidad.value;
        let color= e.target.color.value;
        let imagen = e.target.imagen.value;
        let subtotal = Number(precio.substring(1,precio.length))*Number(cantidad)
    
     arr.push({
       indice,
       producto,
       descripcion,
       precio,
       cantidad,
       color, 
       imagen,
       subtotal
     })
   Add({
     indice,
    producto,
    descripcion,
    precio,
    cantidad,
    color,
    imagen,
    subtotal
   })
   notify()
 
} 
const notify = () =>{
  toast(
      
    <div onClick={open} id="cartext" >
      <p >¡Hecho! Ver Carrito</p>
      <img id="i" src={carrito} alt="imagen"/>
    </div>


);

}
    
 
 /* console.log(ad)*/
/*console.log(Cart.length)*/
  


  const getProductoById = async () => {
    let vaa = props.match.params.id.toString();
    let nombreDb = vaa.substring(0,vaa.lastIndexOf(":"))
    let IdN = vaa.substring(vaa.lastIndexOf(":")+1, vaa.length)
    const dbRef = db.collection(nombreDb).doc(IdN);
    const doc = await dbRef.get();
    const producto = doc.data();
    setState({
      ...producto,
      id: doc.id,
    });
   
}
const traerFotos = () => {
  let vaaR = props.match.params.id.toString();
  let IdQ = vaaR.substring(vaaR.lastIndexOf(":")+1, vaaR.length)
 db.collection("imagenes").where("idR", "==", IdQ).onSnapshot((query) => {
    const listPictures = []
    query.forEach((doc) => {
     let m = doc.data().foto;
     listPictures.push(m)
  });
  setPik(listPictures)
});
}

const cambio = (value) =>{
  console.log(value);
}
const cambioC = (value) =>{
  console.log(value);
}
  
  
   let disminuir = (e) =>{
     e.preventDefault()
     let valu = document.getElementById("indi").value;
     if(valu > 1){
      document.getElementById("indi").value--;
     }else{
      document.getElementById("indi").value = "1";
     
     }
   
  
   }
   let aumentar = (e) => {
    e.preventDefault()
    document.getElementById("indi").value++;
    
   }

 
  return (
  
    <div className="contenido">
    
     <div className="boxControls">
     <MenuPuntos/>
     <CarritoWish/>
     </div>
    <div className="contenedorSingle">
   <div className="imagenesSingle">
  <Carousel>
     {pik.map((v,i) => {
       return(
      <Carousel.Item key={i}>
      <img
        className="d-block w-100"
        src={v}
        alt="First slide"
      />
      
    </Carousel.Item>
  );
})}
 
</Carousel>

</div>

<div className="descripcionSingle">

  <form className="ProductName" onSubmit={Sub}>

  
  <textarea value={state.producto} name="producto" readOnly/>
  

   <textarea value={state.descripcion} name="descripcion" readOnly/>
  
 
   <input type="text" value={"$"+state.precio} name="precio" readOnly/>
 
     <div className="Sopciones">
     {state.color1 ? (
     <select  onChange={cambio} name="color">
  {state.color1 ? (
  <option value={state.color1} name="color1">{state.color1}</option>
  ) : null}
   {state.color2 ? (
  <option value={state.color2} name="color2">{state.color2}</option>
  ) : null}
   {state.color3 ? (
  <option value={state.color3} name="color3">{state.color3}</option>
  ) : null}
   {state.color4 ? (
  <option value={state.color4}name="color4">{state.color4}</option>
  ) : null}
   {state.color5 ? (
  <option value={state.color5} name="color5">{state.color5}</option>
  ) : null}
  
</select>
): null}
<input type="hidden" value={state.id} name="indice" readOnly/>
  <input type="hidden" name="imagen" value={pik.map((v)=> v)}/>
  
<div className="cantidad">
  <button className="menos" onClick={disminuir}>-</button>
  <input type="text" onChange={cambioC} id="indi" value="1" name="cantidad"/>
  <button className="mas" onClick={aumentar}>+</button>
</div>
</div>
 
   
    <div className="contenedorBtnCotizar">
      <div className="botonCotizar">
      <input  type="submit" value="AÑADIR AL CARRITO"/>

      </div>
      
    </div>
    </form>
    {abrir ? <Carrito/> : null}     
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
   </div>
  
  );
}
