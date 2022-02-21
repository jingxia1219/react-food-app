import Header from './components/Header'
import {Fragment, useState} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [modalStatus, setModalStatus] =useState(false)
  function openModalHandler() {
    setModalStatus(true)
  }
  function closeModalHandler() {
    setModalStatus(false)
  }

  return (
    <Fragment>
      <Cart closeModal = {closeModalHandler} modalStatus={modalStatus}/>
      <Header openModal={openModalHandler}/>
      <Meals/>
    </Fragment>
  );
}
 
export default App;
