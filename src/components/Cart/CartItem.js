import classes from './CartItem.module.css'
import CartContext from '../../store/cart-context'
import {useContext,Fragment, useState} from 'react'

function CartItem(props) {
    const ctx = useContext(CartContext)
    const [items, setItems] = useState(ctx.items)
    const cartItems = items.map ( item=> {

        const addHandler = (event) => {
            let singleItem = {...item,
    amount:1};
    
            ctx.addItem(singleItem)
            console.log("ctx:", ctx)
            console.log("after adding: item amount is",item.amount)
        }
        const removeHandler = (event) => {
            ctx.removeItem(item.id)
            console.log(ctx)
            if (item.amount ===0) { 
                setItems( items => { return items.filter( funcItem => funcItem.id !== item.id ) })}
                props.reloadCart();
        }
        return (
            <li key={item.id} className={classes['cart-item']}>
                <div>
                    <h2>{item.name}</h2>
                    <div className={classes.summary}>
                        <span className={classes.price}>{item.price}</span>
                        <span className={classes.amount}>x {item.amount}</span>
                    </div>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeHandler}>-</button>
                    <button onClick={addHandler}>+</button>
                </div>
            </li>
        )
    })
    return <Fragment>{cartItems}</Fragment>
}

export default CartItem;