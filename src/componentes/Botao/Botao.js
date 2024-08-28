import * as React from 'react';
import './Botao.css';


const Botao = (props) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default Botao;