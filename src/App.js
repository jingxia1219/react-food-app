// function cartReducer(state,{type,payload}) {
//   if (type === 'ADD') {
//     const updatedItems = state.items.concat(payload);
//     console.log('state,',state)
//     console.log(payload)
//     const updatedTotalAmount = (+state.totalAmount + payload.price*payload.amount).toFixed(2)
//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount
//     }
//   }
// }
// const defaultCartState={
//   items:[],
//   totalAmount:0
// };
// const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
import Header from './components/Header'
import React,{useState} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartContext from './store/cart-context';
// import MealItemForm from './components/Meals/MealItemForm';

function App() {
  const [totalAmountState,setTotalAmountState] = useState(0)
  const [cartItems, setCartItems]=useState([])
  const [modalStatus, setModalStatus] =useState(false)
  
  function addItemHandler(item){
    const existingIndex = cartItems.findIndex(existingitem => item.id === existingitem.id )
    if (cartItems[existingIndex]){
      const updatedItem = {...item, amount:(item.amount+cartItems[existingIndex].amount)}
     let updatedItems = cartItems;
     updatedItems[existingIndex] = updatedItem;
     setCartItems(updatedItems);
    } else {
    setCartItems((cartItems)=>{ return [...cartItems,item]})
  }
    setTotalAmountState((totalAmount)=>{
      return (totalAmount+item.price*item.amount)}
    )
  }
  function removeItemHandler(id) {
    const existingIndex = cartItems.findIndex( item => item.id === id)
    const newAmount = cartItems[existingIndex].amount - 1
    let updatedItem = cartItems[existingIndex]; //updatedItem var before update
    let updatedItems = cartItems
    if (newAmount > 0) {
         updatedItem = {...cartItems[existingIndex],amount:newAmount };//to update the amount to amount - 1
     updatedItems[existingIndex] = updatedItem // new array with updated item
     setCartItems(updatedItems)
    } else { //when amount is 0 
       updatedItems = cartItems.filter( item =>  item.id !== id )
      setCartItems(updatedItems)
     }
     setTotalAmountState((totalAmount)=>{
      return (totalAmount-updatedItem.price)}
    )
  }

  function openModalHandler() {
    setModalStatus(true)
  }
  function closeModalHandler() {
    setModalStatus(false)
  }
  const CartContextValue = {
    items:cartItems,
    totalAmount: +totalAmountState.toFixed(2),
    addItem:addItemHandler,
    removeItem: removeItemHandler
  }
  console.log(CartContextValue.items)
  return (
    <CartContext.Provider value={CartContextValue}>
      {/* {console.log("CartContext in App.js:",CartContextValue)} */}
      {modalStatus && <Cart closeModal = {closeModalHandler} modalStatus={modalStatus}/>}
      <Header openModal={openModalHandler}/>
      <Meals/>
      </CartContext.Provider>
  );
}
 
export default App;
