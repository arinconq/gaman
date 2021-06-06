import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
export default function Navegacion() {
    return (
        <div>
            <ul className="navegacion">
            <li>
              <Link to="/"><i className="fa fa-circle-o iconb"></i></Link>
            </li>
            <li>
              <Link to="/productos"><i className="fa fa-circle-o iconb"></i></Link>
            </li>
            <li>
              <Link to="/ofertas"><i className="fa fa-circle-o iconb"></i></Link>
            </li>
            <li>
              <Link to="/news"><i className="fa fa-circle-o iconb"></i></Link>
            </li>
            <li>
              <Link to="/servicios"><i className="fa fa-circle-o iconb"></i></Link>
            </li>
          </ul>
        </div>
    )
}
