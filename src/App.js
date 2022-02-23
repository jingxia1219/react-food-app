import Header from './components/Header'
import React,{useState} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
// import CartProvider from './store/CartProvider'
import CartContext from './store/cart-context';

function App() {
  const [modalStatus, setModalStatus] =useState(false)
  function openModalHandler() {
    setModalStatus(true)
  }
  function closeModalHandler() {
    setModalStatus(false)
  }
  function addItem() {}
  function removeItem() {}

  const CartContextValue = {
    items:[],
    totalAmount: 0,
    addItem:addItem,
    removeItem: removeItem
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
