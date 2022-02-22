 import {useState, useRef, Fragment} from 'react';
 import classes from './MealItemForm.module.css'
 import Input from '../Input'
 
 function MealItemForm(props) {
    //  let itemCount;
     const inputRef = useRef(null);
    //  const [itemInput,setItemInput] = useState(0);
    // function submitHandler(event) {
    //     event.preventDefault();
    //     console.log(inputRef.current.value); 
    //     setItemInput(inputRef.current.value)
    // }
    return(
        // <Fragment>
        <form className={classes.form} 
        // onSubmit={submitHandler}
        >
            <Input label="Amount" input={{
                id:'amount_'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step: '1',
                defaultValue: '1'
                // type='number' min='0' max='99' ref={inputRef}
            }}
            />
            {/* {itemCount}</input> */}

            <button type='submit'>+ Add</button>
        </form>
        )
        /*{ <div className={classes.itemCount}>{`itemCount:${itemInput}`}</div> }*/
        /*{ </Fragment> }*/
 }

 export default MealItemForm;