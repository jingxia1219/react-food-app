import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import {useContext, useEffect} from 'react'
import CartContext from '../../store/cart-context';
// import {useState} from 'react'

function Cart (props) {
    const ctx = useContext(CartContext);
    console.log(ctx)
    const hasItems = ctx.items.length > 0 ;
    let totalAmount= 0;
    const cartItems = (

        <ul className={classes['cart-items']}>
            {ctx.items.map( item =>{
                totalAmount = `$${ctx.totalAmount}`;
                return(
                <li key={item.id}>{item.name}</li>)
            })}
        </ul>
    );
    function closeHandler() {
        props.closeModal();
    };
    const modalElement = <Modal closeModal={props.closeModal}>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
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