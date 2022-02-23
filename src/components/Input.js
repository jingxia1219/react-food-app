import classes from './Input.module.css';
import {useState} from 'react'

function Input(props) {
    const [inputState,setInputState] = useState(0)
    function changeHandler(event) {
        // console.log(event.target.value)
        setInputState(event.target.value)
    }
    props.getInput(inputState);
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
                <input onChange = {changeHandler} {...props.input}/>
        </div>
    )
}

export default Input;