import  classes from './Header.module.css';
import MealImage from '../assets/meals.jpg';
import {Fragment} from 'react'
import HeaderCartButton  from './HeaderCartButton';
// import CartContext  from '../store/cart-context';

function Header(props) {

    return (
     <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton openModal={props.openModal} />
        </header>
        <div className={classes['main-image']} >
            <img src={MealImage} alt='a table full of delicious food' /> 
        </div>
        
        </Fragment>
    )}

export default Header; 
