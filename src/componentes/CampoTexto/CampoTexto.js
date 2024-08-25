import React from "react";   
import './CampoTexto.css'   

const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value);
    }


    return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input type={props.type} step=".01" onChange={aoDigitado} placeholder={props.placeholder}/>
            </div>
    )
}
export default CampoTexto;