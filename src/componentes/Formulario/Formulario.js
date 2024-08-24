import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import Check from "../Check/Check";

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

    
    const [secao, setSecao] = useState('Computadores');
    const [marca, setMarca] = useState('HP');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [checked, setChecked] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi submetido => ", secao, marca, nome, preco, checked)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do produto:</h2>
                <ListaSuspensa label="Seção" itens={secoes} aoAlterado={valor => setSecao(valor)}/>
                <ListaSuspensa label="Marca" itens={marcas} aoAlterado={valor => setMarca(valor)}/>
                <CampoTexto label="Nome" placeholder="Digite o nome do produto" aoAlterado={valor => setNome(valor)} />
                <CampoTexto label="Preço" placeholder="Digite o preço do produto" aoAlterado={valor => setPreco(valor)} />
                <div className="form_div_check">
                    <Check label="Novo" aoAlterado={valor => setChecked(valor)}></Check>
                    <Check label="Usado" aoAlterado={valor => setChecked(valor)} ></Check>
                </div>
                <Botao>INSERIR PRODUTO</Botao> 
            </form>
        </section>
    )
}
export default Formulario;
