// import CartContext from './cart-context'
// import React from 'react';

// function CartProvider(props){
//     function addItem(item,items){
//         items.push(item)
//     }
//     function removeItem(id,items){
//         items = items.filter( item=> item.id !== id)
//     }
//     const contextValue= {
//         items:[],
//         totalAmount:0,
//         addItem: addItem,
//         removeItem: removeItem
//     }

//     return <CartContext.Provider value={contextValue}>
//         {props.children}
//     </CartContext.Provider>
// }

// export default CartProvider;