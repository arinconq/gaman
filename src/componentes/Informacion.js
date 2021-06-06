import React, { Component } from "react";
import foto from "../recursos/back.jpg";

export default class Informacion extends Component {
  render() {
    return (
      <div>
        <div className="back">
          <div className="fond">
            <img src={foto} alt="imagen" />
          </div>
        </div>
      </div>
    );
  }
}
