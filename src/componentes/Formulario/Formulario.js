import React from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Dados do produto:</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do produto"/>
                <CampoTexto label="Preço" placeholder="Digite o preço do produto"/>
            </form>
        </section>
    )
}
export default Formulario;