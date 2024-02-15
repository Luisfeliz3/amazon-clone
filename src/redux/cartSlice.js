import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //chekc if the product we have recieve is already in the array
      const addProductExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExist) {
        addProductExist.quantity = +parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productsNumber =
        state.productsNumber + parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      //find product removing from the array

      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );

      //then remove quantity from prodsuct number

      state.productsNumber = state.productsNumber - productToRemove.quantity;

      //find index of prouduct being removed
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
        state.products.splice(index,1)

    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
