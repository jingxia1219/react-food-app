import classes from './Input.module.css';
import {useRef} from 'react'

function Input(props) {
    const inputRef = useRef()
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
                <input ref={inputRef}{...props.input}/>
        </div>
    )
}

export default Input;