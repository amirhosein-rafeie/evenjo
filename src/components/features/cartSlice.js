import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const event = action.payload;
      const existingItem = state.items.find((item) => item.id === event.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...event,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const eventId = action.payload;
      state.items = state.items.filter((item) => item.id !== eventId);
    },
    updateQuantity: (state, action) => {
      const { eventId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === eventId);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== eventId);
        } else {
          item.quantity = quantity;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCartOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  setCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;


