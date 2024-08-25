import React, { useState } from 'react';

import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Secao from './componentes/Secao/Secao';
// import Lista from './componentes/Lista/Lista';

function App() {

    const secoes = [
        {
            nome : 'Computadores',
            corPrimaria : '#FC023A',
            corSecundaria : '#fff0f3'
        },
        {
            nome: 'Acessórios',
            corPrimaria : '#F7792D',
            corSecundaria : '#ffefe5'
        },
        {
            nome: 'Impressoras',
            corPrimaria : '#13D7D2',
            corSecundaria : '#e2f5f5'
        },
        {
            nome: 'Games',
            corPrimaria : '#F50AA0',
            corSecundaria : '#fff5fb'
        },
        {
            nome: 'Gadgets',
            corPrimaria : '#63E819',
            corSecundaria : '#f3ffed'
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