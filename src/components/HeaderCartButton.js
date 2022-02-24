import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from '../store/cart-context'
import {useContext} from 'react'

function HeaderCartButton(props) {
    const ctx = useContext(CartContext);
    function clickCartHandler() {
        console.log(ctx)
        props.openModal();
    }
   let numOfItems = 0;  
//    console.log("HeaderCartButton, ctx:",ctx)
   ctx.items.forEach(item=> numOfItems= numOfItems+item.amount)
    return(
        <button onClick={clickCartHandler} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon /> 
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfItems}</span>
        </button>
    )
}


export default HeaderCartButton;