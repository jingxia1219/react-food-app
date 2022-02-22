import Header from './components/Header'
import { useState} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [modalStatus, setModalStatus] =useState(false)
  function openModalHandler() {
    setModalStatus(true)
  }
  function closeModalHandler() {
    setModalStatus(false)
  }

  return (
    <CartProvider>
      {modalStatus && <Cart closeModal = {closeModalHandler} modalStatus={modalStatus}/>}
      <Header openModal={openModalHandler}/>
      <Meals/>
    </CartProvider>
  );
}
 
export default App;
