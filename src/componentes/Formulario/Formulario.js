import React from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = () => {
    
    const secoes = [
        'Computadores',
        'Acessórios',
        'Impressoras',
        'Games',
        'Gadgets'
    ]

    const marcas = [
        'HP',
        'Dell',
        'Positivo',
        'Asus',
        'AliExpress'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("ok")
    }

    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do produto:</h2>
                <ListaSuspensa label="Seção" itens={secoes} />
                <ListaSuspensa label="Marca" itens={marcas} />
                <CampoTexto label="Nome" placeholder="Digite o nome do produto"/>
                <CampoTexto label="Preço" placeholder="Digite o preço do produto"/>
                <Botao>INSERIR PRODUTO</Botao> 
            </form>
        </section>
    )
}
export default Formulario;
