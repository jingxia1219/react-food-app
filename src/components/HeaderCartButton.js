import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from '../store/cart-context'
import {useContext} from 'react'

function HeaderCartButton(props) {
    const ctx = useContext(CartContext);

    function clickCartHandler() {
        props.openModal();
    }

    return(
        <button onClick={clickCartHandler} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon /> 
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{ctx.items.length}</span>
        </button>
    )
}


export default HeaderCartButton;