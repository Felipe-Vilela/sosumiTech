import React, { useState } from 'react';

import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Secao from './componentes/Secao/Secao';
// import Lista from './componentes/Lista/Lista';

function App() {

    const secoes = [
        {
            nome : 'Computadores',
            corPrimaria : '#57c278',
            corSecundaria : '#d9f7e9'
        },
        {
            nome: 'Acessórios',
            corPrimaria : '#82cffa',
            corSecundaria : '#e8f8ff'
        },
        {
            nome: 'Impressoras',
            corPrimaria : '#a6d157',
            corSecundaria : '#f0f8e2'
        },
        {
            nome: 'Games',
            corPrimaria : '#e06b69',
            corSecundaria : '#fde7e8'
        },
        {
            nome: 'Gadgets',
            corPrimaria : '#57c278',
            corSecundaria : '#d9f7e9'
        }
    ]

    const listaNomeSecoes = secoes.map(area => area.nome)

    const [produtos, setProdutos] = useState([]);


    const adicionaProduto = (produto) =>{
        console.log(produto)
        const listaNova = produtos.slice();
        listaNova.push(produto)
        setProdutos(listaNova)

    }

  return (
    <div className="App">
        <Banner/>
        <Formulario secoes={listaNomeSecoes} aoProdutoCadastrado={produt => adicionaProduto(produt)} />
        {secoes.map(secao => <Secao key={secao.nome}
                                    nome={secao.nome}
                                    corPrimaria={secao.corPrimaria}
                                    corSecundaria={secao.corSecundaria} 
                                    produtos={produtos.filter(prod => prod.secao === secao.nome)}
                                    />) }
    </div>
  );
}

export default App;

//2-44