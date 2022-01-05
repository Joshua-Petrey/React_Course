import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  itemsInCart: 0,
  changed: false
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.itemsInCart = action.payload.itemsInCart || 0;
      state.items = action.payload.items || [];
    },
    addItemToCart(state, action) {
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);
      state.itemsInCart++;
      state.changed = true
      if (!existingItem) {
        state.items.push({
          id: itemToAdd.id,
          price: itemToAdd.price,
          quantity: 1,
          totalPrice: itemToAdd.price,
          name: itemToAdd.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + itemToAdd.price;
      }
    },
    removeItemFromCart(state, action) {
      const itemID = action.payload;
      const existingItem = state.items.find((item) => item.id === itemID);
      state.itemsInCart--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => itemID !== item.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
