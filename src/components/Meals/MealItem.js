import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';
import {useContext} from 'react';

function MealItem(props) {
    const ctx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`

    // let thisItemTotal=0;
    function getItemNumberHandler(itemNumber){
        console.log(itemNumber)
        if (itemNumber > 0 && ctx.items.includes(props.meal) === false){
          ctx.addItem({...props.meal, amount:+itemNumber})
        }
        // thisItemTotal= itemNumber*props.price
        // ctx.totalAmount = +(ctx.totalAmount+thisItemTotal).toFixed(2)
        console.log("CTX",ctx)
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
             <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <MealItemForm getItemNumber={getItemNumberHandler}/> 
        </li>
    )
}

export default MealItem;