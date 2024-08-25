import React from "react";
import './Produto.css';

const Produto = ({marca, nome, preco, estado}) => {

    let img = "/imagens/logo" + marca + ".png"

    return (
        <div className="produto">
            <div className="cabecalho">
                <img src={img} alt={marca} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{preco}</h5>
                <h5>{estado}</h5>
            </div>
        </div>
    )   
}
export default Produto;