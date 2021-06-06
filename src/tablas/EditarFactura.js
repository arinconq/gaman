import React,{useEffect, useState} from 'react'
import "../App.css";
import logoH from "../recursos/logo-horizontal.png"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {db,storage} from "../database/firebase.js"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gama from "../recursos/gaman5.png"



export default function EditarFactura(props) {
  const[imagenes, setImagenes] = useState([]);
  const[messag, setMessag] = useState([]);
  

  const[state, setState] = useState([]);
  const[productos, setProductos] = useState([]);
  const[pik, setPik] = useState([]);
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
      setProductos(arreglo);
    });
   
  getProductoById();
   
  },[]);
 
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

  const handle = (e) => {
    let name= e.target.name;
    let value= e.target.value;
    console.log(name, value);
    setState({...state,[name]: value});
 
   }
  
    const acordion = () => {
        let variable = document.getElementById("div1");
      if( variable.style.display === "block"){
        variable.style.display = "none";
      }else{
        variable.style.display = "block";
      }
      
        
    }
    let vaa = props.match.params.id.toString();
    let nombreDb = vaa.substring(0,vaa.lastIndexOf(":"))
    let IdN = vaa.substring(vaa.lastIndexOf(":")+1, vaa.length)
    const notify = () =>
    toast(
      
      <div id="cartext">
      <p>Producto Editado</p>
      <img id="i" src={gama} alt="imagen"/>
    </div>
    
    );
  


    const enviar = async(e) => {
    if(e){
    e.preventDefault();
   const dbRef = db.collection(nombreDb).doc(IdN);
   await dbRef.set({
    indice: Number(state.indice),
    proveedor : state.proveedor,
    productos: state.productos,
    fecha: state.fecha,
    descripcion: state.descripcion,
    precio: state.precio,
    foto: state.foto
   });
  }
   notify();
}

    let cargar =  async(e) => {
      e.preventDefault()
  
      let foto= e.target.files[0];
      let nom= e.target.files[0].name; 
 
      if(foto)
      {
 
          await  storage
          .ref()
          .child(`images/${nom}`).put(foto)
          .then(resolve => {
              console.log(resolve);
          })
          .catch(error => {
              console.log(error);
          });
       
    }else{
        console.log("error");
    } 
  

  storage
        .ref(`images/${nom}`)
        .getDownloadURL()
        .then(resolve => {
            db.collection(nombreDb).doc(IdN).update({
                indice: Number(state.indice),
                proveedor : state.proveedor,
                productos: state.productos,
                fecha: state.fecha,
                descripcion: state.descripcion,
                precio: state.precio,
                foto: resolve
                })
     
        })
    notify()
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
               <Link to="/agregarCategoria">
               <p>Agregar Categoria</p>
               </Link>
           </div>
         </div>
            
              <h1>{nombreDb}</h1>
              


  <Form className="editarForm" onSubmit={enviar}>
      <h2 className="titleh2">EDITAR</h2>
      <div className="grupo">
          <label className="label">Indice</label>
            <p>{state.indice}</p>
        </div>
        <div className="grupo">
        <label className="label" >Proveedor</label>
            <input type="text" onChange={handle}  value={state.proveedor} name="proveedor" placeholder="Proveedor"/>
        </div>
        <div className="grupo">
        <label className="label" >Producto</label>
            <input type="text" onChange={handle}  value={state.productos} name="productos" placeholder="Producto"/>
        </div>
        <div className="grupo">
        <label className="label" >Fecha</label>
            <input type="text" onChange={handle}  value={state.fecha} name="fecha" placeholder="Fecha"/>
        </div>
        <div className="grupo">
        <label className="label">Descripción</label>
            <textarea className="textArea"  onChange={handle}  value={state.descripcion} name="descripcion" placeholder="Descripcion"/>
        </div>
        <div className="grupo">
        <label className="label" >Precio</label>
            <input type="text" onChange={handle}  value={state.precio} name="precio" placeholder="Precio"/>
        </div>
        <div>
          <input type="submit"  value="ENVIAR"/>
        </div>
       
        
      </Form>
      <div className="grupoF">
         <label className="label">Imagen</label>
         <input onChange={cargar} type="file" name="foto" />
         <img src={state.foto} width={50}/>
         
         </div>
    
        <h2 className="titleh2">.</h2>
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
                  {productos.map((t)=> {
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
