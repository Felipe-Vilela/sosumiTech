import React from "react"
import Checkbox from '@mui/material/Checkbox';


import './Check.css'

const Check = (props) => {

    const aoSelicionar = (e) => {
        props.aoAlterado(e.target.name)
    }

    return (
        <div className="checkbox">
            <Checkbox name={props.label} color="default" size="large" checked={props.checked} onChange={aoSelicionar} inputProps={{ 'aria-label': 'controlled' }} />
            <label>{props.label}</label>
        </div>
    )
}

export default Check