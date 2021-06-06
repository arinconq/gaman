import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../App.css";
import Menu from "../componentes/Menu";
export default function MenuPuntos() {
    const [state, setState] = useState(false);
    const menu = () => {
        if (!state) {
          setState(true);
        } else {
          setState(false);
        }
      };
    return (
        <div className="s">
        <div onClick={menu} className="contenedor-icon">
            <i className="fa fa-circle icon"></i>
            <i className="fa fa-circle icon"></i>
            <i className="fa fa-circle icon"></i>
          </div>
          {state ? <Menu /> : null}
        </div>
    )
}
