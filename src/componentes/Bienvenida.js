import React from "react";
import gaman from "../recursos/gaman13.png";

import petal1 from "../recursos/hoja1.png";
import petal2 from "../recursos/hoja2.png";
import name from "../recursos/name.png";
import "font-awesome/css/font-awesome.min.css";
import "../App.css";

import CarritoWish from "../componentes/CarritoWish";
import pata from "../recursos/slidea.jpg";
import cabeza from "../recursos/slideb.jpg";
import legal from "../recursos/slidec.png";
import flecha from "../recursos/flecha.png";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from "../componentes/Productos";
import Ofertas from "../componentes/Ofertas";
import Servicios from "../componentes/Servicios";
import News from "../componentes/News"
import MenuPuntos from "./MenuPuntos";


function Bienvenida() {


 /* useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log(window.scrollTop);
    let medida = window.scrollTop;
    if (medida > 500) {
      console.log("punto");
    }
  };*/

 
  return (
    <div className="t">
      
    
    <div className="s">
    
   
      <div className="contenedorLogo">
      <div className="boxControls">
     <MenuPuntos/>
     <CarritoWish/>
     </div>
     
        <div className="interLogo">
        <div className="buscadorB">
        <input type="search" />
        <i className="fa fa-search iconoc"></i>
      </div>
      <div className="logo">
        <img className="image" src={gaman} alt="gaman" />
      </div>
      <div className="contenedorTexto">
      <div className="contenedor-hojas">
        <img className="hoja2" src={petal2} alt="gaman"/>
        <img className="hoja" src={petal1} alt="gaman"/>
      </div>
      <div className="contenedor-name">
        <p>GAMAN</p>
        <p>Pepeleria Kawai</p>
      
      </div>
      
      </div>
     
      </div>
      </div>
    
      
     
    </div>
    <div className="carrouselB">
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pata}
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={cabeza}
        alt="Second slide"
      />
  
  
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={legal}
        alt="Third slide"
      />
  
   
    </Carousel.Item>
  </Carousel>
    </div>
    <div className="advice">
        <p>Papeleria y Accesorios Kawaii</p>
        <img  width={50} src={flecha}/>
      </div>
    <div>

         
         <Productos/>
         <Ofertas/>
         <News/>
         <Servicios/>
         </div>
    </div>
  );
}
export default Bienvenida;
