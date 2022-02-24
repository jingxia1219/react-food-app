// import {useState} from 'react'
 //     <ul className={classes['cart-items']}>
 //         {ctx.items.map( item =>{
 //             totalAmount = `$${ctx.totalAmount}`;
 // return(
 //             <li key={item.id}>{item.name}</li>)
 //         })}
 //     </ul>
 // );
import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import {useContext, useEffect} from 'react'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem'

function Cart (props) {
    const ctx = useContext(CartContext);
    console.log(ctx)
    const hasItems = ctx.items.length > 0 ;
    function closeHandler() {
        props.closeModal();
    };
    const modalElement = <Modal closeModal={props.closeModal}>
    <ul className={classes['cart-items']}><CartItem/></ul>
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