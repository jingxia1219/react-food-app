 import {useState, useRef} from 'react';
 import classes from './MealItemForm.module.css'
 import Input from '../Input'

 
 function MealItemForm(props) {
    //  let itemCount;
    //  const inputRef = useRef(null);
    //  const [itemInput,setItemInput] = useState(0);
    let itemNum = 0;
    function submitHandler(event) {
        event.preventDefault();
        // console.log(); 
        props.getItemNumber(itemNum)
    }
    function getInputHandler(inputState) {
        console.log(inputState);
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
                min:'0',
                max:'5',
                step: '1',
                defaultValue: '0'
            }}/>
            <button type='submit'>+ Add</button>
        </form>
        )
    
 }

 export default MealItemForm;