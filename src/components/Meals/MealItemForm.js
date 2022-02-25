 import {useState} from 'react';
 import classes from './MealItemForm.module.css'
 import Input from '../Input'

 
 function MealItemForm(props) {
     const [inputValid, setInputValid] = useState(true)
    //  let itemCount;
    //  const inputRef = useRef(null);
    //  const [itemInput,setItemInput] = useState(0);
    let itemNum = 0;
    function submitHandler(event) {
        event.preventDefault();
        // console.log(); 
        if (itemNum <= 5 && itemNum > 0)
        {setInputValid(true)
        props.getItemNumber(itemNum)}
        else {
            setInputValid(false)
        }
    }
    function getInputHandler(inputState) {
        // console.log(inputState);
        itemNum = inputState;
    }
    return(
        // <Fragment>
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