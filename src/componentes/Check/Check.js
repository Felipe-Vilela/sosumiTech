import React from "react"

import './Check.css'

const Check = (props) => {

    const aoSelicionar = (e) => {
        props.aoAlterado(e.target.name, e.target.checked)
    }

    return (
        <div className="checkbox">
            <label className="container">
                <input type="checkbox" name={props.label} checked={props.checked} onChange={aoSelicionar}/>
                <span className="checkmark"></span>
                {props.label}
            </label>
        </div>
    )
}

export default Check