import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import Check from "../Check/Check";

const Formulario = (props) => {
    
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
    const [checkedNovo, setCheckedNovo] = useState(false);
    const [checkedUsado, setCheckedUsado] = useState(false);


    const aoSalvar = (evento) => {
        evento.preventDefault();
        let estado;
        if (checkedNovo) {
            estado = 'Novo';
        } else if (checkedUsado) {
            estado = 'Usado';
        } else {
            estado = 'Não Informado';
        }

        props.aoProdutoCadastrado(
            {
            "secao": secao,
            "marca": marca,
            "nome": nome,
            "preco": preco,
            "estado": estado,
            "img": marca
            }
        );

        setSecao('Computadores');
        setMarca('HP');
        setNome('');
        setPreco('');
        setCheckedNovo(false);
        setCheckedUsado(false);

        evento.target.reset()
    };

    const handleCheckboxChange = (name, checked) => {
        if (name === 'Novo') {
            setCheckedNovo(checked);
            if (checked) setCheckedUsado(false);
        } else if (name === 'Usado') {
            setCheckedUsado(checked);
            if (checked) setCheckedNovo(false);
        }
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do produto:</h2>
                <ListaSuspensa label="Seção" itens={props.secoes} aoAlterado={valor => setSecao(valor)} />
                <ListaSuspensa label="Marca" itens={marcas} aoAlterado={valor => setMarca(valor)} />
                <CampoTexto type="text" label="Nome" placeholder="Digite o nome do produto" aoAlterado={valor => setNome(valor)} />
                <CampoTexto type="number" label="Preço" placeholder="Digite o preço do produto" aoAlterado={valor => setPreco(valor)} />
                <div className="form_div_check">
                    <Check id="novo" label="Novo" checked={checkedNovo} aoAlterado={handleCheckboxChange} />
                    <Check id="usado" label="Usado" checked={checkedUsado} aoAlterado={handleCheckboxChange} />
                </div>
                <Botao>INSERIR PRODUTO</Botao> 
            </form>
        </section>
    );
}

export default Formulario;