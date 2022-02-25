 import {useState} from 'react';
 import classes from './MealItemForm.module.css'
 import Input from '../Input'

 
 function MealItemForm(props) {
     const [inputValid, setInputValid] = useState(true)
    let itemNum = 0;
    function submitHandler(event) {
        event.preventDefault();
        if (itemNum <= 5 && itemNum > 0)
        {setInputValid(true)
        props.getItemNumber(itemNum)}
        else {
            setInputValid(false)
        }
    }
    function getInputHandler(inputState) {
        itemNum = inputState;
    }
    return(
        <form className={classes.form} 
        onSubmit={submitHandler}
        >
            <Input getInput={getInputHandler} label="Amount" input={{
                id:'amount_'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button type='submit'>+ Add</button>
            { !inputValid && <p>Please enter a number between 1 - 5. </p>}
        </form>
        )
    
 }

 export default MealItemForm;