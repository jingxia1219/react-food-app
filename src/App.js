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
function cartReducer(state,{type,payload}) {
  if (type === 'ADD') {
    const updatedItems = state.items.concat(payload);
    console.log('state,',state)
    console.log(payload)
    const updatedTotalAmount = (+state.totalAmount + payload.price*payload.amount).toFixed(2)
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
}

function App() {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  function addItemHandler(item) {
    dispatchCartAction({type: 'ADD', payload:item})
  }
  function removeItemHandler(id) {
    dispatchCartAction({type:'REMOVE', payload: id})
  }

  const [modalStatus, setModalStatus] =useState(false)
  function openModalHandler() {
    setModalStatus(true)
  }
  function closeModalHandler() {
    setModalStatus(false)
  }
  // function addItem() {}
  // function removeItem() {}

  const CartContextValue = {
    items:cartState.items,
    totalAmount: +cartState.totalAmount,
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
