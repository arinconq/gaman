import React from 'react'
import { Form} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function LoginTienda() {
    return (
        <div className="login">
        
        <Form>
        <h1>LOGIN TIENDA</h1>
        <div className="grupo">
        <i className="fa fa-user"></i>
            <input type="email" placeholder="Correo"/>
        </div>
        <div className="grupo">
        <i className="fa fa-lock"></i>
            <input type="password" placeholder="Contraseña"/>
        </div>
        <Link className="registro" to="/registro">
            <p>Regístrate</p>
        </Link>
        <div>
         <Link to="/panel">
            <button className="enviar">ENVIAR</button>
       </Link>
        </div>
      </Form>
    </div>
    )
}
