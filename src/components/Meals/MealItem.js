import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';
import {useContext} from 'react';

function MealItem(props) {
    const ctx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`
    function onAmountHandler(amount){
        ctx.addItem(
            {name: props.name}
        )
        ctx.totalAmount= ctx.totalAmount+props.price 
    }

    let thisItemTotal=0;
    function getItemNumber(itemNumber){
        console.log(itemNumber)
        console.log(ctx.items.includes(props.meal) === false)
        if (itemNumber > 0 && ctx.items.includes(props.meal) === false){
            console.log(props.meal)
          ctx.items.push(props.meal)
          thisItemTotal= itemNumber*props.price
          ctx.totalAmount = ctx.totalAmount+thisItemTotal
        }
        console.log("CTX",ctx)
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
             <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <MealItemForm getItemNumber={getItemNumber} onAmount={onAmountHandler}/> 
        </li>
    )
}

export default MealItem;