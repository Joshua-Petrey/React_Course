import { useReducer } from "react";
import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // update price of all items
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Check if item is already in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      // if item already is in cart, create updatedItem with increased amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // copy current cart items
      updatedItems = [...state.items];
      // replace the old item with its updated value
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // return new cart with new item if not already one inside
      updatedItems = state.items.concat(action.item);
    }

    // return new state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};


const CartProvider = (props) => {

  /// set initial state and connect reducer
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  // Called in MEalITemForm
  const addItemHandler = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', item: item})
  }

  const removeItemHandler = (id) => {
     dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };
  
  // The latest state of context passed to the CartContext.Provider
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider