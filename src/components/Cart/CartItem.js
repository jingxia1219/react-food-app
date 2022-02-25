import classes from './CartItem.module.css'
import CartContext from '../../store/cart-context'
import {useContext,Fragment, useState} from 'react'

function CartItem() {
    const ctx = useContext(CartContext)
    // const [items, setItems] = useState(ctx.items)
    const cartItems = ctx.items.map ( item=> {
    const addHandler = (event) => {
        let singleItem = {...item,
amount:1};
        ctx.addItem(singleItem)
    }
    const removeHandler = (event) => {
    console.log('Now deleting one ',item.name)
    ctx.removeItem(item.id)
    console.log(item.name, " item.amount: ", item.amount)
        if (item.amount === 0) { 
            // setItems( items => { return items.filter( funcItem => funcItem.id !== item.id ) })
        }
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