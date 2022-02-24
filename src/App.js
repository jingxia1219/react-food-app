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
import React,{useState, useReducer} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartContext from './store/cart-context';


function App() {
  const [totalAmountState,setTotalAmountState] = useState(0)
  const [cartItems, setCartItems]=useState([])
  const [modalStatus, setModalStatus] =useState(false)
  
  function addItemHandler(item){
    const existingIndex = cartItems.findIndex(existingitem => item.id === existingitem.id )
    if (cartItems[existingIndex]){
      const updatedItem = {...item, amount:(1+cartItems[existingIndex].amount)}
      // cartItems[existingIndex].amount = cartItems[existingIndex].amount + item.amount
     let updatedItems = cartItems;
     updatedItems[existingIndex] = updatedItem;
     setCartItems(updatedItems);
    } else {
    setCartItems((cartItems)=>{ return [...cartItems,item]})
    console.log('cartIems in App.js:', cartItems)}
    setTotalAmountState((totalAmount)=>{
      return (totalAmount+item.price*item.amount)}
    )
  }
  function removeItemHandler(id) {
    
  }

  function openModalHandler() {
    setModalStatus(true)
  }
  function closeModalHandler() {
    setModalStatus(false)
  }
//  console.log(cartItems)
  const CartContextValue = {
    items:cartItems,
    totalAmount: +totalAmountState.toFixed(2),
    addItem:addItemHandler,
    removeItem: removeItemHandler
  }
  return (
    <CartContext.Provider value={CartContextValue}>
      {console.log(CartContextValue)}
      {modalStatus && <Cart closeModal = {closeModalHandler} modalStatus={modalStatus}/>}
      <Header openModal={openModalHandler}/>
      <Meals/>
      </CartContext.Provider>
  );
}
 
export default App;
