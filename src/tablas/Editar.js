import React,{useEffect, useState} from 'react'
import "../App.css";
import logoH from "../recursos/logo-horizontal.png"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {db,storage} from "../database/firebase.js"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gama from "../recursos/gaman5.png"



export default function Editar(props) {
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
    let va = props.match.params.id.toString();
    let IdN = va.substring(va.lastIndexOf(":")+1, va.length)
    db.collection("imagenes").where("idR", "==", IdN).onSnapshot((querySnapshot) => {
      const listPictures = []
      querySnapshot.forEach((doc) => {
       const{idR, foto} = doc.data();
       let id = doc.id;
       listPictures.push({
         id: id,
         idR :idR,
         foto: foto
       })
    });
    setPik(listPictures);
    
  })

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
    referencia: state.referencia,
    producto: state.producto,
    descripcion: state.descripcion,
    cantidad: state.cantidad,
    precioA: state.precioA,
    precio: state.precio,
    color1: state.color1 ? state.color1 : "",
    color2:state.color2 ? state.color2 : "",
    color3: state.color3 ? state.color3 : "",
    color4: state.color4 ? state.color4 : "",
    color5: state.color5 ? state.color5 : "",
 
   });
  }
   notify();
}

    let cargar =  async(e,id) => {
      e.preventDefault()
      console.log(e.target.value, id);
  
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
          db.collection("imagenes").doc(id).update({
            foto: resolve
            })
     
        })
    notify()
 }

 
 let cargar2 =  async(e) => {

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
    referencia: state.referencia,
    producto: state.producto,
    descripcion: state.descripcion,
    cantidad: state.cantidad,
    precioA: state.precioA,
    precio: state.precio,
    color1: state.color1 ? state.color1 : "",
    color2:state.color2 ? state.color2 : "",
    color3: state.color3 ? state.color3 : "",
    color4: state.color4 ? state.color4 : "",
    color5: state.color5 ? state.color5 : "",
    foto: resolve
        })
 
    })
notify();

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
          <label className="label">Referencia</label>
            <input type="text" onChange={handle}  value={state.referencia} name="referencia" placeholder="Referencia"/>
        </div>
        <div className="grupo">
        <label className="label" >Producto</label>
            <input type="text" onChange={handle}  value={state.producto} name="producto" placeholder="Producto"/>
        </div>
        <div className="grupo">
        <label className="label">Descripción</label>
            <textarea className="textArea"  onChange={handle}  value={state.descripcion} name="descripcion" placeholder="Descripcion"/>
        </div>
        <div className="grupo">
        <label className="label">Cantidad</label>
            <input type="text"  onChange={handle}  value={state.cantidad}  name="cantidad" placeholder="Cantidad"/>
        </div>
        <div className="grupo">
        <label className="label">Precio(Anterior)</label>
            <input type="text"  onChange={handle}  value={state.precioA} name="precioA" placeholder="Precio Anterior"/>
        </div>
        <div className="grupo">
        <label className="label">Precio(Actual)</label>
            <input type="text"  onChange={handle}  value={state.precio} name="precio" placeholder="Precio Actual(Oferta)"/>
        </div>
        <div className="grupo">
        <label className="label">Color1</label>
            <input type="text"  onChange={handle}  value={state.color1}  name="color1" placeholder="Color1"/>
        </div>
        <div className="grupo">
        <label className="label">Color2</label>
            <input type="text"  onChange={handle}  value={state.color2}  name="color2" placeholder="Color2"/>
        </div>
        <div className="grupo">
        <label className="label">Color3</label>
            <input type="text"  onChange={handle}  value={state.color3} name="color3" placeholder="Color3"/>
        </div>
        <div className="grupo">
        <label className="label">Color4</label>
            <input type="text"  onChange={handle}  value={state.color4} name="color4" placeholder="Color4"/>
        </div>
        <div className="grupo">
        <label className="label">Color5</label>
            <input type="text"  onChange={handle}  value={state.color5} name="color5" placeholder="Color5"/>
        </div>
        <div className="grupoC">
         <label className="label">Imagen</label>
         <input onChange={cargar2} type="file" name="foto" />
         <img src={state.foto} width={50}/>
         
         </div>
        <div>
          <input type="submit"  value="ENVIAR"/>
        </div>
      </Form>
      <h2 className="titleh2">IMAGENES SLIDE PRODUCTO</h2>
         {pik.map((m) => {
           return(
        <div className="contenedorgrupof">
         <div className="grupoF">
         <label className="label">Imagen</label>
         <input onChange={(e)=>cargar(e, m.id)} type="file" name="foto" />
         <img src={m.foto} width={50}/>
         
         </div>
         </div>
         
         );
        })}
        
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
