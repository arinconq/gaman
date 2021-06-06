import React from 'react'
import gaman4 from "../recursos/gaman4.png"
export default function Facturas() {
    return (
        <div className="Extradefactura">
     
        <div className="contenedorFactura">
        
        <div className="gamanAppear">
           <img src={gaman4} alt="imagen"/>
        </div>
        <div className="listFacturas">
            <div className="contenedorfacturas">
         <p>10 - 30 - 2021</p>
         <p>10 - 31 - 2022</p>
         <p>10 - 24 - 2024</p>
         </div>
        </div>
            
        </div>
        </div>
    )
}
