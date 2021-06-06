import React,{useEffect, useState} from 'react'
import "../App.css";
import logoH from "../recursos/logo-horizontal.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {db,storage} from "../database/firebase.js"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gama from "../recursos/gaman5.png"
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default function DbFacturasInsumos(props) {
  const[imagenes, setImagenes] = useState([]);
  const[Ind, setInd] = useState([]);
  const[messag, setMessag] = useState([]);
  const[state, setState] = useState([]);
  const[bride, setBride] = useState([]);
  const[productos, setProductos] = useState([]);
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  const openModal = (img) => {
    setBride(img)
    open();
  
  }
  const open = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const closeModal = ()=>{
    setIsOpen(false);
  }
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

      db.collection("facturasInsumos").onSnapshot((querySnapshot)=>{
        const indices = [];
        querySnapshot.forEach((doc) => {
            let id = doc.id;
            let nombre = doc.data();
            indices.push(nombre); 
        })
        setInd(indices);
     
  })

    let p =props.match.params.p;
    let a = p ? Number(p) : 1;
    let post = 2;
    let inicio = (a > 1) ? (a * post - post)+1 : 1;
  
    db.collection("facturasInsumos")
    .orderBy("indice")
    .startAt(inicio)
    .limit(post)
    .onSnapshot((query) => {
      const arr = [];
      query.forEach((doc) => {
        const {
          indice,
          proveedor,
          productos,
          precio,
          fecha,
          descripcion,
          foto
         
        } = doc.data();

        arr.push({
          id: doc.id,
          indice,
          proveedor,
          productos,
          precio,
          fecha,
          descripcion,
          foto
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
      <p>Factura Agregado</p>
      <img id="i" src={gama} alt="imagen"/>
    </div>
    
    );
    const notify2 = () =>
    toast(
      
      <div id="cartext">
      <p>Registro eliminado</p>
      <img id="i" src={gama} alt="imagen"/>
    </div>
    
    );
   

    let cargar =  async(e) => {

   
        let foto= e.target.files[0];
        let nombre= e.target.files[0].name;
   
        if(foto)
        {
   
            await  storage
            .ref()
            .child(`images/${nombre}`).put(foto)
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
          .ref(`images/${nombre}`)
          .getDownloadURL()
          .then(resolve => {
            db.collection("facturasInsumos").add({
                indice: (Number(state.length)+1),
                 proveedor: imagenes.proveedor,
                 productos: imagenes.productos,
                 fecha: imagenes.fecha,
                 descripcion: imagenes.descripcion,
                 precio: imagenes.precio,
                 foto: resolve
                 
                })
       
          })
          .catch(error =>{
            console.log(error);
          });
          
         
      
            setMessag("Cargando");
            notify();
            setMessag("");
            console.log("done")
  
 
     
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
     
        db.collection("facturasInsumos").doc(id).delete();
        

      notify2()
    };
    

    return (
        <div className="contenedorPanel">
        <div>
        
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <div id="contimax">
        <img id="imax"  src={bride}/>
        </div>
      </Modal>
     
    </div>
        <div className="vista">
         <div className="opcionesTop">
           <div className="itemsO">
               <p>INVENTARIO</p>
               <Link to="/agregarCategoria">
               <p>Agregar Categoria</p>
               </Link>
           </div>
         </div>
            
              <h1>FACTURAS INSUMOS</h1>
              <div className="buscadorD">
        <input type="search" />
        <i className="fa fa-search iconoc"></i>
      </div>
      <div className="tablaPeluches">
      
  <table>
    <tr>
      
      <th>Id</th>
      <th>Proveedor</th>
      <th>Productos</th>
      <th>Fecha</th>
      <th>Descripcion</th>
      <th>Valor</th>
      <th>Foto</th>
     
      <th>-
      </th>
      
    </tr>
    {state.map((k)=>{
      return(
    
    <tr onDoubleClick={()=>deleteUserId(k.id)}>
     
      <td>{k.id}</td>
      <td>{k.proveedor}</td>
      <td>{k.productos}</td>
      <td>{k.fecha}</td>
      <td>{k.descripcion}</td>
      <td>{k.precio}</td>
      <td><img onClick={()=>openModal(k.foto)} src={k.foto} width={50}/></td>
      <td><Link to={"/editarFactura/"+"facturasInsumos"+":"+k.id}><p className="edit">Editar</p></Link></td>
     
    </tr>
    
    
   );
  })}
  </table>
  
  
  </div>
  <div className="paginacion">
    {(Number(p) == 1)?(
       <p className="disabled"><i  className="fa fa-chevron-left"></i></p>
    ):<a href={"/dbItems/"+"facturasInsumos"+":"+(Number(p)-1)}><i  className="fa fa-chevron-left "></i></a>}
    
       <p>{p}</p>
      
       {(Number(p) == Ind.length)?(
       <p className="disabled"><i  className="fa fa-chevron-right"></i></p>
    ):<a href={"/dbItems/"+"facturasInsumos"+":"+(Number(p)+1)}><i  className="fa fa-chevron-right "></i></a>}
  </div>
  <Form> 
      <h2 className="titleh2">NUEVO PRODUCTO</h2>
      
      <div className="grupo">
            <input type="text" onChange={handle} name="proveedor" placeholder="Proveedor"/>
        </div>
        <div className="grupo">
            <input type="text" onChange={handle} name="productos" placeholder="Productos"/>
        </div>
        <div className="grupo">
            <input type="text" onChange={handle} name="fecha" placeholder="Fecha"/>
        </div>
        <div className="grupo">
        <textarea className="textArea"  onChange={handle}   name="descripcion" placeholder="Descripcion"/>
        </div>
        <div className="grupo">
            <input type="text"  onChange={handle}  name="precio" placeholder="Valor"/>
        </div>
        
        <div className="grupoC">
        <p>{messag}</p>
        <label className="label">Imagen</label>
        <input onChange={cargar} type="file" name="foto"/>
        </div>
        <div>
         
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
