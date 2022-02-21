import classes from './Cart.module.css';
import Modal from '../../UI/Modal'
// import {useState} from 'react'

function Cart (props) {
    let totalAmount= 0;
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{id:"c1", name: 'sushi', amount: 2, price: 12.99}].map( item =>{
                totalAmount = item.price + totalAmount;
                // console.log(item);
                // console.log(totalAmount)
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
    <button className={classes.button}>Order</button>
    </div>
    </Modal>
;
    // console.log(cartItems)
    return <div>
        {props.modalStatus && modalElement}
        </div>
}

export default Cart;