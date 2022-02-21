import classes from './MealItem.module.css'

function MealItem(props) {
    const price = `$${props.price}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>
                    {props.name}
                </h3>
            </div>
            <div>{props.description}</div>
            <div>{price}</div>
        </li>
    )
}

export default MealItem;