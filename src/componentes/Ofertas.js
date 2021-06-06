import React from "react";
import "../App.css";

import pata from "../recursos/back.jpg";
import cabeza from "../recursos/back_.jpg";
import legal from "../recursos/back.jpg";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Ofertas() {
  
 
 
    return (
      <div className="contenidoR">
       
      <div className="contenedorSingleR">
     <div className="imagenesSingle">
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
  
 
     </div>
     </div>
    );
  
}
