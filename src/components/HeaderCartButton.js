import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon'

function HeaderCartButton(props) {
    function clickCartHandler() {
        props.openModal();
    }
    return(
        <button onClick={clickCartHandler} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon /> 
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}


export default HeaderCartButton;