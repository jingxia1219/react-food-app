import  classes from './Header.module.css';
import Cart from './Cart'
import MealImage from '../assets/meals.jpg';
import {Fragment} from 'react'
import HeaderCartButton  from './HeaderCartButton';

function Header() {
    return (
     <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']} >
            <img src={MealImage} alt='a table full of delicious food' /> 
        </div>
        <Cart/>
        </Fragment>
    )}

export default Header; 
