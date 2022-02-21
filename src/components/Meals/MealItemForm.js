 import {useState, useRef, Fragment} from 'react';
 
 function MealItemForm() {
     let itemCount;
     const inputRef = useRef(null);
     const [itemInput,setItemInput] = useState(0);
    function submitHandler(event) {
        event.preventDefault();
        console.log(inputRef.current.value); 
        setItemInput(inputRef.current.value)
       
    }
    return(
        <Fragment>
        <form onSubmit={submitHandler}>
            <input type='number' min='0' max='99' ref={inputRef}>{itemCount}</input>
            <button type='submit'>Add</button>
        </form>
        <div>{`itemCount:${itemInput}`}</div>
        </Fragment>
    )
 }

 export default MealItemForm;