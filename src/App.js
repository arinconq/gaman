import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import Productos from "./componentes/Productos";
import Ofertas from "./componentes/Ofertas";
import Servicios from "./componentes/Servicios";
import Informacion from "./componentes/Informacion";
import Bienvenida from "./componentes/Bienvenida";
import Navegacion from "./componentes/Navegacion"
import Carrito from "./componentes/Carrito"
import items from "./paginas/Items"
import Single from "./paginas/Single"
import DatosCompra from "./componentes/DatosCompra"
import ResumenCompra from "./componentes/ResumenCompra"
import Wishlist from "./componentes/Wishlist"
import Login from "./componentes/Login"
import Registro from "./componentes/Registro"
import Perfil from "./componentes/Perfil"
import Facturas from "./componentes/Facturas"
import LoginTienda from "./componentes/LoginTienda"
import Panel from "./componentes/Panel"
import Filtros from "./tablas/Filtros"
import agregarCategoria from "./tablas/AgregarCategoria"
import dbItems from "./tablas/DbItems"
import Ventas from "./tablas/Ventas"
import FacturasVentas from "./tablas/DbFacturasVentas"
import FacturasInsumos from "./tablas/DbFacturasInsumos"
import Proveedores from "./tablas/Proveedores"
import DbUsuarios from "./tablas/DbUsuarios"
import DbNewsletter from "./tablas/DbNewsletter"
import Editar from "./tablas/Editar"
import EditarFactura from "./tablas/EditarFactura"
import News from "./componentes/News"
import Resumen from "./componentes/Resumen"
import ThemeContext from "./context/ContextoGeneral"

function App() {
  return (
    <div>
          <Router basename={process.env.PUBLIC_URL}>
               
          <ThemeContext>
            <Route path="/" exact component={Bienvenida}/>
            <Route path="/productos" component={Productos}/>
            <Route path="/ofertas" component={Ofertas}/>
            <Route path="/informacion" component={Informacion}/>
            <Route path="/servicios" component={Servicios}/>
            <Route path="/items/:id" component={items}/>
            <Route path="/dbItems/:id" component={dbItems}/>
           
            <Route path="/single/:id" component={Single}/>
           
            <Route path="/DatosCompra" component={DatosCompra}/>
            <Route path="/resumenCompra" component={ResumenCompra}/>
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/login" component={Login}/>
            <Route path="/registro" component={Registro}/>
            <Route path="/perfil" component={Perfil}/>
            <Route path="/facturas" component={Facturas}/>
            <Route path="/loginTienda" component={LoginTienda}/>
            <Route path="/panel" component={Panel}/>
            <Route path="/filtro" component={Filtros}/>
            <Route path="/agregarCategoria" component={agregarCategoria}/>
            <Route path="/editar/:id" component={Editar}/>
            <Route path="/ventas/:p" component={Ventas}/>
            <Route path="/facturasVentas/:p" component={FacturasVentas}/>
            <Route path="/facturasInsumos/:p" component={FacturasInsumos}/>
            <Route path="/proveedores/:p" component={Proveedores}/>
            <Route path="/dbUsuarios/:p" component={DbUsuarios}/>
            <Route path="/dbNewsletter/:p" component={DbNewsletter}/>
            <Route path="/editarFactura/:id" component={EditarFactura}/>
            <Route path="/news" component={News}/>
            <Route path="/resumen" component={Resumen}/>
           
          
            </ThemeContext>
          </Router>
          
           
         
       
          </div>
   
       
  );
}

export default App;
