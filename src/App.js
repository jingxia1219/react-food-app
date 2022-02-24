import Header from './components/Header'
import React,{useState, useReducer} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
// import CartProvider from './store/CartProvider'
import CartContext from './store/cart-context';

const defaultCartState={
  items:[],
  totalAmount:0
};
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

function App() {
  const [totalAmountState,setTotalAmountState] = useState(0)
  const [cartItems, setCartItems]=useState([])
  // const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  const [modalStatus, setModalStatus] =useState(false)
  
  function addItemHandler(item){
    setCartItems((cartItems)=>{ return [...cartItems,item]});
    setTotalAmountState((totalAmount)=>{
      return (totalAmount+item.price*item.amount)
    })
  }
  function removeItemHandler(id) {}

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
