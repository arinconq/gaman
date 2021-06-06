import React,{useEffect, useState} from 'react'
import "../App.css";
import logoH from "../recursos/logo-horizontal.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {db,storage} from "../database/firebase.js"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gama from "../recursos/gaman5.png"


export default function Proveedores(props) {
  const[imagenes, setImagenes] = useState([]);
  const[Ind, setInd] = useState([]);
  const[messag, setMessag] = useState([]);
  
  const[arrayId, setArrayId] = useState([]);
  const[state, setState] = useState([]);
  const[productos, setProductos] = useState([]);
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
    })
    
      db.collection("proveedores").onSnapshot((querySnapshot)=>{
        const indices = [];
        querySnapshot.forEach((doc) => {
            let id = doc.id;
            let nombre = doc.data();
            indices.push(nombre); 
        })
        setInd(indices);
     
  })

    let p = props.match.params.p
    let a = p ? Number(p) : 1;
    let post = 2;
    let inicio = (a > 1) ? (a * post - post)+1 : 1;
  
    db.collection("proveedores")
    .orderBy("indice")
    .startAt(inicio)
    .limit(post)
    .onSnapshot((query) => {
      const arr = [];
      query.forEach((doc) => {
        const {
          indice,
         nombres, 
         apellidos,
         producto,
         telefono,
         correo,
         direccion
         
        } = doc.data();

        arr.push({
          id: doc.id,
          indice,
          nombres, 
          apellidos,
          producto,
          telefono,
          correo,
          direccion
        });
       
      });
      setState(arr);
  
    });
 
   
  },[]);

  const refrescar = () => {
    window.location.reload()
  }
  const handle = (e) => {
    const{name, value} = e.target;
    setImagenes({...imagenes,[name]: value})
   }
    const acordion = () => {
        let variable = document.getElementById("div1");
      if( variable.style.display === "block"){
        variable.style.display = "none";
      }else{
        variable.style.display = "block";
      }
      
        
    }
   
    let p = props.match.params.p
    const notify = () =>
    toast(
      
      <div id="cartext">
      <p>Proveedor Agregado</p>
      <img id="i" src={gama} alt="imagen"/>
    </div>
    
    );
    const notify2 = () =>
    toast(
      
      <div id="cartext">
      <p>Proveedor eliminado</p>
      <img id="i" src={gama} alt="imagen"/>
    </div>
    
    );
   

    let cargar =  async(e) => {
      e.preventDefault();
  db.collection("proveedores").add({
    indice: (Number(state.length)+1),
     nombres: imagenes.nombres,
     apellidos: imagenes.apellidos,
     producto: imagenes.producto,
     direccion: imagenes.direccion,
     correo: imagenes.correo,
     telefono: imagenes.telefono
   
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
    const deleteUserId = (id) => {
      console.log(id)
     
        db.collection("proveedores").doc(id).delete();
       
     
        
      
      notify2()
    };
    
  

  
 
  

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
            
              <h1>PROVEEDORES</h1>
              <div className="buscadorD">
        <input type="search" />
        <i className="fa fa-search iconoc"></i>
      </div>
      <div className="tablaPeluches">
      
  <table>
    <tr>
      
      <th>Id</th>
      <th>Nombres</th>
      <th>Apellidos</th>
      <th>Producto</th>
      <th>Teléfono</th>
      <th>Correo</th>
      <th>Dirección</th>
   
  
      <th>-
      </th>
      
    </tr>
    {state.map((k)=>{
      return(
    
    <tr onDoubleClick={()=>deleteUserId(k.id)}>
     
      <td>{k.id}</td>
      <td>{k.nombres}</td>
      <td>{k.apellidos}</td>
      <td>{k.producto}</td>
      <td>{k.telefono}</td>
      <td>{k.correo}</td>
      <td>{k.direccion}</td>
      
     
    </tr>
    
    
   );
  })}
  </table>
  
  
  </div>
  <div className="paginacion">
    {(Number(p) == 1)?(
       <p className="disabled"><i  className="fa fa-chevron-left"></i></p>
    ):<a href={"/proveedores/"+(Number(p)-1)}><i  className="fa fa-chevron-left "></i></a>}
    
       <p>{p}</p>
      
       {(Number(p) == Ind.length)?(
       <p className="disabled"><i  className="fa fa-chevron-right"></i></p>
    ):<a href={"/proveedores/"+(Number(p)+1)}><i  className="fa fa-chevron-right "></i></a>}
  </div>
  <Form onSubmit={cargar}>
      <h2 className="titleh2">NUEVO PRODUCTO</h2>
      
      <div className="grupo">
            <input type="text" onChange={handle} name="nombres" placeholder="Nombres"/>
        </div>
        <div className="grupo">
            <input type="text" onChange={handle} name="apellidos" placeholder="Apellidos"/>
        </div>
    
        <div className="grupo">
            <input type="text"  onChange={handle}  name="producto" placeholder="Producto"/>
        </div>
        <div className="grupo">
            <input type="text"  onChange={handle}  name="telefono" placeholder="Teléfono"/>
        </div>
        <div className="grupo">
            <input type="email"  onChange={handle}  name="correo" placeholder="Correo"/>
        </div>
        <div className="grupo">
            <input type="text"  onChange={handle}  name="direccion" placeholder="Dirección"/>
        </div>
        <div className="grupo">
            <input type="submit"  value="ENVIAR" />
        </div>
       
      </Form>
      
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
