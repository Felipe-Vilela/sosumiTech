import React from "react";
import './Secao.css';
import Produto from "../Produto/Produto";

const Secao = (props) => {

    const corFundo = {backgroundColor: props.corSecundaria}
    const corSublinhado = {borderColor: props.corPrimaria}
    return (
        (props.produtos.length > 0 ) ? <section className="secao" style={corFundo}>
            <h3 style={corSublinhado}> {props.nome}</h3>
            <div className="produtos">
                {props.produtos.map(prod => <Produto
                                                key={prod.nome}
                                                marca={prod.marca}
                                                nome={prod.nome}
                                                preco={prod.preco}
                                                estado={prod.estado}
                                                />

                )}
            </div>
            
        </section>
        : ''
    )
}


export default Secao;