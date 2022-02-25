import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from '../store/cart-context'
import {useContext, useEffect, useState} from 'react'

function HeaderCartButton(props) {
    const ctx = useContext(CartContext);
    function clickCartHandler() {
        // console.log(ctx)
        props.openModal();
    }
    const [bumpEffect, setBumpEffect] = useState(false)
    console.log("bumpEffect:",bumpEffect)
    console.log("ctx.items.length > 0?",ctx.items.length > 0)
    useEffect(()=> {
        if (ctx.items.length > 0) {
            console.log('length > 0, should bump')
            setBumpEffect(true,
            setTimeout(()=>{
                setBumpEffect(false)
            }, 300))
            // return () => {
            //     clearTimeout(timer)
            // }
        }
    } , [ctx])
   let numOfItems = 0;  
//    console.log("HeaderCartButton, ctx:",ctx)
   ctx.items.forEach(item=> numOfItems= numOfItems+item.amount)
    const bumpClassName = `${classes.button} ${bumpEffect ? classes.bump : ''}`
    return(
        <button onClick={clickCartHandler} className={bumpClassName}>
            <span className={classes.icon}>
                <CartIcon /> 
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfItems}</span>
        </button>
    )
}


export default HeaderCartButton;