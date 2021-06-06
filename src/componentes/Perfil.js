import React from 'react'
import user from "../recursos/gaman13.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Perfil() {
    return (
        <div className="ExtraContenedor">
        <div className="contenedorPerfil">
            <div className="fotoPerfil">
                <img src={user} alt="imagen"/>
                <div className="datosBienvenida">
                <p>Bienvenido, Usuario</p>
                <p>Teléfono: 22222</p>
                <p>Dirección: Trans 44 B </p>
                <p>Correo: correo@correo.com</p>
                </div>
            </div>
            <div className="datosPerfil">
                <Link to="/productos">
                <p>Productos</p>
                </Link>
                <Link to="/wishlist">
                <p>Lista de Deseos</p>
                </Link>
                <Link to="/facturas">
                <p>Facturas</p>
                </Link>
            </div>
            
        </div>
        </div>
    )
}
