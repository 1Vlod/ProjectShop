import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [{
    name: "PS 5",
    price: "100$"
  },
  {
    name: "PS 3",
    price: "49$"
  },
  {
    name: "PS 4",
    price: "70$"
  }],
  reducers: {
    increment: state => {
      state.push({
        name: "XBOX S",
        price: "250$"
      });
    }
  },
});

export const { increment } = itemsSlice.actions;

export const selectItems = state => state.items

export default itemsSlice.reducer;