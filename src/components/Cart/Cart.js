import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import {useContext, useState} from 'react'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem'

function Cart (props) {
    const [reload, setReload] = useState(0); 
    function reloadHandler() {
        setReload( prev => {return prev+1})
    }
    const ctx = useContext(CartContext);
    console.log(ctx)
    const hasItems = ctx.items.length > 0 ;
    function closeHandler() {
        props.closeModal();
    };
    const modalElement = <Modal closeModal={props.closeModal}>
    <ul className={classes['cart-items']}><CartItem reloadCart={reloadHandler}/></ul>
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount}</span>
    </div>
    <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={closeHandler}>Close</button>
    {hasItems && <button className={classes.button}>Order</button>}
    </div>
    </Modal>
;
    // console.log(cartItems)
    return <div>
        {modalElement}
        </div>
}

export default Cart;